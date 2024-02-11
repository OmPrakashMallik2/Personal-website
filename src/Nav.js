import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { GoArrowDownRight } from "react-icons/go";

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
          <ul className='flex flex-col items-center'>
            <Link className='text-9xl font-bold text-center p-1 flex' onClick={toggleNav} to="/">< GoArrowDownRight className='text-6xl mr-4' />HOME</Link>
            <Link className='text-9xl font-bold text-center p-1 flex' onClick={toggleNav} to="work"> < GoArrowDownRight className='text-6xl mr-4' /> WORK</Link>
            <Link className='text-9xl font-bold text-center p-1 flex' onClick={toggleNav} to="blog"> < GoArrowDownRight className='text-6xl mr-4' /> BLOG</Link>
            <Link className='text-9xl font-bold text-center p-1 flex' onClick={toggleNav} to="about"> < GoArrowDownRight className='text-6xl mr-4' /> ABOUT</Link>
            <Link className='text-9xl font-bold text-center p-1 flex' onClick={toggleNav} to="contact"> < GoArrowDownRight className='text-6xl mr-4' /> CONTACT</Link>
          </ul>
          <button className='fixed top-10 right-6 bg-white font-bold text-xl text-black px-7 py-4 rounded-full mx-1 ' onClick={toggleNav}>Close</button>
        </div>
      )}
    </div>
  )
}

export default Nav
