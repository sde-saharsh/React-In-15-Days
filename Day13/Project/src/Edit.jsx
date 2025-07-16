import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Edit.css'; // CSS file

const Edit = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const { id } = useParams();
  const navigate = useNavigate();
  const url = 'http://localhost:3000/users/' + id;

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setName(data.name);
      setAge(data.age);
      setEmail(data.email);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const updateUserData = async () => {
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name.trim(), age: age.trim(), email: email.trim() }),
      });

      const data = await response.json();
      if (data) {
        alert('User data updated');
        navigate('/users'); 
      }
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <div className="edit-container">
      <h3>Edit User Details</h3>
      <div className="edit-form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Edit name"
        />
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Edit age"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Edit email"
        />
        <button onClick={updateUserData}>Update User</button>
      </div>
    </div>
  );
};

export default Edit;
