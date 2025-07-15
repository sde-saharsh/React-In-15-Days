import React, { useEffect, useState } from 'react';
import './API.css'; // CSS in separate file (optional but clean)

const API = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const url = 'https://dummyjson.com/users';
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUsers(data.users);
    } catch (err) {
      console.error("API Error:", err);
    }
  };

  return (
    <div className="container">
      <h1 className="heading">👥 Users List</h1>
      <div className="card-container">
        {users.map((user) => (
          <div key={user.id} className="card">
            <img src={user.image} alt={user.firstName} className="avatar" />
            <h3>{user.firstName} {user.lastName}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>City:</strong> {user.address.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default API;
