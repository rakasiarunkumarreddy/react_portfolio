import React from 'react'
import "./styles.css"
import {Link} from "react-router-dom"


const Header = () => {
  return (
    <div className="header">
      <div>
        <h1 style={{color:"white",textDecoration:"none"}}>Portfolio</h1>
      </div>
      <div>
        <ul className="ul" >
            <li ><Link to="/" style={{color:"white",textDecoration:"none"}}>Home</Link></li>
            <li><Link to="/about" style={{color:"white",textDecoration:"none"}}>About</Link></li>
            <li><Link to="/projects" style={{color:"white",textDecoration:"none"}}>Projects</Link></li>
            <li><Link to="/skills" style={{color:"white",textDecoration:"none"}}>Skills</Link></li>
            <li><Link to="/contacts" style={{color:"white",textDecoration:"none"}}>Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
