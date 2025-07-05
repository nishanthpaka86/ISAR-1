const express = require('express');
const Razorpay = require('razorpay');
const crypto = require('crypto');
const db = require('../config/db');
require('dotenv').config();

const router = express.Router();

// ✅ Initialize Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

// ✅ Create Razorpay Order
router.post('/create-order', async (req, res) => {
  const { amount } = req.body;

  if (!amount) {
    return res.status(400).json({ success: false, error: 'Amount is required' });
  }

  try {
    const order = await razorpay.orders.create({
      amount: amount * 100, // Razorpay works in paise
      currency: 'INR',
      receipt: `receipt_order_${Date.now()}`,
    });

    res.json({ success: true, order });
  } catch (err) {
    console.error('🔴 Razorpay Order Error:', err);
    res.status(500).json({ success: false, error: 'Order creation failed' });
  }
});

// ✅ Verify Razorpay Payment
const verifyPayment = async (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    user_id,
    course_id,
    amount,
    currency,
    status,
    payment_date,
    receipt_id
  } = req.body;

  try {
    // TEMP: Skip verification if it's a manual/test payment
    if (razorpay_order_id.startsWith('order_manual_')) {
      await db.query(
        'INSERT INTO payments (user_id, course_id, razorpay_order_id, razorpay_payment_id, razorpay_signature, amount, currency, status, payment_date, receipt_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [user_id, course_id, razorpay_order_id, razorpay_payment_id, razorpay_signature, amount, currency, status, payment_date, receipt_id]
      );
      return res.json({ success: true, message: 'Manual payment stored successfully' });
    }

    // ✅ Real Razorpay Signature Verification
    const generated_signature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    if (generated_signature !== razorpay_signature) {
      return res.status(400).json({ success: false, error: "Invalid signature" });
    }

    // ✅ 1. Get course name using course_id
    const [courseResult] = await db.query('SELECT title FROM courses WHERE id = ?', [course_id]);
    const courseName = courseResult.length > 0 ? courseResult[0].title : null;

    if (!courseName) {
      return res.status(400).json({ success: false, error: 'Course not found in DB' });
    }

    // ✅ 2. Enroll user in course
    await db.query(
      'INSERT INTO enrollments (user_id, course_name, price, enrolled_at) VALUES (?, ?, ?, NOW())',
      [user_id, courseName, amount]
    );

    // ✅ 3. Generate next receipt_id
    const [receiptRow] = await db.query('SELECT MAX(receipt_id) AS max_id FROM payments');
    const nextReceiptId = receiptRow[0].max_id ? receiptRow[0].max_id + 1 : 100000;

    // ✅ 4. Insert payment details
    await db.query(
      `INSERT INTO payments 
        (user_id, course_id, razorpay_order_id, razorpay_payment_id, razorpay_signature, amount, currency, status, payment_date, receipt_id)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW(), ?)`,
      [
        user_id,
        course_id,
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
        amount,
        currency,
        'paid',
        nextReceiptId,
      ]
    );

    res.json({
      success: true,
      message: 'Payment verified, enrollment and payment recorded',
      receipt_id: nextReceiptId,
    });

  } catch (err) {
    console.error('🔴 DB Insert Error:', err);
    res.status(500).json({ success: false, error: 'Database error during payment verification' });
  }
};

// ✅ Register payment verification route
router.post('/verify-payment', verifyPayment);

module.exports = router;
