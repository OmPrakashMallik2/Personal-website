import React from 'react'
import Poster from '../Media/travis-scott-jfi0e3appl6ayo4o.jpg'
import { GoArrowDownRight } from "react-icons/go";

function Home() {
    return (
        <div className=''>
            {/* name heading */}
            <div className='p-14'>
                <h1 className='text-9xl font-bold'>Om Prakash Mallik</h1>
                <h1 className='text-8xl font-bold'>Softwere Developer</h1>
                <div className='flex justify-between mt-5'>
                    <p className='text-4xl font-semibold'>(Darbhanga, Bihar)</p>

                    <p className='text-4xl font-semibold flex'> <GoArrowDownRight className='text-5xl mx-3' /> Scroll Down </p>

                </div>
            </div>

            {/* poster */}
            <div>
                <img src={Poster} alt='poster' />
            </div>
        </div>
    )
}

export default Home
