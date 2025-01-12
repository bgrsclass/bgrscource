import React from 'react';
import { Link } from 'react-router-dom';
import './Class.css'; // Import a CSS file for styling

function Class1() {
  return (
    <div className="class-container">
      <h1 className="class-title">CLASS 1 : BOOK (PDF)</h1>
      <p className="class-description">This is for reading purposes.</p>
      <div className="class-list">
      <a
          href="frontend\src\Cource\School-Inter\BSE\Classes\BOOK\Hasakhela1.pdf"
          className="class-item"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>ହସ ଖେଳ ଭାଗ ୧</h3>
          <p>Hasa Khela 1</p>
        </a>
        <Link to="" className="class-item">
          <h3>ହସ ଖେଳ ଭାଗ ୨</h3>
          <p>Hasa Khela 2</p>
        </Link>
        <Link to="" className="class-item">
          <h3>ଗଣିତ କାର୍ଯ୍ୟ ପୁସ୍ତିକା ୧</h3>
          <p>Ganita</p>
        </Link>
        <Link to="" className="class-item">
          <h3>ଶିଖର ୧</h3>
          <p>Sikhara</p>
        </Link>
        <Link to="" className="class-item">
          <h3>ହିନ୍ଦୀ ପାଠ ୧</h3>
          <p>Hindi Patha</p>
        </Link>
      </div>

      <div className="section-separator"></div> {/* Spacer */}

      <h1 className="class-title">CLASS 1 : BOOK (VIDEO)</h1>
      <p className="class-description">This is for video purposes.</p>
      <div className="class-list">
        <Link to="" className="class-item">
          <h3>ହସ ଖେଳ ଭାଗ ୧</h3>
          <p>Hasa Khela 1</p>
        </Link>
        <Link to="" className="class-item">
          <h3>ହସ ଖେଳ ଭାଗ ୨</h3>
          <p>Hasa Khela 2</p>
        </Link>
        <Link to="" className="class-item">
          <h3>ଗଣିତ କାର୍ଯ୍ୟ ପୁସ୍ତିକା ୧</h3>
          <p>Ganita</p>
        </Link>
        <Link to="" className="class-item">
          <h3>ଶିଖର ୧</h3>
          <p>Sikhara</p>
        </Link>
        <Link to="" className="class-item">
          <h3>ହିନ୍ଦୀ ପାଠ ୧</h3>
          <p>Hindi Patha</p>
        </Link>
      </div>

      <div className="section-separator"></div> {/* Spacer */}

      <h1 className="class-title">CLASS 1 : MBD (PDF)</h1>
      <p className="class-description">This is for MBD reading purposes.</p>
      <div className="class-list">
        <Link to="" className="class-item">
          <h3>ହସ ଖେଳ ଭାଗ ୧</h3>
          <p>Hasa Khela 1</p>
        </Link>
        <Link to="" className="class-item">
          <h3>ହସ ଖେଳ ଭାଗ ୨</h3>
          <p>Hasa Khela 2</p>
        </Link>
        <Link to="" className="class-item">
          <h3>ଗଣିତ କାର୍ଯ୍ୟ ପୁସ୍ତିକା ୧</h3>
          <p>Ganita</p>
        </Link>
        <Link to="" className="class-item">
          <h3>ଶିଖର ୧</h3>
          <p>Sikhara</p>
        </Link>
        <Link to="" className="class-item">
          <h3>ହିନ୍ଦୀ ପାଠ ୧</h3>
          <p>Hindi Patha</p>
        </Link>
      </div>
    </div>
  );
}

export default Class1;
