import React from 'react'
import { data } from '../utils/dataMe'
import { GoX } from 'react-icons/go'

const DataMe = ({ setShowRead }) => {
    return (
        <div onClick={(e) => e.stopPropagation()}>
            <div className=' mb-10 text-center font-bold text-[30px]'>
                <span
                    onClick={() => setShowRead(false)}
                    className=' flex items-center justify-center absolute bg-red-600 top-4 left-0 w-[40px]  h-[40px] cursor-pointer'>
                    <GoX className=' text-white' />
                </span>
                {/* <span className=' loading ml-1'>..</span> */}
                {/* <span className=' loading-delay-more'>..</span><span className=' loading-delay'>..</span> */}
            </div>
            <div className=''>
                <div className=' text-black bg-white   p-5' >
                    Hello! I'm <span className=' font-bold text-red-600 capitalize'>Dr. Mohammed Elmorsy</span>,
                    a dedicated <span className=' font-bold text-red-600 capitalize'>medical doctor </span>
                    with a deep passion for technology and innovation.
                    My journey bridges two worlds—healthcare and web development—allowing me to
                    approach problems with both scientific precision and creative thinking.

                    After completing my medical degree, I found myself drawn to the power of
                    technology in transforming lives. This curiosity led me to the world of
                    <span className=' font-bold text-red-600 capitalize'> frontend</span> development, where I’ve gained over 2 years of experience building clean,
                    responsive, and user-friendly web applications using technologies
                    like JavaScript, <span className=' font-bold text-red-600'>React, and Next.js</span>.

                    Today, I combine my medical knowledge with my tech skills to build websites and applications that make information more accessible, especially in the health and education sectors. Whether it's developing a medical platform, a Quran learning website, or a dynamic user interface, I care deeply about delivering meaningful user experiences.

                    When I'm not coding or studying, you’ll find me reading, teaching Quran, or playing a good game of chess or football.
                </div>
                {/* <div className=' text-black lg:w-[370px] bg-white p-3 shadow '>
                    <h2 className=' font-bold text-[22px]'>
                        Education
                    </h2>
                    <div className=' flex flex-col gap-2'>
                        <span>Degree : <span className=' font-bold'>{data.education.degree}</span></span>
                        <span>Start : <span className=' font-bold'>{data.education.start}</span></span>
                        <span>End : <span className=' font-bold'> {data.education.end}</span></span>
                    </div>
                </div> */}
                {/* <div className=' text-black lg:w-[350px] bg-white  shadow p-3' >
                    <h2 className=' font-bold text-[22px]'>
                        Hobbies
                    </h2>
                    <div className='mt-3 flex flex-wrap gap-3'>
                        {data.hobbies.map(item => {
                            return <span className='  text-white inline-block bg-red-600 py-1 px-2' key={item}>{item}</span>
                        })}
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default DataMe
