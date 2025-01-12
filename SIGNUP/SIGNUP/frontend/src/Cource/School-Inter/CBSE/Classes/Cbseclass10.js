// src/classes/Class1.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Class.css'; // Optional: Import a CSS file for styling

function Cbseclass10() {
  return (
    <div className="class-container">
      <h1 className="class-title">Class 10: Introduction to Basics</h1>
      <p className="class-description">In this class, we will cover the basics of various subjects, laying a strong foundation for future learning.</p>

      <Link to="/cbse" className="back-button">Back to CBSE Schooling Details</Link>
    </div>
  );
}

export default Cbseclass10;
