import React from 'react'
import View from './View';
import './App.css'

import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Body from './components/Body'


function App (){
  return (
    <>
     <Navbar/>
     
    <Body/>
     
    </>
  )
}

const AppRouter=()=>{
return(
  <Router>
    <Routes>
      <Route  path="/" element={<App/> }/>
      <Route  path="/view/:id" element={<View/>}/>
      </Routes>
  </Router>
)

}

export default AppRouter;
