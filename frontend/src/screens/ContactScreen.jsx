// ContactPage.js
import React, { useState } from 'react';

const ContactScreen = () => {
  const [formData, setFormData] = useState({
    subject: '',
    message: ''
  });

  const { subject, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    // You can use fetch or any other method to send the form data to the backend
    console.log(formData);
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Subject:</label>
          <input type="text" name="subject" value={subject} onChange={handleChange} />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" value={message} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactScreen;
