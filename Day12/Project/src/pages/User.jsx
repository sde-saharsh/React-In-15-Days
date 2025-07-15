import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {id} = useParams();
  return (
    <div>
        {
          id ? <h2>welcome !! : {id}</h2> : <p>user id dali hoti to accha hota</p>
        }
    </div>
  )
}

export default User