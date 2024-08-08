// src/components/Nav.js
import React from 'react';
import './Nav.css'; // Import the CSS file for styling

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Ambulance</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
