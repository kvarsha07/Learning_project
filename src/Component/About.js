import React from 'react'
import Navbar from './Navbar'
import Api from './Api';

const About = (props) => {
  return (
    <div className='class-container'>
      <Navbar/>
    <div className='input-con'>
        <input type='text'/>
        <button>Search</button>
        <Api/>
      </div>
     </div>  
  )
}

export default About
