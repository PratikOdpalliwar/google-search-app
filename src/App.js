// import { Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Routes from './components/routes/Routes';
import Footer from './components/footer/Footer';


function App() {
const [darkTheme , setDarkTheme] = useState(false)


  return (
<div className={darkTheme? "dark" : ""}>

  <div className="navbar">
    <Navbar/>
  </div>

  <div className="navbar">
    <Routes/>
  </div>

  <div className="footer">
    <Footer/>
  </div>
  
</div>
  );
}

export default App;
