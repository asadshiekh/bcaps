import Link from 'next/link'
import React from 'react'
import { MdOutlineMarkEmailUnread } from "react-icons/md";

const Newsletter = () => {
  return (
    <div className='py-20 text-center bg-gray-100'>
        <h4 className='text-2xl lg:text-3xl font-semibold'>Subscribe to our <span className='text-[#ed2124]'>Newsletter</span></h4>
        <div className='w-10 bg-gray-900 h-[1.5px] mx-auto my-10'></div>
        <div className='flex items-center justify-center w-full lg:w-3/4 mx-auto'>
            <div className='border border-gray-300 h-[50px] flex items-center px-5 rounded-l-lg'>
                <MdOutlineMarkEmailUnread className='text-xl'/>
            </div>
            <input className='p-3 border border-gray-200 h-[50px] w-1/4 lg:w-2/4 text-xl' placeholder='Enter your Email' />
            <Link href="/" className='bg-gray-500 text-white text-md lg:text-xl h-[50px] flex items-center px-4 rounded-r-lg'>Subscribe Now</Link>
        </div>
    </div>
  )
}

export default Newsletter