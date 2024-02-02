import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import "./header.css"
function Header() {
  return (
        <>
 <div className="header">
            
            <img src={logo} />
            
            <div className="nav-items">
    <ul>
        <li><Link to="/">Home</Link></li>  
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact"> Contact Us</Link></li>

    </ul>
  </div>
        </div>
        </>     
  )
}

export default Header