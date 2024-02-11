import React from 'react';
import Details from './Details';
import avatar from '../Media/Avatar2.jpg'

function Home() {
  return (
    <div className='flex w-full'>
      <div className='w-1/2'>
        <img
          className='w-full sticky top-0 h-screen object-cover'
          src={avatar}
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
