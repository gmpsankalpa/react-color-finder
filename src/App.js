// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ColorFinder from './components/ColorFinder';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ColorFinder />} />
        {/* Add more routes if needed */}
      </Routes>
    </Router>
  );
}

export default App;
