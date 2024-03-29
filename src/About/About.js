import React from 'react';
import avatar from '../Media/Avatar2.jpg'

function Home() {
  return (
    <div className='flex flex-col lg:flex-row w-full'>
      <div className='lg:w-1/2'>
        <img
          className='w-full sticky top-0 h-screen'
          src={avatar}
          alt='profile-pic'
        />
      </div>
      <div className='lg:w-1/2 lg:p-14 m-8 lg:m-0'>
        <p className='text-4xl font-medium'>(About Me)</p>
        <h2 className='font-semibold lg:font-bold text-7xl lg:text-9xl'>Om Prakash Mallik</h2>
        <p className='text-5xl font-medium'>A Berlin-based Digital Designer and Art Director with a Passion for Captivating Visual Experiences.</p>

        <p className='text-xl font-medium'>
          As a digital designer and art director, I am passionate about creating captivating visual experiences that leave a lasting impression. Based in Berlin, I draw inspiration from the city's vibrant energy and dynamic creative scene. With years of experience in the industry, I have honed my skills in digital design, art direction, interaction design, and motion design.
        </p>
        <p className='text-xl font-medium' >
          Whether you need a stunning website, a memorable brand identity, or an engaging user experience, I have the expertise to bring your vision to life. From conceptualization to execution, I am committed to delivering exceptional work that exceeds your expectations. I take the time to understand your unique needs and tailor my approach to ensure that your project stands out from the competition.
        </p>
      </div>
    </div>
  )
}

export default Home
