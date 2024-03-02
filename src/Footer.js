import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {

  const footerLinks = [
    {
      "id": 1,
      "title": "Follow X",
      "link": "first linke"
    },
    {
      "id": 2,
      "title": "Intagram",
      "link": "first linke"
    },
    {
      "id": 3,
      "title": "Skills",
      "link": "first linke"
    },
    {
      "id": 4,
      "title": "Projects",
      "link": "first linke"
    },
    {
      "id": 5,
      "title": "Number",
      "link": "first linke"
    },
    {
      "id": 6,
      "title": "Email me",
      "link": "first linke"
    },
    {
      "id": 7,
      "title": "Address",
      "link": "first linke"
    },
    {
      "id": 8,
      "title": "Link 1",
      "link": "first linke"
    },
    {
      "id": 9,
      "title": "Link 1",
      "link": "first linke"
    },
    {
      "id": 10,
      "title": "Link 1",
      "link": "first linke"
    },
  ]

  return (
    <div className='bg-neutral-900 text-neutral-100'>

      <div className='py-28 flex flex-col items-center justify-between'>
        <p className='font-medium text-4xl'>(Connect)</p>
        <h1 className='font-bold text-9xl my-6' >Let's talk</h1>
        <Link to="contact" className='hover:bg-neutral-500 rounded-full font-semibold text-xl text-neutral-900 bg-neutral-100 px-8 py-3 mt-8'>
          Get in Touch
        </Link>
      </div>

      <div className='mb-14 grid grid-cols-3 gap-8'>
        {
          footerLinks.map((item) => (
            <button
              key={item.id}
              href={item.link}
              className='text-xl font-semibold hover:text-neutral-500 hover:underline transition duration-500'>
              {/* className='text-xl m-5 font-semibold hover:text-neutral-500 hover:text-2xl transition duration-500'> */}
              {item.title}
            </button>
          ))
        }
      </div>

      <p className='text-center text-lg py-4 font-medium'>© Made by Om Prakash Mallik - Powered by OPM</p>
    </div>
  )
}


export default Footer;