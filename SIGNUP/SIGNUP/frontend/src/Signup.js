// Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // Ensure you have a CSS file for styles

function Signup() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    username: '', // New field for username
    password: '',
    confirmPassword: '', // New field for confirm password
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    setError(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Check if username contains '@'
    if (values.username.includes('@')) {
      setError('Username cannot contain the "@" symbol.');
      return;
    }

    // Check if password and confirm password match
    if (values.password !== values.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8081/signup', values);
      console.log('Registered successfully', response.data);
      navigate('/login'); // Redirect to login page
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };
  
  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Signup</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name"><strong>Name</strong></label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              className="form-control rounded-0"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email"><strong>Email</strong></label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              className="form-control rounded-0"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username"><strong>Username</strong></label>
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              className="form-control rounded-0"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password"><strong>Password</strong></label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword"><strong>Confirm Password</strong></label>
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              className="form-control rounded-0"
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Signup
          </button>
          <p className="mt-2">You agree to our terms and policy</p>
          <p>Already have an account? <a href="/login">Login</a></p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
