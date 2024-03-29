import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { GoArrowDownRight } from "react-icons/go";

function Nav() {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  }

  const navItem = [
    {
      "id": 1,
      "title": "HOME",
      "to": "/"
    },
    {
      "id": 1,
      "title": "ABOUT",
      "to": "/about"
    },
    {
      "id": 1,
      "title": "PROJECT",
      "to": "/work"
    },
    {
      "id": 1,
      "title": "SKILLS",
      "to": "/blog"
    },
    {
      "id": 1,
      "title": "CONTACT",
      "to": "/contact"
    },
  ]

  return (
    <div className='fixed z-50 top-4 lg:top-10 right-3 lg:right-6'>

      <button className='bg-neutral-900 font-bold text-xl text-neutral-100 px-7 py-4 rounded-full lg:mx-1 border-2 border-neutral-100' onClick={toggleNav}>Menu</button>
      {isNavOpen && (
        <div className='z-50 bg-neutral-900 text-neutral-100 fixed top-0 left-0 w-full h-full items-center flex justify-center'>
          <ul className='flex flex-col items-center'>
            {navItem.map((item) => (
              <Link
                key={item.id}
                className='hover:text-neutral-600 text-8xl font-semibold text-center p-1 flex'
                onClick={toggleNav}
                to={item.to}
                style={{
                  transition: 'font-size 0.3s ease-in-out', // Smooth transition for font size change
                  fontSize: '3rem', // Initial font size
                }}
                onMouseEnter={(e) => { e.target.style.fontSize = '5rem' }} // Increase font size on hover
                onMouseLeave={(e) => { e.target.style.fontSize = '3rem' }} // Return to initial font size when not hovered
              >
                <GoArrowDownRight className='text-6xl lg:mr-4' />{item.title}
              </Link>
            ))}
          </ul>
          <button className='fixed top-4 lg:top-10 right-3 lg:right-6 bg-white font-bold text-xl text-black px-7 py-4 rounded-full mx-1 ' onClick={toggleNav}>Close</button>
        </div>
      )}
    </div>
  )
}

export default Nav
