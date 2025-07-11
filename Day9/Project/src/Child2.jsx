import React, { useState } from 'react'

const Child2 = ({setUser}) => {
    
  return (
    <div>
        <h3>Child2</h3>
        <input type="text" onChange={(e)=>{setUser(e.target.value)}} placeholder='Enter name please'/>
    </div>
  )
}

export default Child2