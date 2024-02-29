// src/components/ColorFinder.js
import React, { useState } from 'react';
import ColorPicker from './ColorPicker';
import './ColorFinder.css';

const ColorFinder = () => {
  const [selectedColor, setSelectedColor] = useState('#ffffff');

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="color-finder-container">
      <h1>Color Finder</h1>
      <ColorPicker onSelectColor={handleColorSelection} />
      <div className="color-display" style={{ backgroundColor: selectedColor }}></div>
      <p>Selected Color: {selectedColor}</p>
    </div>
  );
};

export default ColorFinder;
