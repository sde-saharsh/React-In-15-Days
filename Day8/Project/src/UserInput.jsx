// import React from 'react'

// const UserInput = React.forwardRef((props, ref) => {
//   return (
//     <div>
//       <input type="text" ref={ref} />
//     </div>
//   );
// });

// export default UserInput;


// --------- after react 19 ------------------ 
import React from 'react'

const UserInput = (props) => {
  return (
    <div>
        <input type="text" ref={props.ref}/>
    </div>
  )
}

export default UserInput