import React from 'react'

const Event = () => {

    function callMe(){
        alert("Function called");
    }
    
    const fruit =()=>{
        alert("apple hai")
    }
    // function ki defination pass karni hoti hai calling nhai karni hoti react mein 
    //problem ye hai ki abb agat muze kuch parameter pass karna hai to abb ??

    const fruits=(name)=>{
        alert("name is"+ name);
    }

  return (
    <div>
        <button onClick={callMe}>Call Me</button>
        <button onClick={fruit}>Fruit</button>
        <button onClick={()=>fruits("banana")}>Name By bUtton</button>
    </div>
  )
}

export default Event