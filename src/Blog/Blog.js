import React, { useEffect, useState } from 'react'
import avatar from '../Media/Avatar2.jpg';
import { FaJava } from "react-icons/fa";

function Blog() {
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

    const data = [
        {
            "id": 1,
            "logo": <FaJava/>,
            "title": "Core Java",
            "description": "description"
        },
        {
            "id": 2,
            "logo": "logo",
            "title": "Spring Boot",
            "description": "description"
        },
        {
            "id": 3,
            "logo": "logo",
            "title": "React js",
            "description": "description"
        },
        {
            "id": 4,
            "logo": "logo",
            "title": "Tailwind CSS",
            "description": "description"
        },
        {
            "id": 5,
            "logo": "Logo",
            "title": "SQL",
            "description": "description"
        },
        {
            "id": 6,
            "logo": "Logo",
            "title": "MySQL",
            "description": "description"
        },
        {
            "id": 7,
            "logo": "Logo",
            "title": "Skill",
            "description": "description"
        }
    ]

    return (
        <div>
            <div style={{ overflow: 'hidden' }}>
                <h1 className='text-9xl font-bold text-center p-5' style={{ transform: `translateX(-${scrollOffset}px)`, whiteSpace: 'nowrap' }}>SKILLS  SKILLS  SKILLS  SKILLS SKILLS SKILLS  SKILLS  SKILLS  SKILLS SKILLS</h1>
            </div>

            {/* Render project cards */}
            {data.map((project) => (
                <div key={project.id} className={project.id % 2 === 0 ? 'flex flex-col lg:flex-row text-neutral-800 bg-neutral-100' : 'flex flex-col-reverse lg:flex-row bg-neutral-800 text-neutral-100'}>
                    {/* Project image */}
                    <div className={project.id % 2 === 0 ? 'lg:w-1/2' : 'lg:w-1/2 order-2'}>
                        {project.logo}
                    </div>
                    {/* Project details */}
                    <div className='flex flex-col justify-around lg:w-1/2 p-10'>
                        <h2 className='font-semibold text-center text-5xl'>{project.title}</h2>
                        <p className='font-medium text-center text-xl'>{project.description}</p>
                        {/* <div className='flex justify-around'>
                            <button className={project.id % 2 === 0 ? 'text-neutral-100 bg-neutral-800 rounded font-semibold px-8 py-3' : 'bg-neutral-100 text-neutral-800 rounded font-semibold px-8 py-3'}>GitHub</button>
                            <button className={project.id % 2 === 0 ? 'text-neutral-100 bg-neutral-800 rounded font-semibold px-8 py-3' : 'bg-neutral-100 text-neutral-800 rounded font-semibold px-8 py-3'}>Deploy</button>
                        </div> */}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Blog
