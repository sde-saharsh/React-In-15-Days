import React, { useState, useEffect } from 'react';
import './API.css'; // CSS file for styling
import { useNavigate } from 'react-router';

const API = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const url = 'http://localhost:3000/users';
    try {
      let response = await fetch(url);
      let data = await response.json();
      setUserData(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const deleteUser = async (id) => {
    const url = `http://localhost:3000/users/${id}`;
        try {
            const response = await fetch(url, {
                method: 'DELETE'
            });
            if (response.ok) {
                alert('✅ User deleted');
                setUserData(prev => prev.filter(user => user.id !== id));
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const editUser = (id)=>{
        navigate("/edit/"+id)
    }


  return (
    <div className="container">

      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="card-container">
          {userData.map((user, index) => (
            <div key={index} className="card">
              <h3>{user.name}</h3>
              <p><strong>Age:</strong> {user.age}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <button onClick={()=>{deleteUser(user.id)}}>Delete</button>
              <button onClick={()=>{editUser(user.id)}}>Edit</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default API;
