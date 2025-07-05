import React from 'react'

const Intro = () => {

    const name = "saharsh khalokar";
    let x = 10;
    let y = 90;

    function fruits(){
        return "apple";
    }

    function sum(a,b){
        return a+b;
    }

    const obj = {
        name:"saharsh khalokar",
        age:20,
        gender:"male"
    }

    const arr = [
        {
            name:"vaishnavi",
            age:18,
            gender:"female"
        },
        {
            name:"saharsh",
            age:20,
            gender:"male"
        },
        {
            name:"Shubhangi",
            age:45,
            gender:"female"
        }
    ]

  return (
    <div>
        <p>Hello!!</p>
        <p>My name is {name}</p>
        <p>and the sum is {x+y}</p>
        <p>{fruits()}</p>
        <p>{sum(2,3)}</p>

        <p>{name?name:"user not found"}</p>

        {/* obj printing */}
        {/* addition of key is very importtant beacuse of unique indentifier for each elemtn  */}
        <p>{obj.name}</p>
        {
            Object.entries(obj).map(([key, value]) => {
                return (
                    <p key={key}>
                        <strong>{key} : {value}</strong>
                    </p>
                )
            })
        }


        {/* array printing  */}
        {/* Return dya lagate two times mistake zali ahe ata  */}
        {/* here we haev to use two key one for array and other for the object  */}
        {arr.map((user,index)=>{
            return (
                <p key={index}>
                {
                    Object.entries(user).map(([key,value])=>{
                        return (
                            <p key={key}>
                                <p>{key} : {value}</p>
                            </p>
                        )
                    })
                }
            </p>
            )
        })}




    </div>
  )
}

export default Intro