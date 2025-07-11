import React, { useState } from 'react';

const Array = () => {
  const [users, setUsers] = useState(["saharsh", "mahesh"]);
  const [input, setInput] = useState("");        // New user add karne ke liye
  const [editIndex, setEditIndex] = useState(null); // Kis user ko edit kar rahe hain
  const [editInput, setEditInput] = useState("");   // Edit ke liye input value

  // ✅ Add User
  const handleAddUser = () => {
    if (input.trim()) {
      setUsers(prev => [...prev, input]);
      setInput("");
    }
  };

  // ✅ Edit User
  const handleEdit = (index) => {
    setEditIndex(index);
    setEditInput(users[index]);
  };

  const handleSave = () => {
    setUsers(prevUsers =>
      prevUsers.map((user, index) =>
        index === editIndex ? editInput : user
      )
    );
    setEditIndex(null);
    setEditInput("");
  };

  // ✅ Delete User
  const handleDelete = (index) => {
    setUsers(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>User Management</h2>

      {/* Add User Input */}
      <input
        type="text"
        value={input}
        placeholder="Enter user name"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddUser}>Add User</button>

      <hr />

      {/* User List */}
      {users.map((user, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          {editIndex === index ? (
            <>
              <input
                value={editInput}
                onChange={(e) => setEditInput(e.target.value)}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setEditIndex(null)}>Cancel</button>
            </>
          ) : (
            <>
              <span>{user}</span>
              <button onClick={() => handleEdit(index)} style={{ marginLeft: "10px" }}>Edit</button>
              <button onClick={() => handleDelete(index)} style={{ marginLeft: "5px" }}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Array;
