const express = require('express');
const router = express.Router();
const OTP = require('../models/otp');
const mailer = require('../utils/mailer');

// Handle OTP generation
router.post('/generate', async (req, res) => {
  const { email } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  console.log('Received email:', email);
  console.log('Generated OTP:', otp);

  try {
    const newOTP = new OTP({ email, otp });
    await newOTP.save();
    console.log('OTP saved to database');

    await mailer.sendOTP(email, otp);
    console.log('OTP sent to email');

    res.status(200).send('OTP sent');
  } catch (error) {
    console.error('Error generating OTP:', error);
    res.status(500).send('Error generating OTP');
  }
});



// Handle OTP verification

router.post('/verify', async (req, res) => {
  const { email, otp } = req.body;
  console.log('Received email:', email);
  console.log('Received OTP:', otp);

  try {
    const otpRecord = await OTP.findOne({ email, otp });

    if (otpRecord) {
      await OTP.deleteOne({ email, otp }); // Optionally delete the OTP after successful verification
      res.status(200).json({ success: true });
    } else {
      res.status(400).json({ success: false, message: 'Invalid OTP' });
    }
  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
