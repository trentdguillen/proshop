// contactRoutes.js
import express from 'express';
const router = express.Router();
import { sendEmail } from '../controllers/contactController.js';

// Route for handling contact form submissions
router.post('/contact', sendEmail);

export default router;
