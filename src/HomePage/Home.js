import React, { useEffect, useState } from 'react'
import Poster from '../Media/travis-scott-jfi0e3appl6ayo4o.jpg'
import { GoArrowDownRight } from "react-icons/go";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { LuArrowDownRight } from "react-icons/lu";

function Home() {

    const [scrollOffset, setScrollOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollOffset(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className='text-neutral-900 bg-neutral-100'>
            {/* name heading */}
            <div className='p-14'>
                <h1 className='text-9xl font-bold'>Om Prakash Mallik</h1>
                <h1 className='text-9xl text-neutral-600 font-semibold'>Full Stack Developer</h1>
                <div className='flex justify-between mt-5'>
                    <p className='text-4xl font-semibold'>(Darbhanga, Bihar)</p>
                    <p className='text-4xl font-semibold flex'> <GoArrowDownRight className='text-5xl mx-3' /> Scroll Down </p>
                </div>
            </div>

            {/* banner */}
            <div>
                <img src={Poster} alt='poster' />
            </div>

            {/* about */}
            <div className='flex  m-14 '>
                <div className=' pr-6 w-4/6'>
                    <h2 className='text-7xl font-semibold'>
                        I am a full-stack developer specializing in web application development. I graduated with a B.Tech in Computer Science and Engineering in 2023.
                    </h2>
                </div>
                <div className='flex flex-col justify-between pl-14 border-l-4 border-neutral-900 w-2/6'>
                    <p className='text-neutral-900 text-4xl font-medium'> (About Me) </p>
                    <div className='flex'>
                        <a href='https://www.linkedin.com/in/om-prakash-mallik-774187217/' target='-blank' className='bg-neutral-900 cursor-pointer rounded-full p-3 mr-4'>
                            <FaLinkedin to="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/#" className='text-2xl text-neutral-100' />
                        </a>
                        <a href='https://twitter.com/OmPrakashOG' target='-blank' className='bg-neutral-900 cursor-pointer rounded-full p-3 mr-4'>
                            <FaXTwitter className='text-2xl text-neutral-100' />
                        </a>
                        <a href='https://www.instagram.com/om.prakash.mallik/' target='-blank' className='bg-neutral-900 cursor-pointer rounded-full p-3 mr-4'>
                            <FaInstagram className='text-2xl text-neutral-100' />
                        </a>
                        <a href='https://www.facebook.com/profile.php?id=100010378098581' target='-blank' className='bg-neutral-900 cursor-pointer rounded-full p-3 mr-4'>
                            <FaFacebook className='text-2xl text-neutral-100' />
                        </a>
                    </div>
                </div>
            </div>

            {/* my skills */}
            <div style={{ overflow: 'hidden' }}>
                <h1 className='text-9xl font-bold text-center p-5' style={{ transform: `translateX(-${scrollOffset}px)`, whiteSpace: 'nowrap' }}>SKILLS  SKILLS  SKILLS  SKILLS SKILLS SKILLS  SKILLS  SKILLS  SKILLS SKILLS</h1>
            </div>

            <div className='flex  m-14 '>

                <div className='flex justify-between pr-6 w-1/5'>
                    <p className='text-neutral-900 text-4xl font-medium'> (My Skills) </p>
                    < LuArrowDownRight className='text-4xl font-semibold' />
                </div>

                <div className='pl-14 flex flex-col border-l-4 border-neutral-900 w-4/5'>

                    <div className='mb-14 pb-14 flex  border-b-2 border-neutral-900'>
                        <div>
                            <h3 className='text-5xl pb-3 font-semibold'>Front-End</h3>
                            <p className='text-xl'>I'm proficient in HTML, CSS, JavaScript, and React.js, and I use Tailwind CSS for efficient styling.</p>
                        </div>
                        <div className='ml-14 pl-14 border-l-2 border-neutral-900'>
                            <h3 className='text-5xl pb-3 font-semibold'>Back-End</h3>
                            <p className='text-xl'>My expertise lies in Java backend development, particularly with the Spring Boot framework, enabling robust and scalable server-side applications.</p>
                        </div>
                    </div>

                    <div className='flex '>
                        <div>
                            <h3 className='text-5xl pb-3 font-semibold'>Database</h3>
                            <p className='text-xl'>I have a strong understanding of SQL and MySQL, and I'm currently expanding my knowledge by learning MongoDB for versatile and efficient database management.</p>

                        </div>
                        <div className='ml-14 pl-14 border-l-2 border-neutral-900'>
                            <h3 className='text-5xl pb-3 font-semibold'>Others</h3>
                            <p className='text-xl'>I'm highly motivated to learn and grow, actively striving to improve my skills every day. My passion for development drives me to embrace new challenges and enjoy the creative process.</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* my projects */}
            <div style={{ overflow: 'hidden' }}>
                <h1 className='text-9xl font-bold text-center p-5' style={{ transform: `translateX(-${scrollOffset}px)`, whiteSpace: 'nowrap' }}>PROJECTS  PROJECTS  PROJECTS  PROJECTS PROJECTS PROJECTS  PROJECTS  PROJECTS  PROJECTS PROJECTS</h1>
            </div>

            <div className='flex  m-14  '>

                <div className='flex justify-between pr-6 w-1/5'>
                    <p className='text-neutral-900 text-4xl font-medium'> (My Projects) </p>
                    < LuArrowDownRight className='text-4xl font-semibold' />
                </div>

                <div className='pl-14 flex flex-col border-l-4 border-neutral-900 w-4/5'>

                    <div className='mb-14 pb-14 flex  border-b-2 border-neutral-900'>
                        <div>
                            <h3 className='text-5xl pb-5 font-semibold'>Portfolio</h3>
                            < a href='https://opmportfolio.netlify.app/' target='-blank' className='text-neutral-100 bg-neutral-800 rounded font-semibold px-8 py-3'>Project link</a>
                            <p className='text-xl pt-5'>Developed a personal portfolio website using HTML, CSS, and JavaScript.
                                Designed a responsive layout for optimal viewing across devices.
                                Implemented interactive elements to enhance user engagement.
                                Showcased technical skills, projects, and experiences to potential employers.
                            </p>
                        </div>
                        <div className='ml-14 pl-14 border-l-2 border-neutral-900'>
                            <h3 className='text-5xl pb-5 font-semibold'>Portfolio 2</h3>
                            < a href='https://personal-website-gamma-ashen.vercel.app/' target='-blank' className='text-neutral-100 bg-neutral-800 rounded font-semibold px-8 py-3'>Project link</a>
                            <p className='text-xl pt-5'>
                                Developed a sleek portfolio website using React.js and Tailwind CSS.
                                Showcased projects and skills with dynamic components.
                                Highlighted proficiency in modern frontend technologies.
                            </p>
                        </div>
                    </div>

                    <div className='flex '>
                        <div>
                            <h3 className='text-5xl pb-2 font-semibold'>SNEAKSTAR</h3>
                            <p className='text-2xl pb-4 font-semibold'>(A eCommerce website)</p>
                            < a href='https://sneakstar.vercel.app/' target='-blank' className='text-neutral-100 bg-neutral-800 rounded font-semibold px-8 py-3'>Project link</a>
                            <p className='text-xl pt-5'>
                                Built a multipage shoe selling website with React.js and Tailwind CSS. Featured intuitive navigation and responsive design. Demonstrated proficiency in modern frontend development.
                            </p>
                        </div>
                        <div className='ml-14 pl-14 border-l-2 border-neutral-900'>
                            <h3 className='text-5xl pb-5 font-semibold'>An university website</h3>
                            < a href='https://universityopm.netlify.app/' target='-blank' className='text-neutral-100 bg-neutral-800 rounded font-semibold px-8 py-3'>Project link</a>
                            <p className='text-xl pt-5'>
                                Crafted a single-page university website using HTML, CSS, and JavaScript.
                                Designed a seamless and intuitive user experience within a single-page layout.
                                Incorporated interactive elements to facilitate easy navigation and engagement.
                                Demonstrated ability to create comprehensive web solutions within a single-page framework.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* new section */}
        </div>
    )
}

export default Home
