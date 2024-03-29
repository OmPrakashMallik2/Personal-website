import React from 'react';
import avatar from '../Media/Avatar2.jpg'

function Contact() {
    return (
        <div className='flex flex-col lg:flex-row w-full'>
            <div className='lg:w-1/2'>
                <img
                    className='w-full sticky top-0'
                    src={avatar}
                    alt='profile-pic'
                />
            </div>
            <div className='lg:w-1/2 lg:p-14 m-8 lg:m-0'>
                < div className='mb-16' >
                    <p className='text-4xl font-semibold'>(Contact)</p>
                    <h1 className='text-8xl lg:text-9xl font-bold'>Let’s get in touch</h1>
                </div>
                < div className='flex flex-col ' >
                    <input className='p-4 text-xl font-medium outline-none m-2 rounded-xl bg-neutral-800 text-neutral-100' type='text' placeholder='Your Name' />
                    <input className='p-4 text-xl font-medium outline-none m-2 rounded-xl bg-neutral-800 text-neutral-100' type='text' placeholder='Your Email' />
                    <textarea className='p-4 text-xl font-medium outline-none m-2 rounded-xl bg-neutral-800 text-neutral-100' height={50} type='text' placeholder='Your Message' />
                    <button className='p-4 text-xl m-2 bg-neutral-700 text-neutral-100 hover:bg-neutral-950 rounded-full font-bold'>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
