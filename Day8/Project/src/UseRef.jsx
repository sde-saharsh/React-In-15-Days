import React from 'react'
import { useRef } from 'react'

const UseRef = () => {

    // syntax 
    // const myref = useRef(initial value) 

    // 📌 Example 1: Accessing DOM directly
    const inputref = useRef(null);
    const handleFocus =()=>{
        inputref.current.focus();
    }
    

  return (
    <div>

        <input ref={inputref} type="text" placeholder='type here'/>
        <button onClick={handleFocus}>focus the input</button>

    </div>
  )
}   

export default UseRef