import React from 'react'
import { IoPerson } from "react-icons/io5";

function Toolbar() {
  return (
    <div className='hidden lg:block '>
        <div className='flex gap-2 items-center   bg-gray-400 justify-end pr-10 py-3 '>
        <IoPerson  className='bg-white  text-3xl p-1 rounded-4xl  '/>
        <span className='text-white font-semibold text-sm'>Profile</span>
        </div>
    </div>
  )
}

export default Toolbar