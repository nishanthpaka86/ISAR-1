// src/components/Payment.jsx
import React, { useEffect, useState } from 'react';
import './Payment.css';
import { useNavigate } from 'react-router-dom';
import { generateReceiptPDF } from '../utils/generateReceipt';

const Payment = () => {
  const [courseData, setCourseData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('selectedCourse'));
    const user = JSON.parse(localStorage.getItem('user'));

    if (!storedData) {
      navigate('/services');
    } else if (!user) {
      navigate('/login');
    } else {
      setCourseData(storedData);
    }
  }, [navigate]);

  if (!courseData) return null;

  const { course, price, discount, image, description } = courseData;
  const discountedPrice = price - (price * discount) / 100;

  const loadRazorpay = async () => {
    const user = JSON.parse(localStorage.getItem('user'));

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';

    script.onload = async () => {
      try {
        // Step 1: Create Order
        const orderRes = await fetch('https://isar-backend.onrender.com/api/payment/create-order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ amount: discountedPrice }),
        });
        const { success, order } = await orderRes.json();
        if (!success) return alert('Order creation failed');

        // Step 2: Payment Options
        const options = {
          key: process.env.REACT_APP_RAZORPAY_KEY_ID || 'rzp_test_YourKeyHere',
          amount: order.amount,
          currency: 'INR',
          name: 'ISAR',
          description: `Payment for ${course}`,
          order_id: order.id,
          handler: async function (response) {
            // Step 3: Verify Payment
            const verifyRes = await fetch('https://isar-backend.onrender.com/api/payment/verify', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                userId: user.id,
                courseName: course,
                price: discountedPrice,
              }),
            });

            const verifyData = await verifyRes.json();
            if (verifyData.success) {
              alert('Payment successful and course enrolled!');

              // ✅ Generate PDF Receipt
              generateReceiptPDF({
                user: {
                  fullName: user.fullName,
                  email: user.email,
                },
                course: {
                  name: course,
                },
                payment: {
                  amount: discountedPrice,
                  payment_id: response.razorpay_payment_id,
                  order_id: response.razorpay_order_id,
                  date: new Date().toISOString(),
                },
              });

              navigate('/dashboard');
            } else {
              alert('Payment verification failed');
            }
          },
          prefill: {
            name: user.fullName,
            email: user.email,
          },
          theme: {
            color: '#2B72FB',
          },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } catch (error) {
        console.error('Payment Error:', error);
        alert('Something went wrong during payment.');
      }
    };

    script.onerror = () => {
      alert('Failed to load Razorpay SDK');
    };

    document.body.appendChild(script);
  };

  const themeClass = {
    'Young Learners': 'theme-junior',
    'Junior High': 'theme-young',
    'Senior High': 'theme-senior',
    'Advanced Training': 'theme-advanced',
  }[course];

  return (
    <div className={`payment-container ${themeClass}`}>
      <div className="course-card">
        <h2>{course}</h2>
        <img src={image} alt={course} className="course-image" />
        <p className="description">{description}</p>
        <p><strong>Original Price:</strong> ₹{price}</p>
        <p><strong>Discount:</strong> {discount}%</p>
        <p><strong>Final Price:</strong> ₹{discountedPrice}</p>
        <button className="pay-btn" onClick={loadRazorpay}>
          Pay ₹{discountedPrice}
        </button>
      </div>
    </div>
  );
};

export default Payment;
