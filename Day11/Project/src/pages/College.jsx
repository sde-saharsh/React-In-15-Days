import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const College = () => {
  const containerStyle = {
    padding: '2rem',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '1.5rem',
    color: '#333',
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    marginBottom: '2rem',
    backgroundColor: '#1f1f1f',
    padding: '1rem',
    borderRadius: '8px',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    transition: 'color 0.3s ease',
  };

  const activeStyle = {
    color: '#f4c542',
    textDecoration: 'underline',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>🏫 College Section</h2>

      <nav style={navStyle}>
        <NavLink to="student" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}>
          Student
        </NavLink>
        <NavLink to="colleges" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}>
          College
        </NavLink>
        <NavLink to="details" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}>
          Details
        </NavLink>
      </nav>

      {/* Nested component will render here */}
      <Outlet />
    </div>
  );
};

export default College;
