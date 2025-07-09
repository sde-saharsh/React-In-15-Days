import React from 'react'
import { useRef } from 'react'

const UseRef2 = () => {

    const count = useRef(0);
    const increment=()=>{
        count.current += 1 ;
        console.log(count);
    }

  return (
    <div>

        <button onClick={increment}>Increment Count :{count.current}</button>

    </div>
  )
}

export default UseRef2