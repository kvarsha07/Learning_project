import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Loginfile from './Component/Loginfile';


import './App.css'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <div className='App'>
    
      <Loginfile />
      
</div>
  );
};

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
         <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path='/' element={< App/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
