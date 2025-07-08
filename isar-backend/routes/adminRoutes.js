// File: routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Get all users
router.get('/users', async (req, res) => {
  try {
    const [users] = await db.query('SELECT id, name, email, created_at FROM users');
    res.json({ success: true, users });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error fetching users' });
  }
});

// Get all courses
router.get('/courses', async (req, res) => {
  try {
    const [courses] = await db.query(
      `SELECT id, title, description, price, created_at, image_url FROM courses`
    );
    res.json({ success: true, courses });
  } catch (err) {
    console.error('Courses fetch error:', err); // 👈 Logs actual DB error
    res.status(500).json({ success: false, message: 'Error fetching courses' });
  }
});


// Get all enrollments
// Corrected Enrollment Route
router.get('/enrollments', async (req, res) => {
  try {
    const [enrollments] = await db.query(
      `SELECT 
         e.id, 
         e.user_id, 
         u.name AS user_name, 
         e.course_name, 
         e.price, 
         e.enrolled_at 
       FROM enrollments e 
       JOIN users u ON e.user_id = u.id`
    );
    res.json({ success: true, enrollments });
  } catch (err) {
    console.error('Enrollment fetch error:', err); // log actual error
    res.status(500).json({ success: false, message: 'Error fetching enrollments' });
  }
});


// Get all payments
// Example inside routes/adminRoutes.js
router.get('/payments', async (req, res) => {
  try {
    const [results] = await db.query(`
      SELECT 
        p.id,
        p.receipt_id,
        p.amount,
        p.status,
        p.payment_date,
        u.name AS user_name,
        u.email,
        c.title AS course_title
      FROM payments p
      JOIN users u ON p.user_id = u.id
      JOIN courses c ON p.course_id = c.id
      ORDER BY p.payment_date DESC
    `);

    res.json({ success: true, payments: results });
  } catch (err) {
    console.error('🔴 Admin payment fetch error:', err);
    res.status(500).json({ success: false, error: 'Failed to fetch payments' });
  }
});

 router.get('/stats', async (req, res) => {
  try {
    const [[userCount]] = await db.query('SELECT COUNT(*) AS total_users FROM users');
    const [[enrollmentCount]] = await db.query('SELECT COUNT(*) AS total_enrollments FROM enrollments');
    const [[paymentCount]] = await db.query('SELECT COUNT(*) AS total_payments FROM payments');
    res.json({
      success: true,
      stats: {
        total_users: userCount.total_users,
        total_enrollments: enrollmentCount.total_enrollments,
        total_payments: paymentCount.total_payments
      }
    });
  } catch (err) {
    console.error('Stats fetch error:', err.message); // 👈 add this
    res.status(500).json({ success: false, message: 'Error fetching stats' });
  }
});
router.get('/test-db', async (req, res) => {
  const db = require('../config/db');
  try {
    const [rows] = await db.query('SELECT NOW() AS current_time');
    res.json({ success: true, time: rows[0].current_time });
  } catch (err) {
    console.error('DB Test error:', err);
    res.status(500).json({ success: false, message: 'DB test failed', error: err.message });
  }
});





module.exports = router;
