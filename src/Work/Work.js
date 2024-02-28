import React from 'react'
import avatar from '../Media/Avatar2.jpg'

function Work() {

    const data = [
        {
            "id": 1,
            "tittle": "Project 1",
            "description": "description description description description description description description description description description description"
        },
        {
            "id": 2,
            "tittle": "Project 2",
            "description": "escription description description description description description description descrip description description description description description description description description description description description"
        },
        {
            "id": 3,
            "tittle": "Project 3",
            "description": "description"
        },
        {
            "id": 4,
            "tittle": "Project 4",
            "description": "description"
        },
        {
            "id": 5,
            "tittle": "Project 5",
            "description": "description"
        }
    ]

    return (
        <div>
            <h1 className='text-9xl font-bold text-center'>PROJECTS PROJECTS</h1>

            {data.map((project) =>
                (project.id % 2 === 0) ?
                    (
                        <div key={project.id} className='flex text-neutral-800 bg-neutral-100'>
                            <div className='w-1/2 '>
                                <img className='w-full' src={avatar} alt='project' />
                            </div>
                            <div className='flex flex-col justify-around w-1/2 p-10'>
                                <h2 className='font-semibold text-center text-5xl'>{project.tittle}</h2>
                                <p className='font-medium text-center text-xl'>{project.description}</p>
                                <div className='flex justify-around'>
                                    <button className='text-neutral-100 bg-neutral-800 rounded font-semibold px-8 py-3'>GitHub</button>
                                    <button className='text-neutral-100 bg-neutral-800 rounded font-semibold px-8 py-3'>Deploy</button>
                                </div>
                            </div>

                        </div>
                    ) :
                    (
                        <div key={project.id} className='flex bg-neutral-800 text-neutral-100'>
                            <div className='flex flex-col justify-around w-1/2 p-10'>
                                <h2 className='font-semibold text-center text-5xl'>{project.tittle}</h2>
                                <p className='font-medium text-center text-xl'>{project.description}</p>
                                <div className='flex justify-around'>
                                    <button className='bg-neutral-100 text-neutral-800 rounded font-semibold px-8 py-3'>GitHub</button>
                                    <button className='bg-neutral-100 text-neutral-800 rounded font-semibold px-8 py-3'>Deploy</button>
                                </div>
                            </div>
                            <div className='w-1/2 '>
                                <img className='w-full' src={avatar} alt='project' />
                            </div>
                        </div>
                    )
            )}
        </div>
    )
}

export default Work


