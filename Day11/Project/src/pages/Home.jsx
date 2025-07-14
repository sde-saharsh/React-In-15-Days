import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h2>Hi !! Welcome to my home page</h2>
        <h3>My name is saharsh</h3>
        <Link to='/profile' >Go to my profile</Link>
    </div>
  )
}

export default Home