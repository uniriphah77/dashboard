import React, { useState } from 'react';
import './SignIn.css';

const SignIn = () => {
  // State hooks for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent form from reloading the page

    // Basic validation
    if (!email || !password) {
      setErrorMessage('Both fields are required.');
      return;
    }

    // If everything is valid, handle the sign-in (you can call an API here)
    setErrorMessage('');
    console.log('Form submitted successfully');
    console.log({ email, password });

    // Clear the form
    setEmail('');
    setPassword('');
  };

  return (
    <div className="sign-in-container">
      <h2>Sign In</h2>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
