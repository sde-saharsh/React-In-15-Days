// ForwardRef.js
import React, { useRef } from 'react'
import UserInput from './UserInput';

const ForwardRef = () => {
  const inputRef = useRef(null);

  const handleRef = () => {
    console.log("function called");
    inputRef.current.focus(); 
  }

  return (
    <div>
      <h3>Forward Ref</h3>
      <UserInput ref={inputRef} />
      <button onClick={handleRef}>Focus</button>
    </div>
  )
}

export default ForwardRef;
