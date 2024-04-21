import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../imgage/imageslogo.png';
function Navbar() {
  return (
    
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        {/* Add "fixed-top" class above */}
        <div className="container-fluid">
          <img className='logo' src={Logo}/>
          <div className="tab-container">
            <ul className="nav-tab">
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            </ul> 
          <button className="btn btn-outline-success" type="submit">
                Search
              </button>
        </div>
        </div>
      </nav>
      
    
  );
}

export default Navbar;
