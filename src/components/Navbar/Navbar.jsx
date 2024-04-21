import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    <nav className='nav-wrapper'>
<div className='nav-content'>
     <img className=' logo '  src='./assest/Image/logoimage.jpg'/>
     <ul>
        <li>
            <a className='menu-item'>Home</a>
        </li>
        <li>
            <a className='menu-item'>Skills</a>
        </li>
        <li>
            <a className='menu-item'>Work Experience</a>
        </li>
        <li>
            <a className='menu-item'>Contact</a>
        </li>
        <button className='contact-btn' onClick={()=>{}}>Hire Me</button>
     </ul>
     <button className='menu-btn' onClick={()=>{}}>
        <span class={"matrial-symbol-outlined"}
        style={{fontSize:"1.8rem"}}>
            menu 
        </span>
     </button>
     </div>
</nav>
    </>
  )
}

export default Navbar
