import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSendEmailMutation } from '../slices/emailSlice';
import Loader from '../components/Loader';
import { toast } from 'react-toastify';

const ContactScreen = () => {
  const [formData, setFormData] = useState({
    subject: '',
    message: ''
  });

  const { subject, message } = formData;
  const [sendEmail, { isLoading }] = useSendEmailMutation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!subject || !message) {
      toast.error('Please fill out both the subject and message fields.');
      return;
    }
    
    try {
      await sendEmail({ subject, message });
      setFormData({ subject: '', message: '' });
      toast.success('Email sent successfully');
    } catch (error) {
      console.error('Error occurred while sending email:', error);
      toast.error('Failed to send email. Please try again later.');
    }
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='subject' className="my-3">
          <Form.Label>Subject:</Form.Label>
          <Form.Control
            type='text'
            name='subject'
            value={subject}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId='message' className="my-3">
          <Form.Label>Message:</Form.Label>
          <Form.Control
            as='textarea'
            name='message'
            value={message}
            onChange={handleChange}
          />
        </Form.Group>
        <Button type='submit' variant='primary' className="mt-2" disabled={isLoading}>
          Submit
        </Button>
        {isLoading && <Loader />}
      </Form>
    </div>
  );
};

export default ContactScreen;
