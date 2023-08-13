import React from "react";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Booking from './pages/Booking';
import Gallery from './pages/Gallery';
import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';


function App() {
  return (
    <>
    <TopBar />
    <NavBar />
    <Routes>
     <Route path='/' element={<Home />}/>
     <Route path='/gallery' element={<Gallery />}/>
     <Route path='/gallery' element={<Gallery />}/>
     <Route path='/booking' element={<Booking />}/>
     <Route path='/contact' element={<Contact />}/>
    </Routes>
    </>
  );
}

export default App;
