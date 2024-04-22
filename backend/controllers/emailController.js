import asyncHandler from '../middleware/asyncHandler.js';
import nodemailer from 'nodemailer';

// @desc    Send email
// @route   POST /api/send-email
// @access  Public
const sendEmail = asyncHandler(async (req, res) => {
  const { subject, message } = req.body;

  // Create a transporter using SMTP
  let transporter = nodemailer.createTransport({
    host: 'smtp.elasticemail.com',
    port: 2525,
    secure: false,
    auth: {
      user: 'nicko20971@gmail.com',
      pass: '1A8F356F336CD7584A486F3192F35AC49595',
    }
  });

  try {
    // Send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'nicko20971@gmail.com', // Sender address (must be same as auth.user)
      to: 'njasper0126@gmail.com', // List of receivers
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
