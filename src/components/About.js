/* eslint-disable jsx-a11y/img-redundant-alt */
import img from '../assets/mo0.jpg'
import aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { FaRegCheckSquare } from 'react-icons/fa'
const About = () => {
    useEffect(() => {
        aos.init({
            duration: 900,
            delay: 100
        })
    }, [])
    return (
        <div id='about' className=' md:flex  items-center xl:gap-[80px] md:h-[100vh]'>
            <div data-aos='fade-up' className='lg:block hidden overflow-hidden rounded-full mt-4 mx-auto md:m-0  md:h-[250px] md:w-[250px] lg:h-[380px] lg:w-[380px]'>
                <img src={img} alt="personal image" className=' relative top-[0px]  scale-125' />
            </div>
            <div data-aos='zoom-in' className=' flex flex-col gap-3 flex-1 '>
                <div>
                    <h2 className='text-[30px] font-bold'>About Me</h2>
                </div>
                <p className=' text-gray-700 '>
                    <FaRegCheckSquare className=' md:inline ml-[-25px] mt-[-5px] hidden text-[18px] text-green-600' />I'm a <span className=' text-blue-500 font-bold'>Resident Doctor</span> At AL_AZHER Hospitals At <span className=' text-blue-500 font-bold'>Pediatric And Neoborn Department</span>
                    <br />
                    <FaRegCheckSquare className=' md:inline ml-[-25px] mt-[-5px] hidden text-[18px] text-green-600' />I'v been a <span className=' text-blue-500 font-bold'>FullStack</span> Developer For Over a Year I Can Create Strong,Reactive,Scalable and Fully Responsive web app
                    <br /><FaRegCheckSquare className=' md:inline ml-[-25px] mt-[-5px] hidden text-[18px] text-green-600' />Currently working as a <span className=' text-blue-500 font-bold'>Front End Developer</span>  as a Freelancer
                    <br /><FaRegCheckSquare className=' md:inline ml-[-25px] mt-[-5px] hidden text-[18px] text-green-600' />My Coding Philosophy is <span className=' text-blue-500 font-bold'>Fewer Lines</span> Make For Better Code. Streamlining Code Creates More Nimble Applications
                    <br /><FaRegCheckSquare className=' md:inline ml-[-25px] mt-[-5px] hidden text-[18px] text-green-600' />I Have a Good Experience in Javascript and <span className=' text-blue-500 font-bold'>REACT & NextJs</span>
                </p>
                {/* <button className=' w-fit mx-auto md:m-0 bg-red-600 hover:bg-red-500 py-[6px] px-2 text-white'>READ MORE</button> */}
            </div>
        </div>
    )
}

export default About
