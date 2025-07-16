import React from 'react';
import API from './API';
import Add from './Add';
import Navbar from './Navbar';
import { Outlet, Route, Routes } from 'react-router';
import Edit from './Edit';
import Validation from './Validation';

const App = () => {
  const containerStyle = {
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#f4f6f8',
    minHeight: '100vh',
    padding: '2rem',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '1rem',
    textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
  };

  const navStyle = {
    marginBottom: '2rem',
  };

  return (
    <div style={containerStyle}>
      {/* <h2 style={headingStyle}>👨‍💻 Users from JSON Server</h2>

      <div style={navStyle}>
        <Navbar />
      </div>

      <Routes>
        <Route index path='/add' element={<Add />} />
        <Route path="/users" element={<API />} />
        <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>
      <Outlet /> */}


        <Validation />

    </div>
  );
};

export default App;
