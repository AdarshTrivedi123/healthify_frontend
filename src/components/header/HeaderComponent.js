import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <header className="header">
      <div className="logo">HealthCare</div>
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/appointments">Book Appointment</a></li>
          <li><a href="/store">Store</a></li>
          <li><a href="#community">Community</a></li>
          <li><a href="/login">Login</a></li>
          <li
            className="signup"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Sign Up
            {dropdownVisible && (
              <div className="dropdown">
                <a href="/signup-doctor">As Doctor</a>
                <a href="/signup-patient">As Patient</a>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

