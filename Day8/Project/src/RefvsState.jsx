import React, { useRef, useState } from 'react'

const RefvsState = () => {

    const[count,setCount] = useState(0);
    const handleCount=()=>{
        setCount(count+1);
    }
    const timeref = useRef(0);
    const refCount=()=>{
        timeref.current += 1;
        console.log(timeref);
        
    }
    function checkRerender(){
        console.log("function call ho gaya");
    }
    checkRerender();

  return (
    <div>

        <h3>Counter (UseState)</h3>
        <p>{count}</p>
        <button onClick={handleCount}>Count</button>

        <h3>Counter (useRef)</h3>
        <p>{timeref.current}</p>
        <button onClick={refCount}>Count</button>

    </div>
  )
}

export default RefvsState