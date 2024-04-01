import React from 'react';
import avatar from '../Media/login-avatar.jpg'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiCodingninjas } from "react-icons/si";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

function Home() {
  return (
    <div className='flex flex-col lg:flex-row w-full'>

      {/* left */}
      <div className='lg:w-1/2'>
        <img
          className='w-full sticky top-0'
          src={avatar}
          alt='profile-pic'
        />
      </div>

      {/* right */}
      <div className='lg:w-1/2 lg:p-14 m-8 lg:m-0'>
        <p className='text-4xl font-medium'>(About Me)</p>
        <h2 className='font-semibold lg:font-bold text-7xl lg:text-9xl'>Om Prakash Mallik</h2>

        {/* career objective */}
        <p className='text-4xl font-medium'>Passionate 2023 CSE graduate | Enthusiast in programming and web development | Seeking opportunities to make a digital impact.</p>


        {/* what i am currently doing */}

        {/* address */}
        <div className='bg-neutral-300 p-3 my-3 rounded'>
          <h1>Address</h1>
          <p>Village + Post - Hirni, P.S. - Kusheshwar Asthan, Dist - Darbhanga</p>
          <div className='flex items-center gap-3'>
            < FaWhatsapp />
            <p>7352281493</p>
          </div>
          <div className='flex items-center gap-3'>
            < CiMail />
            <p>Omprakashmallik91@gmail.com</p>
          </div>
        </div>

        {/* education info */}
        <div className='bg-neutral-300 p-3 my-3 rounded'>
          <h1>Education</h1>
          <div>
            <h1>BTech</h1>
            <p>Katihar Engineering College, Katihar</p>
            <p>CGPA: 7.2</p>
          </div>
          <div>
            <h1>12th</h1>
            <p>C. M. Science College, Darbhanga</p>
            <p>Marks: 67%</p>
          </div>
          <div>
            <h1>10th</h1>
            <p>G A R High School Rosera, Samastipur</p>
            <p>Marks: 78.6%</p>
          </div>
        </div>

        <div className='flex lg:justify-start justify-between lg:gap-5'>
          <a href='https://www.linkedin.com/in/om-prakash-mallik-774187217/' target='-blank' className=' bg-neutral-900 cursor-pointer rounded-full p-2 lg:p-3'>
            <FaLinkedin className='text-xl lg:text-2xl text-neutral-100' />
          </a>
          <a href='https://twitter.com/OmPrakashOG' target='-blank' className=' bg-neutral-900 cursor-pointer rounded-full p-2 lg:p-3'>
            <FaXTwitter className='text-xl lg:text-2xl text-neutral-100' />
          </a>
          <a href='https://github.com/OmPrakashMallik2' target='-blank' className=' bg-neutral-900 cursor-pointer rounded-full p-2 lg:p-3'>
            <FaGithub className='text-xl lg:text-2xl text-neutral-100' />
          </a>
          <a href='https://leetcode.com/OmPrakashMallik/' target='-blank' className=' bg-neutral-900 cursor-pointer rounded-full p-2 lg:p-3'>
            <SiLeetcode className='text-xl lg:text-2xl text-neutral-100' />
          </a>
          <a href='https://auth.geeksforgeeks.org/user/omprakashmallik91/practice' target='-blank' className=' bg-neutral-900 cursor-pointer rounded-full p-2 lg:p-3'>
            <SiGeeksforgeeks className='text-xl lg:text-2xl text-neutral-100' />
          </a>
          <a href='https://www.naukri.com/code360/profile/OmPrakashMallik' target='-blank' className=' bg-neutral-900 cursor-pointer rounded-full p-2 lg:p-3'>
            <SiCodingninjas className='text-xl lg:text-2xl text-neutral-100' />
          </a>
        </div>

      </div>
    </div>
  )
}

export default Home
