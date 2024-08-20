import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
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
      <div className="social-media-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="icon" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="icon" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
        <a href="mailto:your-email@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
        </a>
      </div>
      <div className="footer_line">Healing with care, embraced with trust.</div>
    </footer>
  );
};

export default Footer;
