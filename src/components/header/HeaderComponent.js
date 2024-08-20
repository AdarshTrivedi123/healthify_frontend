import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      let fname = localStorage.getItem('first_name');
      let lname = localStorage.getItem('last_name');
      if (fname) {
        setIsLoggedIn(true);
        setFirstName(fname[0]);
        setLastName(lname?lname[0]:"");
      }
    }
  }, []);

  const optional_links = isLoggedIn ? (
    <>
      <li className='nav_name'>{firstName}{lastName}</li>
    </>
  ) : (
    <>
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
    </>
  );

  return (
    <header className="header">
      <div className="logo">HealthCare</div>
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/appointments">Book Appointment</a></li>
          <li><a href="/store">Store</a></li>
          <li><a href="#community">Community</a></li>
          {optional_links}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
