import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Contanct from './Components/Contanct';
import About from './Components/About';
import Nav from './Components/Nav';
import Skills from './Components/Skills';
import Projects from './Components/Projects';

function App() {

  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className='text-neutral-900 bg-neutral-100'>
      <Nav />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={< Projects />} />
        <Route path="skills" element={< Skills />} />
        <Route path="contact" element={<Contanct />} />
      </Routes>
      < Footer />
    </div >
  );
}

export default App;