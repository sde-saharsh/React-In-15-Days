import React, { useState } from 'react'

const Controlled = () => {

    const[name,setName] = useState('anil');
    const[pass,setPass] = useState('');
    const[age,setAge] = useState('');

  return (
    <div>
        <h1>
            Coontrolled Component
        </h1>
        <form action="" method='get'>
            <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='Enter ur name'/> <br />
            <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='Enter ur age'/> <br />
            <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='Enter ur password'/> <br />
            <button>Submit</button>

            <h3>{name}</h3>
            <h3>{age}</h3>
            <h3>{pass}</h3>
        </form>
    </div>
  )
}

export default Controlled