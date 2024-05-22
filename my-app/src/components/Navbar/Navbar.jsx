import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-log'>
            <p>SWIO</p>
        </div>
        <ul className='nav-menu'>
            <li>Home</li>
            <li>Services</li>
            <li>Contact Us</li>
            <li>Case Studies</li>
        </ul>
      
    </div>
  )
}

export default Navbar
