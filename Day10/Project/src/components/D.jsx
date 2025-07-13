import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const D = () => {
    const name = useContext(UserContext);
  return (
    <div>
        Hello !! {name}
    </div>
  )
}

export default D