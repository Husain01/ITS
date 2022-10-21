import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-logo">
            <img src={logo} alt="" />
        </div>
        <div className="navbar-links">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Products</li>
                <li>Awards</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}
