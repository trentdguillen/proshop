import asyncHandler from '../middleware/asyncHandler.js';
import nodemailer from 'nodemailer';

// @desc    Send email
// @route   POST /api/send-email
// @access  Public
const sendEmail = asyncHandler(async (req, res) => {
  const { subject, message } = req.body;

  // Create a transporter using SMTP
  let transporter = nodemailer.createTransport({
    host: process.env.ELASTIC_EMAIL_HOST,
    port: 2525,
    secure: false,
    auth: {
      user: process.env.ELATIC_EMAIL_USER,
      pass: process.env.ELASTIC_EMAIL_PASS,
    }
  });

  try {
    // Send mail with defined transport object
    let info = await transporter.sendMail({
      from: process.env.FROM_EMAIL, // Sender address (must be same as auth.user)
      to: process.env.TO_EMAIL, // List of receivers
      subject: subject,
      text: message
    });

    console.log('Message sent: %s', info.messageId);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error occurred while sending email:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default sendEmail;
