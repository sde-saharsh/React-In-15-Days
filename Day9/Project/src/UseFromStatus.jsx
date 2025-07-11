import React from 'react'
import {useFormStatus} from 'react-dom'

const UseFromStatus = () => {

    const handleSubmit=async ()=>{
        await new Promise(res=>setTimeout(res,2000));
        console.log("submit")
    }
    function CustomerForm(){
        const {pending} = useFormStatus();
        console.log(pending);
        
        return(
            <div>
                <input type="text" /> 
                <br />
                <input type="text" />
                <br />
                <button disabled={pending}>{pending?"submitting...":"submit"}</button>
            </div>
        )
    }

  return (
    <div>
        <h3>UseFormStatus </h3>
        <form action={handleSubmit}>
            <CustomerForm />
        </form>

    </div>
  )
}

export default UseFromStatus