import React, { useEffect, useState } from 'react';
import avatar from '../Media/Avatar2.jpg';

function Work() {
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

    // Sample data array for projects
    const data = [
        {
            "id": 1,
            "title": "Project 1",
            "description": "Description for Project 1"
        },
        {
            "id": 2,
            "title": "Project 2",
            "description": "Description for Project 2"
        },
        // Add more project data as needed
    ];

    return (
        <div>
            <div style={{ overflow: 'hidden' }}>
                <h1 className='text-9xl font-bold text-center p-5' style={{ transform: `translateX(-${scrollOffset}px)`, whiteSpace: 'nowrap' }}>PROJECTS  PROJECTS  PROJECTS  PROJECTS PROJECTS PROJECTS  PROJECTS  PROJECTS  PROJECTS PROJECTS</h1>
            </div>

            {/* Render project cards */}
            {data.map((project) => (
                <div key={project.id} className={project.id % 2 === 0 ? 'flex text-neutral-800 bg-neutral-100' : 'flex bg-neutral-800 text-neutral-100'}>
                    {/* Project image */}
                    <div className={project.id % 2 === 0 ? 'w-1/2' : 'w-1/2 order-2'}>
                        <img className='w-full' src={avatar} alt='project' />
                    </div>
                    {/* Project details */}
                    <div className='flex flex-col justify-around w-1/2 p-10'>
                        <h2 className='font-semibold text-center text-5xl'>{project.title}</h2>
                        <p className='font-medium text-center text-xl'>{project.description}</p>
                        <div className='flex justify-around'>
                            <button className={project.id % 2 === 0 ? 'text-neutral-100 bg-neutral-800 rounded font-semibold px-8 py-3' : 'bg-neutral-100 text-neutral-800 rounded font-semibold px-8 py-3'}>GitHub</button>
                            <button className={project.id % 2 === 0 ? 'text-neutral-100 bg-neutral-800 rounded font-semibold px-8 py-3' : 'bg-neutral-100 text-neutral-800 rounded font-semibold px-8 py-3'}>Deploy</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Work;
