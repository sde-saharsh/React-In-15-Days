import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {id} = useParams();
  return (
    <div>
        <h3>Welcome User : {id}</h3>
    </div>
  )
}

export default User