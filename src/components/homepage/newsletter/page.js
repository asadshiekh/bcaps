import Link from 'next/link'
import React from 'react'
import { MdOutlineMarkEmailUnread } from "react-icons/md";

const Newsletter = () => {
  return (
    <div className='py-20 text-center bg-gray-100'>
        <h4 className='text-4xl mb-5 font-semibold'>Subscribe to our <span className='text-red-500'>Newsletter</span></h4>
        <div className='w-10 bg-gray-900 h-[2px] mx-auto my-14'></div>
        <div className='flex items-center justify-center'>
            <div className='border border-gray-300 h-[60px] flex items-center px-5 rounded-l-lg'>
                <MdOutlineMarkEmailUnread className='text-xl'/>
            </div>
            <input className='p-3 border border-gray-200 h-[60px] w-2/4' placeholder='Enter your Email' />
            <Link href="/" className='bg-gray-500 text-white text-xl h-[60px] flex items-center px-4 rounded-r-lg'>Subscribe Now</Link>
        </div>
    </div>
  )
}

export default Newsletter