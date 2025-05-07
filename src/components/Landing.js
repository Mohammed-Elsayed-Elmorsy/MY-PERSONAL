/* eslint-disable jsx-a11y/img-redundant-alt */
import img from '../assets/mo.jpg'
import 'animate.css';
import { useState } from 'react';
import DataMe from './DataMe';

const Landing = () => {
    const [showRead, setShowRead] = useState(false)
    return (
        <div style={{ height: 'calc(100vh - 75px)' }} id='home' className=' md:flex md:h-[100vh]  items-center gap-5 md:p-0 pt-[150px] md:mt-[100px]'>
            <div className=' flex flex-col gap-3 flex-1  md:text-left'>
                <div>
                    <h3 className='animate__animated animate__rubberBand font-bold text-[22px]'>Hi It's Me</h3>
                    <h3 className=' font-bold md:text-[50px] lg:text-[54px] text-[32px]'>
                        <span className=' inline-block animate-me h-[40px]'>M</span>
                        o
                        <span className=' inline-block animate-me-delay h-[40px]'>h</span>
                        a
                        <span className=' inline-block animate-me-delay-more h-[40px]'>m</span>
                        m
                        <span className=' inline-block animate-me h-[40px]'>e</span>
                        d <span className=' inline-block animate-me-delay h-[40px] ml-2'> E </span>
                        l
                        <span className=' inline-block animate-me-delay-more h-[40px]'>m</span>
                        o
                        <span className=' inline-block animate-me-delay h-[40px]'>r</span>
                        s
                        <span className=' inline-block animate-me h-[40px]'>y</span>
                    </h3>
                    <span className=' font-bold md:text-[25px] lg:text-[30px] text-[23px]'>and I'm a </span><span className=' text-red-600 font-bold md:text-[25px] lg:text-[30px] text-[24px]'>Web Developer</span>
                </div>
                <p className=' text-gray-700 capitalize'> FullStack developer for more than one year I can create strong ,reactive , scalable  and fully responsive web app
                    I have a good experience in javascript , react.js , redux and next</p>
                <button onClick={() => setShowRead(true)}
                    className='w-fit md:m-0 bg-red-600 py-[6px] hover:bg-red-500 px-2 text-white'>READ MORE</button>
            </div>
            <div className='animate__animated animate__bounce relative  overflow-hidden rounded-full hidden md:block mt-4 mx-auto md:m-0 h-[270px] w-[260px] md:h-[380px] md:w-[380px]'>
                <img src={img} alt="personal image" className=' w-ful object-contain left-[-20px] top-[-120px] relative w-[400px]' />
                <div className=' absolute left-0 top-0 w-full h-full opacity-10 z-20 bg-black'></div>
            </div>
            <div onClick={(e) => {
                e.stopPropagation();
                setShowRead(false)
            }} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                className={`  flex justify-center items-center p-10  fixed text-[14px] md:text-[16px]
                    overflow-hidden z-40 left-0 top-0 bottom-0  duration-300 w-full h-full 
                    transition-all 
            ${showRead ? ' opacity-100 visible' : ' opacity-0 invisible'}`}>
                <DataMe setShowRead={setShowRead} />
            </div>
        </div >
    )
}

export default Landing
