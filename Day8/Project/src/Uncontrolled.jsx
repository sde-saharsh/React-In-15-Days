import React, { useRef } from 'react'

const Uncontrolled = () => {
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        let name = document.getElementById('name');
        let password = document.getElementById('password');
        console.log(name.value+password.value);
    }

    const nameref = useRef(null);
    const passref = useRef(null);
    const handleSubmitref = (event)=>{
        event.preventDefault();
        let name = nameref.current;
        let password = passref.current;
        console.log(name.value + password.value);
    }

  return (
    <div>
        <h3>with uncontrolled Conmponent</h3>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" id='name' placeholder='Enter name'/>
            <input type="text" id='password' placeholder='Enter password'/>
            <button>Submit</button>
        </form>

        <h3>with uncontrolled Conmponent(use Ref)</h3>
        <form action="" onSubmit={handleSubmitref}>
            <input type="text" ref={nameref} placeholder='Enter name'/>
            <input type="text" ref={passref} placeholder='Enter password'/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Uncontrolled