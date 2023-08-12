import React from 'react'
import '../Styles.css'
export default function Header() {
  return (
    <div className='header'>
      <div className='navlinks'>
        <p>Works</p>
        <p>Blogs</p>
        <p>Contact</p>
      </div>
      <div className='lgn-btn'>
        <button className='login-signup-btn'>
            Login/Signup
        </button>
      </div>
    </div>
  )
}
