// Cource.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Cource.css';

function Cource() {
  return (
    <div className="cource-container">
      {/* Schooling Section */}
      <section className="cource-section Schooling" aria-label="Schooling Section">
        <h1>Schooling (1-12)</h1>
        <p>Build a strong foundation in schooling with expert tutors guiding you every step of the way.</p>
        <ul>
          <li>
            <Link to="/cbse" className="cource-link">CBSE</Link> {/* Changed the link path to /cbse */}
          </li>
          <li>
            <Link to="/icse-schooling" className="cource-link">ICSE</Link>
          </li>
          <li>
            <Link to="/bse-schooling" className="cource-link">BSE</Link>
          </li>
          <li>
            <Link to="/chse-schooling" className="cource-link">CHSE</Link>
          </li>
        </ul>
      </section>

      {/* Post-Graduation Section */}
      <section className="cource-section Post-Graduation" aria-label="Post-Graduation Section">
        <h1>Post-Graduation</h1>
        <p>Master your subject and excel in your career with our comprehensive Post-Graduation programs.</p>
        <ul>
          <li>
            <Link to="/msc" className="cource-link">Master of Science (M.Sc)</Link>
          </li>
          <li>
            <Link to="/ma" className="cource-link">Master of Arts (M.A)</Link>
          </li>
          <li>
            <Link to="/mcom" className="cource-link">Master of Commerce (M.Com)</Link>
          </li>
          <li>
            <Link to="/bsc" className="cource-link">Bachelor of Science (B.Sc)</Link>
          </li>
        </ul>
      </section>

      {/* Skill Development Section */}
      <section className="cource-section SkillDevelopment" aria-label="Skill Development Section">
        <h1>Skill Development</h1>
        <p>Boost your career with our skill development programs designed for the modern workforce.</p>
        <ul>
          <li>
            <Link to="/programming" className="cource-link">Programming</Link>
          </li>
          <li>
            <Link to="/data-science" className="cource-link">Data Science</Link>
          </li>
          <li>
            <Link to="/digital-marketing" className="cource-link">Digital Marketing</Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Cource;
