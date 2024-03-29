import React from 'react';
import Details from './Details';
import avatar from '../Media/Avatar2.jpg'

function Home() {
  return (
    <div className='flex flex-col lg:flex-row w-full'>
      <div className='lg:w-1/2'>
        <img
          className='w-full sticky top-0 h-screen object-cover'
          src={avatar}
          alt='profile-pic'
        />
      </div>
      <div className='lg:w-1/2'>
        < Details />
      </div>
    </div>
  )
}

export default Home
