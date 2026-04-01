import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo-blue.jpg';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="container navbar-container">
        <a href="#" className="logo">
          <img src={logoImg} alt="Kaicleen Logo" className="navbar-logo-img" style={{ height: '40px', mixBlendMode: 'multiply' }} />
        </a>

        <nav className={`nav-links ${isMobileMenuOpen ? 'active glass' : ''}`}>
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
          <a href="#products" onClick={() => setIsMobileMenuOpen(false)}>Products</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          <button className="btn-primary" onClick={() => setIsMobileMenuOpen(false)}>Order Now</button>
        </nav>

        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
