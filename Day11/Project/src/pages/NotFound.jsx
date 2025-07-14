import React from 'react';

const NotFound = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#1a1a1a',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  };

  const emojiStyle = {
    fontSize: '5rem',
    marginBottom: '1rem',
  };

  const headingStyle = {
    fontSize: '2rem',
    marginBottom: '0.5rem',
  };

  const subTextStyle = {
    fontSize: '1.1rem',
    color: '#aaaaaa',
  };

  return (
    <div style={containerStyle}>
      <div style={emojiStyle}>😵‍💫</div>
      <div style={headingStyle}>404 - Page Not Found</div>
      <div style={subTextStyle}>Oops! The page you're looking for doesn’t exist.</div>
    </div>
  );
};

export default NotFound;
