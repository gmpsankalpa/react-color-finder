// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ColorFinder from './components/ColorFinder';
import Menu from './components/Menu';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/color-finder" element={<ColorFinder />} />
        {/* Add more routes for other pages as needed */}
      </Routes>
    </Router>
  );
};

export default App;
