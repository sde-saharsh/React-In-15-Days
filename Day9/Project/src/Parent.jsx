import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

const Parent = () => {
    const[user,setUser] = useState("");
  return (
    <div>
        <Child1 user={user}/>
        <Child2 setUser={setUser}/>
    </div>
  )
}

export default Parent