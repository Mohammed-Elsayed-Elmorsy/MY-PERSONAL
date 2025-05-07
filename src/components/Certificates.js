import React from 'react'
import img from '../assets/cert1.jpg'
import SectionTitle from './SectionTitle'
const Certificates = () => {
    return (
        <div>
            <SectionTitle title={'Certificates'} />
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div>
                    <img src={img} className=' l' alt="" />
                </div>
                <div>
                    <img src={img} className=' l' alt="" />
                </div>
                <div>
                    <img src={img} className=' l' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Certificates