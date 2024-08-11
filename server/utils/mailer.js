const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'sarithasasi.7@gmail.com',
    pass: 'dcwj guem ikar kvsc',
  },
});

const sendOTP = (email, otp) => {
  const mailOptions = {
    from: 'sarithasasi.7@gmail.com',
    to: 'sarithasasidharan0@gmail.com',
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendOTP };
