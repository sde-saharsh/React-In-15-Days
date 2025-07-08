import React from 'react';
import Child from './Child';
import { useState } from 'react';
import Controlled from './Controlled'

const App = () => {

  // How to send a variable using props
  let name = "Saharsh";
  let age = 20;

  // How can we pass Object
  const Obj = {
    name: "Saharsh Khalokar",
    age: 20
  }

  //How to passs the Array
  let user = [
    "saharsh",
    "hanamant",
    "Ayush"
  ]

  //Can we pass the state witht he props
  const [count,setCount] = useState(0);

  //simple function passing
  function WelCome(){
    alert("Hello");
  }


  //state for input field
  const [val,setVal] = useState("");

  return (
    <div>

      {/* Passing variables */}
      {/* <Child name={name} age={age} />
      <Child name="Vaishnavi" age="18" /> */}

      {/* Passing objects */}
      {/* <Child userObj={Obj} /> */}

      {/* passing of array  */}
      {/* <Child arr={user}/> */}

      {/* Can we pass the state in the Child  */}
      {/* <Child count = {count} setCount={setCount}></Child> */}
      {/* we have succesfully pass this  */}

      {/* passing of the function  */}
      {/* <Child func={WelCome}></Child> */}

      {/* passing speacial props children props  */}
      {/* <Child>
        <h1>Hiiiiiii my name is shasha</h1>
      </Child> */}


      {/* Input field Value  */}
      {/* <input type="text" placeholder='Enter ur name' onChange={(e)=>setVal(e.target.value) } value={val} />
      <button onClick={()=>setVal("")}>Clear</button>
      <p>{val}</p> */}


      <Controlled />

      
    </div>
  )
}

export default App;
