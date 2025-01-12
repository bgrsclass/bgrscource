// Icsedetail.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Icsedetail.css'; // Import the CSS file for styling

function Icsedetail() {
  return (
    <div className="icse-detail-container">
      <h1 className="icse-title">ICSE Schooling Details</h1>
      <p className="icse-description">Explore the ICSE curriculum designed for students from Class 1 to Class 10.</p>

      <div className="class-list">
        <div className="class-item">
          <Link to="/icseclass1" className="class-link">
            <h3>Class 1</h3>
            <p>Introduction to Basics</p>
          </Link>
        </div>
        <div className="class-item">
          <Link to="/icseclass2" className="class-link">
            <h3>Class 2</h3>
            <p>Building Foundations</p>
          </Link>
        </div>
        <div className="class-item">
          <Link to="/icseclass3" className="class-link">
            <h3>Class 3</h3>
            <p>Developing Critical Thinking</p>
          </Link>
        </div>
        <div className="class-item">
          <Link to="/icseclass4" className="class-link">
            <h3>Class 4</h3>
            <p>Advanced Learning Techniques</p>
          </Link>
        </div>
        <div className="class-item">
          <Link to="/icseclass5" className="class-link">
            <h3>Class 5</h3>
            <p>Preparing for Future Challenges</p>
          </Link>
        </div>
        <div className="class-item">
          <Link to="/icseclass6" className="class-link">
            <h3>Class 6</h3>
            <p>Understanding Core Subjects</p>
          </Link>
        </div>
        <div className="class-item">
          <Link to="/icseclass7" className="class-link">
            <h3>Class 7</h3>
            <p>Enhancing Knowledge</p>
          </Link>
        </div>
        <div className="class-item">
          <Link to="/icseclass8" className="class-link">
            <h3>Class 8</h3>
            <p>Advanced Projects and Research</p>
          </Link>
        </div>
        <div className="class-item">
          <Link to="/icseclass-9" className="class-link">
            <h3>Class 9</h3>
            <p>Building Subject Proficiency</p>
          </Link>
        </div>
        <div className="class-item">
          <Link to="/icseclass10" className="class-link">
            <h3>Class 10</h3>
            <p>Preparing for Board Exams</p>
          </Link>
          {/* <Link to="/icseclass11" className="class-item">
          <h3>Class 11</h3>
          <p>Specialization in Subjects</p>
        </Link>
        <Link to="/icseclass12" className="class-item">
          <h3>Class 12</h3>
          <p>Finalizing Your Academic Journey</p>
        </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Icsedetail;
