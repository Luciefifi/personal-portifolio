import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles.css'
export default function Header() {
  return (
    <div className='header'>
      <div className="menu-icon">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className='navlinks'>
        <Link to='/'> Home</Link>
        <Link to='/Works'> Works</Link>
        <Link to='/Blogs'> Blogs</Link>
        <Link to='/Contacts'> Contact</Link>
      </div>
      <div className='lgn-btn'>
        <button className='login-signup-btn'>
            Login/Signup
        </button>
      </div>
    </div>
  )
}
