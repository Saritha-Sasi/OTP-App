import React, { useState } from 'react';
import axios from '../api/api';

const EmailForm = ({ onOTPGenerated }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/otp/generate', { email });
      onOTPGenerated();
    } catch (error) {
      console.error('Error generating OTP:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmailForm;
