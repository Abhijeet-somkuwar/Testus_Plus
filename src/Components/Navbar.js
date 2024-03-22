import React from 'react'
import "./Navbar.css"
import logo from "../assets/trans1234.png"

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="logo" className='logo' />
        <ul>
            <li>Home</li>
            <li>Add Laboratory</li>
            <li>Services</li>
            <li>About Us</li>
            <li><button className='btn'>Contact Us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar