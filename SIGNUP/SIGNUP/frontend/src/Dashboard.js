import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';
import { FaBars } from 'react-icons/fa';
import micrImage from './logo/micr.png';

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    navigate('/');
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = document.querySelector('.header').offsetHeight; // Get the header height
      const elementPosition = section.getBoundingClientRect().top; // Get the position of the section
      const offsetPosition = elementPosition + window.scrollY - headerOffset; // Calculate the offset position

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth' // Smooth scroll
      });
    }
  };

  // Define the handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send the data to a server)
    alert('Form submitted!'); // For demonstration
  };

  return (
    <div className="dashboard-layout">
      <header className="header bg-grey text-white p-2 d-flex justify-content-between align-items-center">
        <button onClick={toggleSidebar} className="btn btn-light">
          <FaBars />
        </button>
        
  
        <div className="mt-3">
          <li><button onClick={() => scrollToSection('about')} className="btn btn-link">About</button></li>
          <li><button onClick={() => scrollToSection('course')} className="btn btn-link">Course</button></li>
          <li><button onClick={() => scrollToSection('exam')} className="btn btn-link">Exam</button></li>
          <li><button onClick={() => scrollToSection('contact')} className="btn btn-link">Contact</button></li>
        </div>
      </header>

      <div className="dashboard-container d-flex">
        <div className={`sidebar bg-light p-0 ${isSidebarOpen ? 'open' : 'closed'}`}>
          <h3>Navigation</h3>
          <ul className="list-unstyled">
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
          <div className="logout-button mt-auto p-3">
            <button onClick={handleLogout} className="btn btn-danger w-100">Logout</button>
          </div>
        </div>
      {/* Main content */}

        <div className={`main-content p-0 ${isSidebarOpen ? 'expanded' : 'full-width'} negative-padding`}>
        <section id="about" className="content-section">
  <h4>About Us</h4>
  <a href="https://6781c607860fb66aa4e3a122--sunny-cranachan-f7d2f8.netlify.app/" target="_blank" rel="noopener noreferrer">
  <img 
    src={micrImage} 
    alt="About Us" 
    style={{ 
      width: '150px', 
      height: 'auto', 
      marginLeft: '200px' // Optional spacing
    }} 
  />
</a>


  <p>
    We are dedicated to providing top-notch educational resources that empower
    learners and foster academic success. Our mission is to create an engaging
    and inclusive learning environment.
  </p>
  <p>
    With a focus on innovation and excellence, we offer a variety of resources
    tailored to meet the needs of students at different stages of their
    educational journey.
  </p>
</section>

<section id="course" className="content-section">
  <h4>Our Courses</h4>
  <img src="courses.jpg" alt="Our Courses" className="section-image" />
  <p>
    Explore a diverse range of courses designed to build your skills and
    knowledge across various domains. Each course is crafted with care to
    ensure an enriching learning experience.
  </p>
</section>

          <section id="course" className="content-section">
  <h4>Available Courses</h4>
  <p>Our diverse range of courses includes:</p>
  <div className="course-list">
  <ul>
  <li>
    <Link to="/cource"><strong>Courses</strong></Link>
  
  </li>
  <li>
    <strong>Questions & Answers</strong>
  
  </li>
  <li>
    <strong>Quizes</strong>
  
  </li>
  <li>
    <strong>Projects</strong>
  
  </li>
  <li>
    <strong>Short-term Courses</strong>
   
  </li>
  <li>
    <strong>Competitive Exams</strong>
 
  </li>
  <li>
    <strong>Languages:</strong>
   
  </li>
  <li>
    <strong>Webinars</strong>
  
  </li>
  <li>
    <strong>Certification Programs</strong>
   
  </li>
  <li>
    <strong>Resource Center</strong>
    
  </li>
  <li>
    <strong>Forums</strong>
   
  </li>
  <li>
    <strong>Career Guidance</strong>
   
  </li>
</ul>

  </div>
</section>

          <section id="exam" className="content-section">
            <h4>Self-Assessment Quizzes</h4>
            <p>Our self-assessment quizzes help you gauge your understanding of the material covered. You can:</p>
            <ul>
              <li>Test your knowledge on various subjects.</li>
              <li>Track your progress over time.</li>
              <li>Receive instant feedback and explanations for quiz answers.</li>
            </ul>
            <p>Regular assessments are key to reinforcing your learning!</p>
          </section>
          <section id="contact" className="content-section">
            <h4>Contact Us</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" className="form-control" rows="4" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </section>
        </div>
      </div>

      <footer className="footer bg-dark text-white p-3 text-center">
        <p>&copy; 2024 B.G.R.S Pvt Limited. All rights reserved. | <Link to="/privacy">Privacy Policy</Link> | <Link to="/terms">Terms of Service</Link></p>
      </footer>
    </div>
  );
}

export default Dashboard;
