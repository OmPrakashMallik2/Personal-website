import React from 'react'

function Blog() {
    const data = [
        {
            "id": 1,
            "logo": "logo",
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
            <h1 className='text-center text-9xl font-bold' >SKILLS SKILLS</h1>
            <div className='grid grid-cols-4 gap-8 p-5'>

                {
                    data.map((skill) => (
                        <div key={skill.id} className='bg-neutral-800 text-neutral-100 rounded p-5 flex flex-col justify-around items-center'>
                            <logo>{skill.logo}</logo>
                            <h1 className='text-5xl font-semibold py-10'>{skill.title}</h1>
                            <p className='text-xl font-medium'>{skill.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Blog
