import React, { useId, useState } from 'react';

const UseId = () => {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Successfully completed:', formData);
  };

  return (
    <div>
      <h3>Use Id Hook</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor={nameId}>Name:</label><br />
            <input
              id={nameId}
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor={emailId}>Email:</label><br />
            <input
              id={emailId}
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor={passwordId}>Password:</label><br />
            <input
              id={passwordId}
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default UseId;
