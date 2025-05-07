import React from 'react'
import { FaAngleLeft } from 'react-icons/fa'
const ReadMore = ({ setShowRead, showRead }) => {
    return (
        <div className={`fixed z-40 left-0 top-0 bottom-0 opacity-60 bg-black h-full transition-all ${showRead ? 'w-full' : ' w-[0px]'}`}>
            <span onClick={() => setShowRead(false)}
                className=' opacity-100 bg-blue-500 absolute left-4 top-[100px] z-50 cursor-pointer text-white rounded '>
                <FaAngleLeft
                />
            </span>
        </div>
    )
}

export default ReadMore
