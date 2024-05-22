import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import './GeneralContactForm.css';
import '../App.css'
const GeneralContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [captchaInput, setCaptchaInput] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    loadCaptchaEnginge(6); // Load CAPTCHA with 6 characters
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCaptchaChange = (e) => {
    setCaptchaInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateCaptcha(captchaInput)) {
      alert('Invalid CAPTCHA');
      loadCaptchaEnginge(6); // Reload CAPTCHA
      return;
    }

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then((result) => {
      console.log(result.text);
      setSubmitted(true);
    }, (error) => {
      console.log(error.text);
    });
    setFormData({ name: '', email: '', message: '' });
  };

  if (submitted) {
    return (
      <div className="contact-container">
        <h2>Thank you!</h2>
        <p>Your message has been sent successfully.</p>
      </div>
    );
  }

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <LoadCanvasTemplate />
          <input
            type="text"
            value={captchaInput}
            onChange={handleCaptchaChange}
            placeholder="Enter CAPTCHA"
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default GeneralContactForm;
