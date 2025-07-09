import React, { useState } from 'react';

const Inline = () => {
  const user = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe3oPvKsA05otgZYGFZmxk5WHLYTFKWOFaNA&s",
      name: "Saharsh",
      role: "Software Developer"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe3oPvKsA05otgZYGFZmxk5WHLYTFKWOFaNA&s",
      name: "Hanamant",
      role: "Software Developer - 1"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe3oPvKsA05otgZYGFZmxk5WHLYTFKWOFaNA&s",
      name: "Ankan",
      role: "Software Developer - 2"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe3oPvKsA05otgZYGFZmxk5WHLYTFKWOFaNA&s",
      name: "Ayush",
      role: "Software Developer - 2"
    }
  ];

  const [theme, setTheme] = useState(true);

  const handleTheme = () => {
    setTheme(!theme);
  };

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    padding: '20px',
    backgroundColor: theme ? '#f9f9f9' : '#1a1a1a',
    transition: 'background-color 0.4s ease'
  };

  const cardStyle = {
    width: '200px',
    padding: '15px',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    backgroundColor: theme ? 'white' : '#333',
    color: theme ? '#000' : '#fff',
    transition: 'all 0.3s ease',
  };

  const imageStyle = {
    width: '100%',
    borderRadius: '10px',
    marginBottom: '10px'
  };

  const nameStyle = {
    fontWeight: 'bold',
    fontSize: '18px',
    margin: '5px 0'
  };

  const roleStyle = {
    fontStyle: 'italic',
    fontSize: '14px',
    color: theme ? '#777' : '#ccc'
  };

  return (
    <>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <button 
          onClick={handleTheme} 
          style={{ 
            padding: '10px 20px', 
            fontSize: '16px', 
            borderRadius: '8px', 
            cursor: 'pointer',
            backgroundColor: theme ? '#000' : '#eee',
            color: theme ? '#fff' : '#000',
            border: 'none'
          }}
        >
          Switch to {theme ? 'Dark' : 'Light'} Theme
        </button>
      </div>

      <div style={containerStyle}>
        {
          user.map((user, index) => (
            <div key={index} style={cardStyle}>
              <img src={user.img} alt="profile" style={imageStyle} />
              <p style={nameStyle}>Name: {user.name}</p>
              <p style={roleStyle}>Role: {user.role}</p>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default Inline;
