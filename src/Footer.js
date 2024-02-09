import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='bg-black text-white'>

      <div className='py-28 flex flex-col items-center justify-between'>
        <p className='font-medium text-4xl'>(Connect)</p>
        <h1 className='font-bold text-9xl my-6' >Let's talk</h1>
        <button className='rounded-full font-medium text-xl bg-white text-black px-8 py-3 mt-8'>
          Get in Touch
        </button>
      </div>

      <div className='flex justify-around mb-14'>
        <div className='flex flex-col text-center'>
          <h1 className='text-xl py-3'>(Heading)</h1>
          <Link className='text-xl py-2'>Link1</Link>
          <Link className='text-xl py-2'>Link2</Link>
          <Link className='text-xl py-2'>Link3</Link>
        </div>
        <div className='flex flex-col text-center'>
          <h1 className='text-xl py-3'>(Heading)</h1>
          <Link className='text-xl py-2'>Link1</Link>
          <Link className='text-xl py-2'>Link2</Link>
          <Link className='text-xl py-2'>Link3</Link>
        </div>
        <div className='flex flex-col text-center'>
          <h1 className='text-xl py-3'>(Heading)</h1>
          <Link className='text-xl py-2'>Link1</Link>
          <Link className='text-xl py-2'>Link2</Link>
          <Link className='text-xl py-2'>Link3</Link>
        </div>
      </div>

      <p className='text-center text-lg py-4 font-medium'>© Made by Om Prakash Mallik - Powered by Mallik</p>
    </div>
  )
}


export default Footer;