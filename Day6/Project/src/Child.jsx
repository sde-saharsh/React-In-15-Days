import React from 'react'

const Child = (props) => {

    console.log(props);

    return (
        <div>

            {/* rpinting of variablke  */}
            {/* <p>{props.name}</p>
            <p>{props.age}</p> */}

            {/* printing of Props  */}
            {/* Printing specific object properties */}
            {/* <p>User Name: {props.userObj.name}</p>
            <p>User age: {props.userObj.age}</p> */}

            {/* Printing of Array  */}
            {/* {
                props.arr.map((value, index) => {
                    return (
                        <p key={index}>{value}</p>
                    )
                })
            } */}


            {/* state passing cheking */}
            {/* <p>{props.count}</p>
            <button onClick={()=>props.setCount(props.count+1)}>Click me</button> */}
            {/* passing of the state is suvccess */}

            {/* Function passing checking  */}
            {/* <button onClick={()=>props.func()}>Alter Generatoir</button> */}


            {/* printing of speaial props  */}
            {/* <p>
                {props.children}
            </p> */}

            {/* Input value  */}

        </div>
    )
}

export default Child
