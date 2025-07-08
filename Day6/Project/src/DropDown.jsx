import React, { useState } from 'react'

const DropDown = () => {

    const[city,setCity] = useState('Delhi')
    
  return (
    <div>
        <select name="" id="" onChange={(event)=>{setCity(event.target.value)}}>
            <option value="Delhi">Delhi</option>
            <option value="mumbai">mumbai</option>
            <option value="Pune">Pune</option>
        </select>
        <h2>Selected city : {city}</h2>
    </div>
  )
}

export default DropDown