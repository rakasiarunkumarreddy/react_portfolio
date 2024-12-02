import React from 'react'
import "./styles.css"
import {Link} from "react-router-dom"


const Header = () => {
  return (
    <div className="header">
      <div>
        <h1>Portfolio</h1>
      </div>
      <div>
        <ul className="ul">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/contacts">Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
