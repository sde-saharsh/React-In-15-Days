import React from 'react'
import { useReducer } from 'react'

let emptyData = {
    name:'',
    password:'',
    city:'',
    age:'',
}

const reducer = (data,action) =>{
    return {...data,[action.type]:action.val}
}

const UseReducer = () => {

    const [state,dispatch] = useReducer(reducer,emptyData);
    console.log(state);
    

  return (
    <div>
        <h3>Use Reducer Hook use</h3>
        <form action="">
            <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'name'})} placeholder='Enter name'/>
            <br /> <br />
            <input type="text" onChange={(event)=>{dispatch({val:event.target.value,type:'password'})}} placeholder='Enter password'/>
            <br /> <br />
            <input type="text" onChange={(event)=>{dispatch({val:event.target.value,type:'city'})}} placeholder='Enter city'/>
            <br /> <br />
            <input type="text" onChange={(event)=>{dispatch({val:event.target.value,type:'age'})}} placeholder='Enter age'/>
            <br /> <br />
            
            
            <ul>
                <li> name :{state.name}</li>
                <li> password : {state.password}</li>
                <li>city :{state.city}</li>
                <li>age :{state.age}</li>
            </ul>
        </form>
    </div>
  )
}

export default UseReducer