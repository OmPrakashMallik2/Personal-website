import React, { useEffect, useState } from 'react'
import { FaJava } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiSpring } from "react-icons/si";

function Skills() {

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
            "logo": FaJava,
            "title": "Java",
            "description": "I am good at java programming, i have done all the basic core concepts of java like Data Types, Loops, Conditionals, OOPs, Multithreading"
        },
        {
            "id": 2,
            "logo": SiSpring,
            "title": "Spring Framework",
            "description": "description"
        },
        {
            "id": 3,
            "logo": SiSpringboot,
            "title": "Spring Boot",
            "description": "description"
        },
        {
            "id": 4,
            "logo": FaReact,
            "title": "React js",
            "description": "description"
        },
        {
            "id": 5,
            "logo": SiTailwindcss,
            "title": "Tailwind CSS",
            "description": "description"
        },
        {
            "id": 6,
            "logo": GrMysql,
            "title": "MySQL",
            "description": "description"
        },
        {
            "id": 7,
            "logo": FaJava,
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
                <>
                    <div key={project.id} className={project.id % 2 === 0 ? 'flex flex-col items-center p-2 lg:flex-row text-neutral-800 bg-neutral-100' : 'flex flex-col-reverse items-center p-2 lg:flex-row bg-neutral-800 text-neutral-100'}>
                        {/* Project image */}
                        <div className={project.id % 2 === 0 ? 'lg:w-1/2' : 'lg:w-1/2 order-2'}>
                            {<project.logo className='text-9xl w-full' />}
                        </div>
                        {/* Project details */}
                        <div className='flex flex-col justify-around lg:w-1/2 p-10'>
                            <h2 className='font-semibold text-center pb-3 text-5xl'>{project.title}</h2>
                            <p className='font-normal text-center text-lg'>{project.description}</p>
                        </div>
                    </div>
                </>
            ))}
        </div>
    )
}

export default Skills
