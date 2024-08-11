import React, { useState } from 'react';
import axios from 'axios';

const OTPForm = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/otp/verify', {
        email,
        otp
      });
      if (response.data.success) {
        window.location.href = '/welcome'; // Redirect to the welcome page
      } else {
        alert('Invalid OTP');
      }
    } catch (error) {
      console.error('Error during OTP verification:', error);
      alert('Error verifying OTP');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br />
      <label htmlFor="otp">Enter OTP:</label>
      <input
        type="text"
        id="otp"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        required
      />
      <br />
      <button type="submit">Verify OTP</button>
    </form>
  );
};

export default OTPForm;
