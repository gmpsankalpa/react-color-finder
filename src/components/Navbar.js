// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={navbarStyles}>
      <div style={logoStyle}>Color Palette</div>
      <ul style={navListStyle}>
        <li style={navItemStyle}><Link to="/" style={navLinkStyle}>Home</Link></li>
        <li style={navItemStyle}><Link to="/color-finder" style={navLinkStyle}>Color Finder</Link></li>
        {/* Add more navigation items and links for other pages */}
      </ul>
    </nav>
  );
};

const navbarStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 30px',
  backgroundColor: '#3498db',
  color: '#fff',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const logoStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
};

const navListStyle = {
  listStyle: 'none',
  display: 'flex',
};

const navItemStyle = {
  marginLeft: '20px',
};

const navLinkStyle = {
  textDecoration: 'none',
  color: '#fff',
  fontSize: '18px',
  fontWeight: 'bold',
};

export default Navbar;
