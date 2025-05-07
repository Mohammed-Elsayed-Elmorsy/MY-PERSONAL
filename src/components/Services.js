import React, { useEffect } from 'react'
import { GoDeviceDesktop, GoCode, GoServer } from 'react-icons/go'
import SectionTitle from './SectionTitle'
import 'aos/dist/aos.css'
const Services = () => {
    // useEffect(() => {
    //     aos.init({
    //         duration: 1000
    //     })
    // }, [])
    return (
        <div id='services' className=' pt-[90px]'>
            <SectionTitle title='My Services' />
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pt-12 gap-4' >
                <div className=' flex-1  p-2 flex flex-col gap-2  shadow bg-white shadow-slate-400'>
                    <GoCode className=' text-[50px] text-red-600' />
                    <h3 className=' font-bold text-[22px] '>Front End Processes</h3>
                    <p className=' text-gray-900'>
                        Developing and maintaining the user interface.
                        Implementing design on mobile websites.
                        <br />Creating tools that
                        improve site interaction regardless of the browser</p>
                </div>
                <div data-aos='fade-up' className='move-me-up-delay flex-1  p-2 flex flex-col gap-2  -slate-300 bg-white shadow shadow-slate-400'>
                    <GoServer className=' text-[50px] text-red-600' />
                    <h3 className=' font-bold text-[22px] '>Back End Processes</h3>
                    <p className=' text-gray-900'>
                        Full-stack developers design and create websites and applications for various platforms.
                        <br />A full-stack developer’s job description might include the following...
                    </p>
                </div>
                <div data-aos='fade-up' className=' move-me-up-delay-more flex-1  p-2 flex flex-col gap-2  -slate-300 bg-white shadow shadow-slate-400'>
                    <GoDeviceDesktop className=' text-[50px] text-red-600' />
                    <h3 className=' font-bold text-[22px] '>Web Design</h3>
                    <p className=' text-gray-900'>
                        We design engaging and user-friendly websites that improve the customer experience,
                        <br />
                        we work with you to understand your business goals and preferences.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Services
