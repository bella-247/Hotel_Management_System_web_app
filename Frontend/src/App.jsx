import { useState , useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import './App.css';
import Rooms from './Pages/Services/Rooms/Rooms';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
// import Reservation from './Pages/Reservation/Reservation';

  
  const App = () => {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='services/rooms' element = {<Rooms/>} />
        <Route path='/about' element = {<About/>}/>
        <Route path='/contact' element = {<Contact/>}/>
      </Routes>
    </Router>
  )
}

export default App;