import express from 'express';
const router = express.Router();
import sendEmail from '../controllers/emailController.js';

// Route for sending email
router.post('/send-email', sendEmail);

export default router;
