import Header from './components/Header'
import Landing from './components/Landing'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Certificates from './components/Certificates'
import { useState } from 'react'
const App = () => {
  const [addshadow, setAddshadow] = useState(false)
  const addshadowFunction = () => {
    if (window.scrollY > 0) {
      setAddshadow(true)
    } else {
      setAddshadow(false)
    }
  }
  window.addEventListener('scroll', addshadowFunction)
  return (
    <>
      <div className={` ${addshadow ? ' shadow-md bg-white border-none' : 'bg-white border-b border-slate-200'}  fixed left-0 w-full z-10 top-0 `}>
        <div className=' container mx-auto px-4 md:px-[20px] lg:px-[130px]'>
          <Header />
        </div>
      </div>
      <div className=''>
        <div className=' container mx-auto px-4 md:px-[20px] lg:px-[130px]'>
          <Landing />
          <About />
          <Services />
          <Skills />
          {/* <Certificates /> */}
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App
