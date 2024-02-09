import React from 'react';
import Details from './Details';

function Home() {
  return (
    <div className='flex w-full'>
      <div className='w-1/2'>
        <img
          className='w-full sticky top-0 h-screen object-cover'
          src='https://i.pinimg.com/564x/4c/e1/8f/4ce18f9e7a997392bb0fd0297d4d3a89.jpg'
          alt='profile-pic'
        />
      </div>
      <div className='w-1/2 '>
        < Details className='w-full' />
      </div>
    </div>
  )
}

export default Home
