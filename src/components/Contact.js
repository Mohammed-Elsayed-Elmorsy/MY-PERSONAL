/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from 'react'
import { FaCheckCircle, FaEnvelope, FaEnvelopeSquare, FaFacebook, FaGithub, FaGoogle, FaLinkedin, FaMobile, FaMobileAlt, FaPhone, FaTelegram, FaTelegramPlane, FaWhatsapp, FaWhatsappSquare } from 'react-icons/fa'
import aos from 'aos'
import 'aos/dist/aos.css'
import SectionTitle from './SectionTitle'
const Contact = () => {
    useEffect(() => {
        aos.init({
            duration: 1000
        })
    }, [])
    return (
        <div id='contact' className=' pt-[70px] pb-10'>
            <SectionTitle title={'CONTACT ME'} />
            <div className=' flex gap-12 justify-between items-center md:flex-row flex-col'>
                <div
                    data-aos='zoom-in'
                    className='flex-1 flex flex-col gap-3'>
                    <h1 className=' font-bold text-[20px]'>LET'S WORK TOGETHER</h1>
                    <p className=' text-gray-500'>
                        Consider your development experience and when you started working on both front- and back-end development. Example: "I became interested in becoming a
                        full-stack developer while working as a front-end developer .
                    </p>
                    <div className='font-bold flex-col flex gap-3'>
                        <span
                            className='  flex  items-center gap-2 '><FaEnvelope className='text-red-600 text-3xl' />sallealamohammed@gmail.com </span>
                        <span
                            className=' flex  items-center gap-2'><FaPhone className='text-red-600 text-3xl' /> 01554701926 / 01212659525
                        </span>
                    </div>
                    <div className=' flex gap-3'>
                        <a
                            className=' text-[30px] text-red-600' target='_blank' href="https://www.facebook.com/profile.php?id=100079764606912"><FaFacebook /></a>
                        <a
                            className=' text-[30px] text-red-600' target='_blank' href="https://t.me/dr_mohammed_elmorsy"><FaTelegram /></a>
                        <a
                            className=' text-[30px] text-red-600' target='_blank' href="https://wa.me/01212659525"><FaWhatsappSquare /></a>
                        <a
                            className=' text-[30px] text-red-600' target='_blank' href="https://github.com/Mohammed-Elsayed-Elmorsy"><FaGithub /></a>
                        <a
                            className=' text-[30px] text-red-600' target='_blank' href="https://www.linkedin.com/in/mohammed-elmorsy-018378258/"><FaLinkedin /></a>
                    </div>
                    <p>
                        All Rights Preserved
                        &copy; <span className=' font-bold'>
                            MOHAMMED ELMORSY
                        </span>

                        <span className=' ml-1 text-red-600 font-bold inline-flex items-center gap-1'>2023 <FaCheckCircle /></span>
                    </p>
                </div>
                <form data-aos='fade-up'
                    className='w-full flex-1 flex gap-3 flex-col'>
                    <input
                        className='  shadow-slate-300 shadow w-full px-2 py-2'
                        type="text"
                        placeholder='Enter Name' />
                    <input
                        className='  shadow-slate-300 shadow w-full px-2 py-2'
                        type="email"
                        placeholder='Enter Email' />
                    <textarea
                        className='  shadow-slate-300 shadow w-full px-2 py-2'
                        placeholder=' Enter Your Message'
                        cols="30"
                        rows="5">
                    </textarea>
                    <button
                        className='  shadow w-full mx-auto py-2 px-2 bg-red-600 text-white'
                        type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
