import React, { useEffect, useState } from 'react'
import { TechnicalSkills, professionalSkills } from '../utils/skills'
import SectionTitle from './SectionTitle'
import aos from 'aos'
import 'aos/dist/aos.css'
import { keyframes, styled } from 'styled-components'
const spanAnimation = keyframes`
0% { width: 0px; }
100% {  width:${props => props.progress === 1 ? props.progress + '%' : ''}}
`
const StyledSpan = styled.span`
animation-name: ${spanAnimation};
animation-duration: 2s;
animation-iteration-count: 1;
`
const Skills = () => {
    const [scroll, setScroll] = useState(false)
    const ScrollFunction = () => {
        if (window.scrollY > 1500) {
            setScroll(true)
        }
    }
    window.addEventListener('scroll', ScrollFunction)
    useEffect(() => {
        aos.init({
            duration: 900
        })
    }, [])
    return (
        <div id='skills' className='pt-[150px]'>
            <SectionTitle title='My Skills' />
            <div className=' flex justify-between gap-10 lg:gap-[110px] md:gap-[50px] md:flex-row flex-col' >
                <div className=' flex-1'>
                    <h2 className='text-center font-bold border-b-2 w-fit mx-auto border-white mb-7 text-[19px]'>Technical Skills</h2>
                    <div className=' flex flex-col gap-[14px]'>
                        {TechnicalSkills.map(skill => {
                            return (
                                <div data-aos='zoom-in' key={skill.title} className=' flex flex-col gap-1'>
                                    <img src={skill.image} width={28} alt="" />
                                    <h3>{skill.title}</h3>
                                    <div className='relative rounded bg-slate-300 h-[4px]'>
                                        {scroll ?
                                            <StyledSpan progress={skill.progress}
                                                className={` rounded-e absolute left-0 top-0 bottom-0 bg-green-600 h-full`}
                                                style={{ width: `${skill.progress}%` }}>
                                            </StyledSpan>
                                            : ''}
                                        <span
                                            className={`text-sm  inline-block px-1 rounde text-white absolute right-0 top-[-38px] bg-orange-500 `}
                                        >
                                            {skill.progress}%
                                        </span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className=' flex-1'>
                    <h2 className='text-center font-bold border-b-2 w-fit mx-auto border-white mb-7 text-[19px]'>Professional Skills</h2>
                    <div className=' flex flex-wrap'>
                        {professionalSkills.map(skill => {
                            return (
                                <div data-aos='zoom-in' className='progress-container my-4 w-1/2' key={skill.title}>
                                    <div style={{
                                        background: `conic-gradient(rgb(10, 149, 230) ${skill.count}deg, rgb(220, 220, 220) 0deg)`
                                    }} className='progress-me progress-cicular-bar text-center rounded-full  leading-[80px] mx-auto mb-3 w-[90px] h-[90px]'>
                                        <span className=' progress-value'>
                                            {skill.progress}%
                                        </span>
                                    </div>
                                    <span className=' block text-center'>{skill.title}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
