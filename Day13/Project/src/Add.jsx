import React, { useState } from 'react';

const Add = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const createUser = async () => {
    console.log(name + age + email);
    const url = 'http://localhost:3000/users';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, age, email }),
      });

      let result = await response.json();
      if (result) {
        alert('✅ New user added successfully!');
        setName('');
        setAge('');
        setEmail('');
      }
    } catch (err) {
      console.error("Something went wrong:", err);
    }
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>➕ Add User</h3>
      <div style={styles.form}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          style={styles.input}
        />
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter age"
          style={styles.input}
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          style={styles.input}
        />
        <button onClick={createUser} style={styles.button}>ADD</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
  },
  heading: {
    fontSize: '1.8rem',
    marginBottom: '1rem',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'center',
    maxWidth: '300px',
    margin: 'auto',
  },
  input: {
    padding: '0.5rem',
    width: '100%',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '1rem',
  },
  button: {
    padding: '0.5rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default Add;
