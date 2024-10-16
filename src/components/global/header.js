"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image'; // Import Next.js Image component
import { FaFacebookF, FaInstagram, FaPinterestP, FaGoogle, FaTwitter } from 'react-icons/fa'; // Import social icons

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='inset-0'>
      {/* Fixed Header */}
      <header className='fixed top-0 left-0 right-0 bg-white shadow-md z-50'>
        <div className='container-fluid mx-auto'>
          <div className='px-3 py-3 flex flex-wrap justify-between items-center text-black rounded-md'>
            <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0 pr-3 border-r border-gray-300">
              <div className='border-r border-gray-300 pr-8 mr-5 py-1 flex items-center'>
                {/* <h3 className='text-xl md:text-2xl'> */}
                  <Link href='/' className='flex items-center'>
                    {/* <Image
                      src='/images/assets/bcabs-logo.png'
                      alt='logo'
                      width={100} // Replace this with the actual width of your image
                      height={100} // Replace this with the actual height of your image
                      className='w-full'
                    /> */}
                    <img src='/images/assets/bcabs-logo.png' alt='logo' className='w-48' />
                  </Link>
                {/* </h3> */}
              </div>
              <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="text-3xl focus:outline-none">
                  &#9776;
                </button>
              </div>
              <ul className='hidden md:flex items-center space-x-4 md:space-x-8 font-semibold  md:text-lg pr-3 text-gray-800'>
                <li className='text-[14px]'><Link href="/">HOME</Link></li>
                <li className='text-[14px]'><Link href="/kochi-city-taxi">FLEET</Link></li>
                <li className='text-[14px]'><Link href="/kochi-taxi-rates">TARIFF</Link></li>
                <li className='text-[14px]'><Link href="/general-contact">CONTACT</Link></li>
                <li className='text-[14px]'><Link href="/book-now">BOOK NOW</Link></li>
              </ul>
            </div>

            <div className='hidden md:flex w-auto justify-center md:justify-end'>
              <Link href='tel:+919895118877' className='border border-red-500 px-4 py-2 mr-2 rounded-md text-red-500 inline-block hover:bg-red-500 hover:text-white cursor-pointer text-sm md:text-base'>
                +91 9895 11 8877
              </Link>
              <Link href='/book-now' className='border border-red bg-red-500 px-4 py-2 rounded-md text-white inline-block hover:bg-red-500 hover:border-red-500 cursor-pointer text-sm md:text-base'>
                Book Now!
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Side Menu for Mobile */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transition-transform transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} ease-in-out duration-300 z-50 border-t border-b`}>
        <div className="p-4 flex justify-between items-center border-b">
          <h3 className='text-xl font-bold'>
            <Link href='/' className='flex items-center'>
              <Image
                src='/images/assets/side-menu-logo.png'
                alt='logo'
                width={100} // Replace this with the actual width of your image
                height={100} // Replace this with the actual height of your image
                className='w-full'
              />
            </Link>
          </h3>
          <button onClick={toggleMenu} className="text-2xl">&times;</button>
        </div>
        <ul className='p-4 space-y-6'>
          <li><Link href="/" className="text-lg font-medium" onClick={toggleMenu}>HOME</Link></li>
          <li><Link href="/kochi-city-taxi" className="text-lg font-medium" onClick={toggleMenu}>FLEET</Link></li>
          <li><Link href="/kochi-taxi-rates" className="text-lg font-medium" onClick={toggleMenu}>TARIFF</Link></li>
          <li><Link href="/general-contact" className="text-lg font-medium" onClick={toggleMenu}>CONTACT</Link></li>
          <li><Link href="/book-now" className="text-lg font-medium" onClick={toggleMenu}>BOOK NOW</Link></li>
        </ul>

        {/* Social icons */}
        <div className="flex justify-around items-center p-4 border-t border-b">
          <a href="https://www.facebook.com/bcabs/" target='_blank' className="text-lg"><FaFacebookF /></a>
          <a href="https://twitter.com/bcabsrideeasy/" target='_blank' className="text-lg"><FaTwitter /></a>
          <a href="https://maps.app.goo.gl/yHhNHxfk6uctkh7z6" target='_blank' className="text-lg"><FaGoogle /></a>
          <a href="https://in.pinterest.com/bcabsrideeasy/" target='_blank' className="text-lg"><FaPinterestP /></a>
          <a href="https://instagram.com/bcabs_taxi" target='blank' className="text-lg"><FaInstagram /></a>
        </div>

        {/* Bottom copyright text */}
        <div className="p-2 mt-4 text-center text-sm">
          <p>&copy; 2024 <br /> BTransport Solutions (P) Limited</p>
          <p>All rights reserved</p>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleMenu}></div>
      )}
    </div>
  );
};

export default Header;
