// src/classes/Class1.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Class.css'; // Optional: Import a CSS file for styling

function Class11() {
  return (
    <div className="class-container">
      <h1 className="class-title">Class 11: Introduction to Basics</h1>
      <p className="class-description">In this class, we will cover the basics of various subjects, laying a strong foundation for future learning.</p>

      <Link to="/chse" className="back-button">Back to CHSE Schooling Details</Link>
    </div>
  );
}

export default Class11;
