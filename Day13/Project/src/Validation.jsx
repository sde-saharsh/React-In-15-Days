import React, { useState } from 'react';
import './Validation.css';

const Validation = () => {
  const [name, setName] = useState('');
  const [nameErr, setNameErr] = useState('');

  const [password, setPassword] = useState('');
  const [passwordErr, setPasswordErr] = useState('');

  const handleName = (e) => {
    const value = e.target.value;
    setName(value);

    if (value.length > 5) {
      setNameErr('Only 5 characters allowed');
    } else if (value.length === 0) {
      setNameErr('Name is required');
    } else {
      setNameErr('');
    }
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{6,}$/;
    if (!regex.test(value)) {
      setPasswordErr('Password must include uppercase, lowercase, digit, special character and be at least 6 characters long');
    } else {
      setPasswordErr('');
    }
  };

  const handleSubmit = () => {
    if (!nameErr && !passwordErr && name && password) {
      alert('Login successful');
    } else {
      alert('Please correct the errors first');
    }
  };

  return (
    <div className="validation-container">
      <h2>Login Form</h2>
      <div className="form-group">
        <input
          type="text"
          value={name}
          onChange={handleName}
          placeholder="Enter name"
        />
        {nameErr && <span className="error">{nameErr}</span>}
      </div>

      <div className="form-group">
        <input
          type="password"
          value={password}
          onChange={handlePassword}
          placeholder="Enter password"
        />
        {passwordErr && <span className="error">{passwordErr}</span>}
      </div>

      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Validation;
