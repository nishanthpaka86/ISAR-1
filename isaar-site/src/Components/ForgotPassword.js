import React, { useState } from 'react';
import './ForgotPassword.css';
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const sendOtp = async () => {
    const res = await fetch('https://isar-backend.onrender.com/api/auth/send-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    if (data.success) {
      alert('OTP sent to your email.');
      setStep(2);
    } else {
      alert(data.error);
    }
  };

  const resetPassword = async () => {
    const res = await fetch('https://isar-backend.onrender.com/api/auth/reset-with-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, otp, password: newPassword }),
    });
    const data = await res.json();
    if (data.success) {
      alert('Password reset successful. Please log in.');
      window.location.href = '/login';
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="otp-reset-container">
      <h2>Reset Password</h2>
      {step === 1 && (
        <>
          <input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button onClick={sendOtp}>Send OTP</button>
        </>
      )}

      {step === 2 && (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <button onClick={resetPassword}>Reset Password</button>
        </>
      )}
    </div>
  );
};

export default ForgotPassword;
