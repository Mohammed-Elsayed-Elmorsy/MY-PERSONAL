/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from 'react'
import { projects } from '../utils/skills'
import aos from 'aos'
import 'aos/dist/aos.css'
import SectionTitle from './SectionTitle'
const Projects = () => {
    useEffect(() => {
        aos.init({
            duration: 1000
        })
    }, [])
    return (
        <div id='projects' className=' pt-[80px]'>
            <SectionTitle title={'MY Projects'} />
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  items-center gap-5'>
                {projects.map(item => {
                    return (
                        <div data-aos='fade-up'
                            className='project shadow shadow-gray-400 h-[218px] p-2 bg-slate-50  cursor-pointer overflow-hidden relative'
                            key={item.title}>
                            <img
                                src={item.photo} alt="photo for project"
                                className=' h-full transition-all w-full object-cover' />
                            <div className='project-overlay flex flex-col gap-2 justify-center items-center'>
                                <img src={item.image} alt="image" className=' w-[50px] rounded-full' />
                                <h3 className=' font-bold '>
                                    {item.title}
                                </h3>
                                <div className=' flex flex-wrap gap-1 items-center justify-center'>
                                    {item.usedTech.map(item => {
                                        return (
                                            <span className='text-[13px] min-w-[60px] text-center bg-white p-1 inline-block text-black' key={item}>
                                                {item}
                                            </span>
                                        )
                                    })}
                                </div>
                                <a
                                    href={item.link}
                                    target='_blank'
                                    className='text-center hover:bg-red-500 transition-all bg-red-600 text-white py-[7px] block w-[90%] mx-auto px-2'>Link To Project</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects
