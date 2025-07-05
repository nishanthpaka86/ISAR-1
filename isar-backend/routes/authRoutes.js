const express = require('express');
const router = express.Router();
const { registerUser, loginUser, sendVerificationCode } = require('../controllers/authController');
const { enrollCourse, getUserCourses } = require('../controllers/authController');

// Existing routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// 🔐 New route to send email verification code
router.post('/send-code', sendVerificationCode);
router.post('/enroll', enrollCourse);
router.get('/courses/:id', getUserCourses);
const crypto = require('crypto');
const {
  sendOtp,
  resetPasswordWithOtp,
} = require('../controllers/authController');

router.post('/send-otp', sendOtp);
router.post('/reset-with-otp', resetPasswordWithOtp);


module.exports = router;