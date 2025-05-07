import React, { useState } from 'react'
import { FaArrowLeft, FaBars } from 'react-icons/fa'
const Header = () => {
    const [showmenu, setShowmenu] = useState(false)
    return (
        <header className={` bg-slate-20 flex justify-between items-center h-[100px]`}>
            <div >
                <h3 className=' font-bold text-lg'>PORTFOLIO</h3>
                <p className=' text-gray-600 mt-[-5px]'> MOHAMMED ELMORSY</p>
            </div>
            <nav className='gap-[3px] items-center hidden md:flex'>
                <li>
                    <a className=' block py-2 px-3 hover:text-red-600 transition-all font-bold' href="#home">Home</a>
                </li>
                <li>
                    <a className=' block py-2 px-3 hover:text-red-600 transition-all font-bold' href="#about">About</a>
                </li>
                <li>
                    <a className=' block py-2 px-3 hover:text-red-600 transition-all font-bold' href="#services">Services</a>
                </li>
                <li>
                    <a className=' block py-2 px-3 hover:text-red-600 transition-all font-bold' href="#skills">Skills</a>
                </li>
                <li>
                    <a className=' block py-2 px-3 hover:text-red-600 transition-all font-bold' href="#projects">Projects</a>
                </li>
                <li>
                    <a className=' block py-2 px-3 hover:text-red-600 transition-all font-bold' href="#contact">Contact</a>
                </li>
            </nav>
            {/* nav in small */}
            <nav
                className=
                {`gap-5 small items-center fixed right-0 top-0  text-center flex flex-col justify-center
                 bg-slate-50 text-lime-50 md:hidden transition-all h-full duration-300
                 ${showmenu ? ' w-full' : 'w-[0px] overflow-hidden'}`}>
                <li>
                    <a
                        onClick={() => setShowmenu(false)}
                        className=' w-[150px] block py-1 px-2 hover:text-red-600 text-black transition-all font-bold'
                        href="#home">Home</a>
                </li>
                <li>
                    <a
                        onClick={() => setShowmenu(false)}
                        className=' w-[150px]  block py-1 px-2 hover:text-red-600 text-black transition-all font-bold'
                        href="#about">About</a>
                </li>
                <li>
                    <a
                        onClick={() => setShowmenu(false)}
                        className='  w-[150px] block py-1 px-2 hover:text-red-600 text-black transition-all font-bold'
                        href="#services">Services</a>
                </li>
                <li>
                    <a
                        onClick={() => setShowmenu(false)}
                        className=' w-[150px] block py-1 px-2 hover:text-red-600 text-black transition-all font-bold'
                        href="#skills">Skills</a>
                </li>
                <li>
                    <a
                        onClick={() => setShowmenu(false)}
                        className=' w-[150px] block py-1 px-2 hover:text-red-600 text-black transition-all font-bold'
                        href="#projects">Projects</a>
                </li>
                <li>
                    <a
                        onClick={() => setShowmenu(false)}
                        className=' w-[150px] block py-1 px-2 hover:text-red-600 text-black transition-all font-bold'
                        href="#contact">Contact</a>
                </li>
                <span
                    className=' z-50 absolute left-3 top-3 bg-red-600 hover:bg-red-500 rounded cursor-pointer  p-3'
                    onClick={() => setShowmenu(false)}>
                    <FaArrowLeft onClick={() => setShowmenu(false)} />
                </span>
            </nav>
            <div className='md:hidden cursor-pointer' onClick={() => setShowmenu(true)}><FaBars className=' text-[22px]' /></div>
        </header>
    )
}

export default Header
