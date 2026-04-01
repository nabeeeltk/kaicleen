import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import logoImg from '../assets/logo-blue.jpg';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="logo logo-footer">
            <img src={logoImg} alt="Kaicleen Logo" className="footer-logo-img" style={{ height: '50px', borderRadius: '8px', background: 'white', padding: '8px' }} />
          </div>
          <p className="footer-tagline">The ultimate skin safe degreaser. Powerful on grime, gentle on you.</p>
        </div>
        
        <div className="footer-links-container">
          <div className="footer-links-group">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#products">Products</a>
          </div>
          <div className="footer-links-group">
            <h3>Legal</h3>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Return Policy</a>
          </div>
        </div>
        
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" aria-label="Email"><Mail size={24} /></a>
            <a href="#" aria-label="Phone"><Phone size={24} /></a>
            <a href="#" aria-label="Address"><MapPin size={24} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Kaicleen. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
