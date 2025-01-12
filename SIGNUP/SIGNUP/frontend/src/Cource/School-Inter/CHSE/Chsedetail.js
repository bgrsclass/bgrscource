// Chsedetail.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Chsedetail.css'; // Import the CSS file for styling

function Chsedetail() {
  return (
    <div className="chse-detail-container">
      <h1 className="chse-title">CHSE Schooling Details</h1>
      <p className="chse-description">Explore the CHSE curriculum designed for students in Class 11 and Class 12.</p>

      <div className="class-list">
        <div className="class-item">
          <Link to="/chseclass11" className="class-link">
            <h3>Class 11</h3>
            <p>Advanced Studies and Preparation</p>
          </Link>
        </div>
        <div className="class-item">
          <Link to="/chseclass12" className="class-link">
            <h3>Class 12</h3>
            <p>Final Year Preparation for Board Exams</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Chsedetail;
