// CbseDetail.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Cbsedetail.css'; // Import the CSS file for styling

function Cbsedetail() {
  return (
    <div className="cbse-detail-container">
      <h1 className="cbse-title">CBSE Schooling Details</h1>
      <p className="cbse-description">
        Explore the CBSE curriculum designed to enhance learning for students from Class 1 to Class 12.
      </p>

      <div className="class-list">
        <Link to="/cbseclass1" className="class-item"> {/* Changed the path from cbse/cbseclass1 to cbse/class1 */}
          <h3>Class 1</h3>
          <p>Introduction to Basics</p>
        </Link>
        <Link to="/cbseclass2" className="class-item">
          <h3>Class 2</h3>
          <p>Building Foundations</p>
        </Link>
        <Link to="/cbseclass3" className="class-item">
          <h3>Class 3</h3>
          <p>Developing Critical Thinking</p>
        </Link>
        <Link to="/cbseclass4" className="class-item">
          <h3>Class 4</h3>
          <p>Advanced Learning Techniques</p>
        </Link>
        <Link to="/cbseclass5" className="class-item">
          <h3>Class 5</h3>
          <p>Preparing for Future Challenges</p>
        </Link>
        <Link to="/cbseclass6" className="class-item">
          <h3>Class 6</h3>
          <p>Understanding Core Subjects</p>
        </Link>
        <Link to="/cbseclass7" className="class-item">
          <h3>Class 7</h3>
          <p>Enhancing Knowledge</p>
        </Link>
        <Link to="/cbseclass8" className="class-item">
          <h3>Class 8</h3>
          <p>Advanced Projects and Research</p>
        </Link>
        <Link to="/cbseclass9" className="class-item">
          <h3>Class 9</h3>
          <p>Building Subject Proficiency</p>
        </Link>
        <Link to="/cbseclass10" className="class-item">
          <h3>Class 10</h3>
          <p>Preparing for Board Exams</p>
        </Link>
        <Link to="/cbseclass11" className="class-item">
          <h3>Class 11</h3>
          <p>Specialization in Subjects</p>
        </Link>
        <Link to="/cbseclass12" className="class-item">
          <h3>Class 12</h3>
          <p>Finalizing Your Academic Journey</p>
        </Link>
      </div>
    </div>
  );
}

export default Cbsedetail;
