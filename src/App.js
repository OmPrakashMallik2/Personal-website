import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Home from './HomePage/Home';
import Contanct from './Contact/Contanct';
import Work from './Work/Work';
import Blog from './Blog/Blog';
import About from './About/About';
import Nav from './Nav';

function App() {
  return (
    <div className='bg-neutral-50'>
      <Nav />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="work" element={< Work />} />
        <Route path="blog" element={< Blog />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contanct />} />
      </Routes>
      < Footer />
    </div >
  );
}

export default App;