// Bsedetail.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Bsedetail.css'; // Optional: Import a CSS file for styling

function Bsedetail() {
  return (
    <div className="bse-detail-container">
      <h1 className="bse-title">BSE Schooling Details</h1>
      <p className="bse-description">Information about the BSE curriculum.</p>

      <div className="class-list">
        <Link to="/bse/class1" className="class-item">
          <h3>Class 1</h3>
          <p>Introduction to Basics</p>
        </Link>
        <Link to="/bse/class2" className="class-item">
          <h3>Class 2</h3>
          <p>Building Foundations</p>
        </Link>
        <Link to="/bse/class3" className="class-item">
          <h3>Class 3</h3>
          <p>Developing Critical Thinking</p>
        </Link>
        <Link to="/bse/class4" className="class-item">
          <h3>Class 4</h3>
          <p>Advanced Learning Techniques</p>
        </Link>
        <Link to="/bse/class5" className="class-item">
          <h3>Class 5</h3>
          <p>Preparing for Future Challenges</p>
        </Link>
        <Link to="/bse/class6" className="class-item">
          <h3>Class 6</h3>
          <p>Understanding Core Subjects</p>
        </Link>
        <Link to="/bse/class7" className="class-item">
          <h3>Class 7</h3>
          <p>Enhancing Knowledge</p>
        </Link>
        <Link to="/bse/class8" className="class-item">
          <h3>Class 8</h3>
          <p>Advanced Projects and Research</p>
        </Link>
        <Link to="/bse/class9" className="class-item">
          <h3>Class 9</h3>
          <p>Building Subject Proficiency</p>
        </Link>
        <Link to="/bse/class10" className="class-item">
          <h3>Class 10</h3>
          <p>Preparing for Board Exams</p>
        </Link>
      </div>
    </div>
  );
}

export default Bsedetail;
