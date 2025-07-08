import React, { useState } from 'react'

const CheckBox = () => {

    const[skills,setSkills] = useState([]);
    const handleSkills=(event)=>{
        console.log(event.target.value,event.target.checked);
        if(event.target.checked){
            setSkills([...skills,event.target.value])
        } else{
            setSkills([...skills.filter((item)=>item != event.target.value)])
        }
    }
    
  return (
    <div>

        <input type="checkbox" id='php' value="php" onChange={handleSkills}/>
        <label htmlFor="php">PHP</label>

        <input type="checkbox" id='js' value="js" onChange={handleSkills}/>
        <label htmlFor="js">JS</label>

        <input type="checkbox" id='node' value="node" onChange={handleSkills}/>
        <label htmlFor="node">node</label>

        <input type="checkbox" id='java' value="java" onChange={handleSkills}/>
        <label htmlFor="java">java</label>

        <h3>{skills.toString()}</h3>

        

    </div>
  )
}

export default CheckBox