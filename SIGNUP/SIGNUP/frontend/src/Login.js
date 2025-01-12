// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [identifier, setIdentifier] = useState(''); // State for email or username
  const [password, setPassword] = useState(''); // State for password
  const [error, setError] = useState(null); // State for error messages
  const navigate = useNavigate(); // For navigation

  // Function to handle traditional login
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null); // Clear error on new attempt
    try {
      // Authenticate with backend using identifier and password
      const response = await axios.post('http://localhost:8081/login', { identifier, password });
      console.log('Login successful', response.data);
      
      // Navigate to dashboard after successful login
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed', error);
      if (error.response) {
        setError(error.response.data.message || 'Login failed. Please try again.');
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="d-flex w-100 vh-100 bg-primary justify-content-center align-items-center">
      <div className="bg-white p-3 rounded w-25">
        <h2>Login</h2>
        {error && <div className="alert alert-danger">{error}</div>} {/* Display error message */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="identifier"><strong>Email or Username</strong></label>
            <input
              type="text"
              placeholder="Enter Email or Username"
              name="identifier"
              className="form-control rounded-0"
              onChange={(e) => setIdentifier(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
          <p className="mt-2">Don't have an account? <a href="/">Signup</a></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
