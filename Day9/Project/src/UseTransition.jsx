// import React from 'react'
// import { useState } from 'react'

// const UseTransition = () => {

//     const[pending,setPending] = useState(false);
//     const handlePending=async ()=>{
//         setPending(true);
//         await new Promise(res=>setTimeout(res,2000))
//         setPending(false)
//     }
//   return (
//     <div>
//         <h3>Use Transition</h3>
//         <button onClick={handlePending} disabled={pending}>Click</button>
//     </div>
//   )
// }

// export default UseTransition


import React, { useTransition } from 'react';

const UseFormStatus = () => {
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e) => {
    e.preventDefault();

    startTransition(() => {
      setTimeout(() => {
        alert('Form submitted!');
      }, 2000);
    });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required />
        <br /><br />
        <input type="text" placeholder="Email" required />
        <br /><br />
        <button type="submit" disabled={isPending} style={{ padding: '10px 20px' }}>
          {isPending ? <div className="spinner"></div> : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default UseFormStatus;
