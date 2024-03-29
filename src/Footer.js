import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {

  const footerLinks = [
    {
      "id": 1,
      "title": "Follow X",
      "link": "first link"
    },
    {
      "id": 2,
      "title": "Instagram",
      "link": "first link"
    },
    {
      "id": 3,
      "title": "Skills",
      "link": "first link"
    },
    {
      "id": 4,
      "title": "Projects",
      "link": "first link"
    },
    {
      "id": 5,
      "title": "Number",
      "link": "first link"
    },
    {
      "id": 6,
      "title": "Email me",
      "link": "first link"
    },
    {
      "id": 7,
      "title": "Address",
      "link": "first link"
    },
    {
      "id": 8,
      "title": "Link 1",
      "link": "first link"
    },
    {
      "id": 9,
      "title": "Link 2",
      "link": "first link"
    },
    {
      "id": 10,
      "title": "Link 3",
      "link": "first link"
    },
  ]

  return (
    <div className='bg-neutral-900 text-neutral-100'>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 text-center'>
        <p className='font-medium text-3xl sm:text-4xl'>(Connect)</p>
        <h1 className='font-bold text-5xl sm:text-7xl my-4 sm:my-6'>Let's talk</h1>
        <Link to="contact" className='hover:bg-neutral-500 rounded-full font-semibold text-lg sm:text-xl text-neutral-900 bg-neutral-100 px-6 py-3 mt-8 sm:mt-12 inline-block'>
          Get in Touch
        </Link>
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8'>
        {
          footerLinks.map((item) => (
            <button
              key={item.id}
              href={item.link}
              className='text-lg sm:text-xl font-semibold hover:text-neutral-500 hover:underline transition duration-500'>
              {item.title}
            </button>
          ))
        }
      </div>

      <p className='text-center text-sm sm:text-lg sm:px-3 py-4 font-medium'>© Made by Om Prakash Mallik - Powered by OPM</p>
    </div>
  )
}

export default Footer;
