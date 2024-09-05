import React from 'react'
 import '../style/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <Link to={'/home'}> Home</Link>
      <Link to={'/about'}> about</Link>
      <Link to={'/contact'}> contact</Link>
      {/* <Link to={"/Contact"}>Contact</Link> */}


    </nav>
  )
}

export default Header