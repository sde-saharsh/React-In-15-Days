import React, { useEffect } from 'react'

const Counter = ({count}) => {

  function callMe(){
    console.log("function called ");
  }

  useEffect(()=>{
    callMe();
  },[count])

  return (
    <div>

        <h3>Counter Component:{count}</h3>

    </div>
  )
}

export default Counter