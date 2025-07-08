import React, { useEffect, useState } from 'react'
import Counter from './Counter'

const UseEffect = () => {

    const[count,setCount] = useState(0);
    const[body,setBody] = useState(0);

    function callOnce(){
        console.log("Function called");
    }
    // callOnce();
    // ata jr count increse zala tari pn he function bin faltu run honar ahe 
    // each and every state change vr component re-render hot aste 
    // mhaun te function call hot ahe callOnce()
    // tr hr avoid karaych asel tr mg use kara lagate useEffect hook 

    // useEffect(()=>{
    //     callOnce();
    // },[])
    // yane asa hote ki function fakt ek time honar honar only once in start 

    // useEffect(()=>{
    //     callOnce();
    // },[count])
    // ata jevha pn count update honar tr te function call honar 

    // useEffect(()=>{
    //     callOnce();
    // })
    // hr change pe function call hoga 

    // useEffect(()=>{
    //     callOnce();
    // },[body])
    // jab body chage hoga tabhi only the function call hoga nahi to nahi hoag


    // Props ke sath handling 
    const[counter,setCounter] = useState(0);

  return (
    <div>

        {/* <button onClick={()=>{setCount(count+1)}}>Count :{count}</button>
        <button onClick={()=>{setBody(body+1)}}>body :{body}</button> */}


        <Counter count={counter}/>
        <button onClick={()=>{setCounter(counter+1)}}>Counter : {counter}</button>

    </div>
  )
}

export default UseEffect