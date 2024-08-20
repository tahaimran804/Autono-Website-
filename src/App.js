import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Technology from './Technology'
import About from './About';
import Careers from './Carress'
import Home from './Home'
import Footer from './Footer';
import Subscribe from './Subscribe';
import useScrollWithOffset from './useScroll';



const App = () => {
  useScrollWithOffset(60);
  return (
    <div>
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/Technology' element={<Technology />} />
        <Route exact path='/About' element={<About />} />
        <Route path='/Careers' element={<Careers />} />
      </Routes>
      <Footer />
      <Subscribe />
    </div>
  )
}

export default App
