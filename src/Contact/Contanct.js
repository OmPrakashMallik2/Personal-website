import React from 'react';
import avatar from '../Media/Avatar.jpg'

function Contact() {
    return (
        <div className='flex w-full'>
            <div className='w-1/2'>
                <img
                    className='w-full sticky top-0 h-screen object-cover'
                    src={avatar}
                    alt='profile-pic'
                />
            </div>
            <div className='w-1/2 p-14'>
                < div className='mb-16' >
                    <p className='text-4xl font-semibold'>(Contact)</p>
                    <h1 className='text-9xl font-bold'>Let’s get in touch</h1>
                </div>
                < div className='flex flex-col' >
                    <input className='p-4 text-xl m-2 bg-neutral-200 text-black rounded ' type='text' placeholder='Your Name' />
                    <input className='p-4 text-xl m-2 bg-neutral-200 text-black rounded ' type='text' placeholder='Your Email' />
                    <input className='p-4 text-xl m-2 bg-neutral-200 text-black rounded ' height={50} type='text' placeholder='Your Message' />
                    <button className='p-4 text-xl m-2 bg-black text-white rounded-full font-bold'>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
