
import React, { useState } from 'react';
import { CirclePicker } from 'react-color';
import './ColorPicker.css'; // Create this CSS file

const ColorPicker = ({ onSelectColor }) => {
  const [selectedColor, setSelectedColor] = useState('#ffffff');

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
    onSelectColor(color.hex);
  };

  return (
    <div className="color-picker-container">
      <h2>Choose a Color</h2>
      <CirclePicker color={selectedColor} onChange={handleColorChange} />
    </div>
  );
};

export default ColorPicker;
