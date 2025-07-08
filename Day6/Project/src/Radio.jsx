import React, { isValidElement, useState } from 'react'

const Radio = () => {

    const[gender,setgender] = useState("male")
    const handleGender=(event)=>{
        setgender(event.target.value)
    }

  return (
    <div>

        <h2>Selected Gender : {gender}</h2>

        <input type="radio" id='male' name='gender' onChange={handleGender} value="male"/>
        <label htmlFor="male">Male</label>

        <input type="radio" id='female'name='gender' onChange={handleGender} value="female"/>
        <label htmlFor="female">Female</label>

    </div>
  )
}

export default Radio