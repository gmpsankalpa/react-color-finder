// src/components/Menu.js
import React from 'react';
import Navbar from './Navbar';

// Define contentStyles and titleStyle
const contentStyles = {
  padding: '20px',
  backgroundColor: '#f0f0f0',
};

const titleStyle = {
  fontSize: '24px',
  marginBottom: '20px',
};

const Menu = () => {
  return (
    <div>
      <Navbar />
      <div style={contentStyles}>
        <h1 style={titleStyle}>Menu</h1>
        {/* Add menu content */}
      </div>
    </div>
  );
};

export default Menu;
