import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="quick-links">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#book-appointment">Book Appointment</a></li>
          <li><a href="#store">Store</a></li>
          <li><a href="#community">Community</a></li>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#contact-us">Contact Us</a></li>
          <li><a href="#privacy-policy">Privacy Policy</a></li>
          <li><a href="#terms-of-service">Terms of Service</a></li>
        </ul>
      </div>
      <div className="contact-info">
        <p>Address: 123 HealthCare St, Wellness City</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: contact@healthcare.com</p>
      </div>
      <div className="social-media">
        <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
        <a href="#twitter"><i className="fab fa-twitter"></i></a>
        <a href="#linkedin"><i className="fab fa-linkedin-in"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
