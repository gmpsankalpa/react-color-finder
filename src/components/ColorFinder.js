// src/components/ColorFinder.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import ColorPicker from './ColorPicker';

const ColorFinder = () => {
  const [selectedColor, setSelectedColor] = useState('#ffffff');

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const contentStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px', // Add border radius
    border: '2px solid #ccc', // Add border
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    margin: '20px',
  };

  const titleStyle = {
    fontSize: '24px',
    marginBottom: '20px',
  };

  const selectedColorDisplayStyle = (color) => ({
    width: '100px',
    height: '100px',
    backgroundColor: color,
    marginTop: '20px',
  });

  const hexCodeStyle = {
    fontSize: '18px',
    color: '#555',
    textAlign: 'center',
  };

  return (
    <div>
      <Navbar />
      <div style={contentStyles}>
        <h1 style={titleStyle}>Color Finder</h1>
        <ColorPicker onSelectColor={handleColorChange} />
        <div style={selectedColorDisplayStyle(selectedColor)}></div>
        <p style={hexCodeStyle}>Selected Color: {selectedColor}</p>
      </div>
    </div>
  );
};

export default ColorFinder;
