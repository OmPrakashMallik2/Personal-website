import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Nav() {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <div className='fixed z-50 top-10 right-6'>

      <button className='bg-black font-bold text-xl text-white px-7 py-4 rounded-full mx-1 border-2 border-white' onClick={toggleNav}>Menu</button>
      {isNavOpen && (
        <div className='z-50 bg-black text-white fixed top-0 left-0 w-full h-full items-center flex justify-center'>
          <ul className='flex flex-col'>
            <Link className='text-9xl font-bold text-center p-1' onClick={toggleNav} to="/">HOME</Link>
            <Link className='text-9xl font-bold text-center p-1' onClick={toggleNav} to="work">WORK</Link>
            <Link className='text-9xl font-bold text-center p-1' onClick={toggleNav} to="blog">BLOG</Link>
            <Link className='text-9xl font-bold text-center p-1' onClick={toggleNav} to="about">ABOUT</Link>
            <Link className='text-9xl font-bold text-center p-1' onClick={toggleNav} to="contact">CONTACT</Link>
          </ul>
          <button className='fixed top-10 right-6 bg-white font-bold text-xl text-black px-7 py-4 rounded-full mx-1 ' onClick={toggleNav}>Close</button>
        </div>
      )}
    </div>
  )
}

export default Nav
