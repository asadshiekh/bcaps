"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { FaShareAlt, FaFacebookF } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FiMail, FiTwitter, FiLinkedin, FiCopy,FiInstagram,FiPhoneCall } from 'react-icons/fi';

const FloatingBtns = () => {
  const [isShareOpen, setIsShareOpen] = useState(false);

  const toggleShareWindow = () => {
    setIsShareOpen(!isShareOpen);
  };

  return (
    <div>
      {/* Floating buttons */}
      <div className='fixed right-0 top-[50%] p-1 space-y-2'>
        <button 
          onClick={toggleShareWindow} 
          className='h-[40px] w-[40px] text-white bg-[#00AFF0] text-xl flex items-center justify-center rounded-md'
        >
          <FaShareAlt />
        </button>
        <Link href="tel:+919895118877" target="_blank" className='h-[40px] w-[40px] text-white bg-[#3B5998] text-xl flex items-center justify-center rounded-md'>
          <FiPhoneCall />
        </Link>
        <Link href="https://wa.me/919895118877" target="_blank" className='h-[40px] w-[40px] text-white bg-[#25D366] text-2xl flex items-center justify-center rounded-md'>
          <IoLogoWhatsapp />
        </Link>
      </div>

      {/* Share window/modal */}
      {isShareOpen && (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center'>
          <div className='bg-white p-6 w-[300px] md:w-[400px]'>
            <h3 className='text-center text-lg font-bold mb-0 mb-2'>Share</h3>
            <p className='text-center'> Bcabs 24x7 Taxi Service at Kerala</p>

            <hr className='my-5'></hr>
            <div className='text-center'>
              <h3 className='text-center text-[12px] font-bold mb-0 mb-2 text-[#4f7fa9]'>No Contacts? No Problem.</h3>
              <p className='text-[12px]'>Tab to start adding the most important people to you</p>
            </div>
            <hr className='my-5'></hr>
            <div className='flex justify-around'>
              <Link href="https://www.facebook.com/bcabs/" target="_blank" className='text-[#3B5998] text-2xl'>
                <FaFacebookF />
              </Link>
              <Link href="https://wa.me/919895118877" target="_blank" className='text-[#25D366] text-2xl'>
                <IoLogoWhatsapp />
              </Link>
              <Link href="mailto:bcabs@bintel.com" className='text-[#0072c6] text-2xl'>
                <FiMail />
              </Link>
              <Link href="https://twitter.com/bcabsrideeasy/" target="_blank" className='text-[#1DA1F2] text-2xl'>
                <FiTwitter />
              </Link>
              <Link href="https://instagram.com/bcabs_taxi" target="_blank" className='text-[#0077B5] text-2xl'>
                <FiInstagram />
              </Link>
              <button onClick={() => navigator.clipboard.writeText(window.location.href)} className='text-2xl'>
                <FiCopy />
              </button>
            </div>
            <button onClick={toggleShareWindow} className='mt-4 text-white bg-red-500 px-4 py-2 rounded-lg w-full'>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingBtns;
