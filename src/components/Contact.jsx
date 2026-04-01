import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Get in <span className="text-gradient-blue">Touch</span></h2>
          <p className="section-subtitle">Have questions about our products or want to inquire about bulk ordering? We'd love to hear from you.</p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Fill up the form and our Team will get back to you within 24 hours.</p>
            
            <div className="info-item">
              <Phone className="info-icon" size={24} />
              <div>
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="info-item">
              <Mail className="info-icon" size={24} />
              <div>
                <h4>Email</h4>
                <p>support@kaicleen.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <MapPin className="info-icon" size={24} />
              <div>
                <h4>Address</h4>
                <p>123 Clean Industrial Pkwy<br/>Suite 100, Metropolis, NY 10001</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Bulk Order Inquiry" />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="How can we help you?" rows="5"></textarea>
            </div>

            <button type="submit" className="submit-btn btn-primary">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
