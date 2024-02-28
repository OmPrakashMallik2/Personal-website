import React from 'react'
import Poster from '../Media/travis-scott-jfi0e3appl6ayo4o.jpg'
import { GoArrowDownRight } from "react-icons/go";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { LuArrowDownRight } from "react-icons/lu";

function Home() {
    return (
        <div className='text-neutral-900 bg-neutral-100'>
            {/* name heading */}
            <div className='p-14'>
                <h1 className='text-9xl font-bold'>Om Prakash Mallik</h1>
                <h1 className='text-9xl text-neutral-600 font-semibold'>Softwere Developer</h1>
                <div className='flex justify-between mt-5'>
                    <p className='text-4xl font-semibold'>(Darbhanga, Bihar)</p>
                    <p className='text-4xl font-semibold flex'> <GoArrowDownRight className='text-5xl mx-3' /> Scroll Down </p>
                </div>
            </div>

            {/* poster */}
            <div>
                <img src={Poster} alt='poster' />
            </div>

            {/* about */}
            <div className='flex  m-14 pb-14 border-b-4 border-neutral-900 '>
                <div className=' pr-6 w-4/6'>
                    <h2 className='text-7xl font-semibold'>As a digital designer, I focus on producing top-notch and impactful digital experiences.</h2>
                </div>
                <div className='flex flex-col justify-between pl-14 border-l-4 border-neutral-900 w-2/6'>
                    <p className='text-neutral-900 text-4xl font-medium'> (About Me) </p>
                    <div className='flex'>
                        <div className='bg-neutral-900 cursor-pointer rounded-full p-3 mr-4'>
                            <FaLinkedin className='text-2xl text-neutral-100' />
                        </div>
                        <div className='bg-neutral-900 cursor-pointer rounded-full p-3 mr-4'>
                            <FaXTwitter className='text-2xl text-neutral-100' />
                        </div>
                        <div className='bg-neutral-900 cursor-pointer rounded-full p-3 mr-4'>
                            <FaInstagram className='text-2xl text-neutral-100' />
                        </div>
                    </div>
                </div>
            </div>


            {/* what i do */}
            <div className='flex  m-14 pb-14 border-b-4 border-neutral-900'>

                <div className='flex justify-between pr-6 w-1/5'>
                    <p className='text-neutral-900 text-4xl font-medium'> (What I do) </p>
                    < LuArrowDownRight className='text-4xl font-semibold' />
                </div>

                <div className='pl-14 flex flex-col border-l-4 border-neutral-900 w-4/5'>

                    <div className='mb-14 pb-14 flex  border-b-2 border-neutral-900'>
                        <div>
                            <h3 className='text-5xl pb-3 font-semibold'>Digital Design</h3>
                            <p className='text-xl'>I create stunning digital designs that engage and inspire your audience. Let me bring your brand to life with my skills.</p>
                        </div>
                        <div className='ml-14 pl-14 border-l-2 border-neutral-900'>
                            <h3 className='text-5xl pb-3 font-semibold'>Digital Design</h3>
                            <p className='text-xl'>I create stunning digital designs that engage and inspire your audience. Let me bring your brand to life with my skills.</p>
                        </div>
                    </div>

                    <div className='flex '>
                        <div>
                            <h3 className='text-5xl pb-3 font-semibold'>Digital Design</h3>
                            <p className='text-xl'>I create stunning digital designs that engage and inspire your audience. Let me bring your brand to life with my skills.</p>

                        </div>
                        <div className='ml-14 pl-14 border-l-2 border-neutral-900'>
                            <h3 className='text-5xl pb-3 font-semibold'>Digital Design</h3>
                            <p className='text-xl'>I create stunning digital designs that engage and inspire your audience. Let me bring your brand to life with my skills.</p>

                        </div>
                    </div>
                </div>
            </div>


            {/* my clients */}
            <div className='flex  m-14  '>

                <div className='flex justify-between pr-6 w-1/5'>
                    <p className='text-neutral-900 text-4xl font-medium'> (My clients) </p>
                    < LuArrowDownRight className='text-4xl font-semibold' />
                </div>

                <div className='pl-14 flex flex-col border-l-4 border-neutral-900 w-4/5'>

                    <div className='mb-14 pb-14 flex  border-b-2 border-neutral-900'>
                        <div>
                            <h3 className='text-5xl pb-3 font-semibold'>Art direction that captured our essence.</h3>
                            <p className='text-xl'>I create stunning digital designs that engage and inspire your audience. Let me bring your brand to life with my skills.</p>
                        </div>
                        <div className='ml-14 pl-14 border-l-2 border-neutral-900'>
                            <h3 className='text-5xl pb-3 font-semibold'>Art direction that captured our essence.</h3>
                            <p className='text-xl'>I create stunning digital designs that engage and inspire your audience. Let me bring your brand to life with my skills.</p>
                        </div>
                    </div>

                    <div className='flex '>
                        <div>
                            <h3 className='text-5xl pb-3 font-semibold'>Art direction that captured our essence.</h3>
                            <p className='text-xl'>I create stunning digital designs that engage and inspire your audience. Let me bring your brand to life with my skills.</p>

                        </div>
                        <div className='ml-14 pl-14 border-l-2 border-neutral-900'>
                            <h3 className='text-5xl pb-3 font-semibold'>Art direction that captured our essence.</h3>
                            <p className='text-xl'>I create stunning digital designs that engage and inspire your audience. Let me bring your brand to life with my skills.</p>

                        </div>
                    </div>
                </div>
            </div>




            {/* project */}
            {/* skill */}
        </div>
    )
}

export default Home
