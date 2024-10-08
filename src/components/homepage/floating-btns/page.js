import Link from 'next/link';
import React from 'react'
import { FaShareAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const FloatingBtns = () => {
  return (
    <div className='fixed right-0 top-[50%] p-1 space-y-2'>
        <Link href="/" className='h-[50px] w-[50px] text-white bg-[#00AFF0] text-xl flex items-center justify-center rounded-md'>
            <FaShareAlt />
        </Link>
        <Link href="https://www.facebook.com/bcabs/" className='h-[50px] w-[50px] text-white bg-[#3B5998] text-xl flex items-center justify-center rounded-md'>
            <FaFacebookF />
        </Link>
        <Link href="https://wa.me/919895118877" className='h-[50px] w-[50px] text-white bg-[#25D366] text-2xl flex items-center justify-center rounded-md'>
            <IoLogoWhatsapp />
        </Link>
    </div>
  )
}

export default FloatingBtns