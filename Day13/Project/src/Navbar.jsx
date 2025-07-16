import React from 'react';
import { NavLink } from 'react-router-dom'; // ✅ Corrected import

const Navbar = () => {
  const navContainer = {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    padding: '1rem 0',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    marginBottom: '2rem',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#555',
    fontSize: '1.1rem',
    fontWeight: '600',
    padding: '0.5rem 1.2rem',
    borderRadius: '8px',
    transition: '0.3s',
  };

  const activeStyle = {
    color: '#fff',
    backgroundColor: '#007bff',
  };

  return (
    <div style={navContainer}>
      <NavLink
        to="/add"
        style={({ isActive }) =>
          isActive ? { ...linkStyle, ...activeStyle } : linkStyle
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/users"
        style={({ isActive }) =>
          isActive ? { ...linkStyle, ...activeStyle } : linkStyle
        }
      >
        List
      </NavLink>
    </div>
  );
};

export default Navbar;
