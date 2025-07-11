import React, { useState } from 'react'

const DerivedState = () => {
    const[user,setUser] = useState("");
    const[users,setUsers] = useState([]);
    
    const handleClick=(e)=>{
        setUsers([...users,user]);
    }
  return (
    <div>

        <h3>Derived State Explanation</h3>

        <h4>Total User :{users.length}</h4>
        <h4>Last User :{users[users.length -1]}</h4>
        <h4>Unique User :{new Set(users).size}</h4>
        <p>{user}</p>
        <input type="text" placeholder='Enter your name' 
        onChange={(e)=>{setUser(e.target.value)}}/>
        <br /><br />
        <button onClick={handleClick}>Submit</button>
        <div>
            {
                users.map((user, index) => (
                    <p key={index}>{user}</p>
                ))
            }
        </div>

    </div>
  )
}

export default DerivedState