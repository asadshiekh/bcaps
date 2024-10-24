"use client";
import Link from 'next/link';
import React, {useEffect, useState } from 'react';
import Image from 'next/image'; // Import Next.js Image component
import { FaFacebookF, FaInstagram, FaPinterestP, FaGoogle, FaTwitter } from 'react-icons/fa'; // Import social icons

const Header = () => {
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    // This ensures that window.location.pathname is only accessed on the client
    setCurrentPath(window.location.pathname);
  }, []);

  const isActive = (path) => currentPath === path;

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='inset-0' id="header">
      {/* Fixed Header */}
      <header className='fixed top-0 left-0 right-0 bg-white shadow-md z-50'>
        <div className='container-fluid mx-auto'>
          <div className='px-3 py-3 flex flex-wrap justify-between items-center text-black rounded-md'>
            <div className="flex items-center justify-between w-full md:w-auto md:mb-0 pr-3 lg:border-r lg:border-gray-300">
              <div className='lg:border-r lg:border-gray-300 pr-5 ml-4 lg:ml-8 mr-5 py-1 flex items-center'>
                  <Link href='/' className='flex items-center w-[150px]'>
                    {/* <img src='/images/assets/bcabs-logo.png' alt='logo' className='w-full lg:w-44' /> */}

                    <Image 
                      src='/images/assets/bcabs-logo.png' 
                      alt='logo' 
                      className='w-full lg:w-44' 
                      width={176} // Adjust this width based on your image size
                      height={44} // Adjust this height based on your image size
                  />

                  </Link>
              </div>
              <div className="md:hidden flex items-center">
                <Link href='/book-now' className='border border-red bg-[#ed2124] w-[110px]  px-4 py-2 rounded-md text-white inline-block hover:bg-[#ed2124] hover:border-[#ed2124] cursor-pointer text-sm md:text-base mr-3'>
                  Book Now!
                </Link>
                <button onClick={toggleMenu} className={`text-2xl focus:outline-none ${!menuOpen ? 'inline-block': 'hidden'}`}>
                  &#9776;
                </button>
                <button onClick={toggleMenu} className={`text-3xl focus:outline-none ${menuOpen ? 'inline-block': 'hidden'}`}>
                  &times;
                </button>
              </div>
              <ul className='hidden md:flex items-center space-x-4 md:space-x-8 font-semibold text-sm md:text-medium pr-3'>
                <li><Link href="/" className={`${ isActive('/') ? 'text-[#ed2124]' : 'text-gray-600' } hover:text-[#ed2124] tracking-wider`}>HOME</Link></li>
                <li><Link href="/kochi-city-taxi" className={`${ isActive('/kochi-city-taxi') ? 'text-[#ed2124]' : 'text-gray-600' } hover:text-[#ed2124] tracking-wider`}>FLEET</Link></li>
                <li><Link href="/kochi-taxi-rates" className={`${ isActive('/kochi-taxi-rates') ? 'text-[#ed2124]' : 'text-gray-600' } hover:text-[#ed2124] tracking-wider`}>TARIFF</Link></li>
                <li><Link href="/general-contact" className={`${ isActive('/general-contact') ? 'text-[#ed2124]' : 'text-gray-600' } hover:text-[#ed2124] tracking-wider`}>CONTACT</Link></li>
                <li><Link href="/book-now" className={`${ isActive('/book-now') ? 'text-[#ed2124]' : 'text-gray-600' } hover:text-[#ed2124] tracking-wider`}>BOOK NOW</Link></li>
              </ul>
            </div>

            <div className='hidden md:flex w-auto justify-center md:justify-end'>
              <Link href='tel:+919895118877' className='border border-[#ed2124] px-4 py-2 mr-2 rounded-md text-[#ed2124] inline-block hover:bg-[#ed2124] hover:text-white cursor-pointer text-sm md:text-base'>
                +91 9895 11 8877
              </Link>
              <Link href='/book-now' className='border border-red bg-[#ed2124] px-4 py-2 rounded-md text-white inline-block hover:bg-[#ed2124] hover:border-[#ed2124] cursor-pointer text-sm md:text-base'>
                Book Now!
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Side Menu for Mobile */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transition-transform transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} ease-in-out duration-300 z-50 border-t border-b`}>
        <div className="p-4 flex justify-center items-center border-b">
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
          {/* <button onClick={toggleMenu} className="text-2xl">&times;</button> */}
        </div>
        <ul className='text-sm md:text-medium font-semibold pr-3 p-4 space-y-6'>
            <li><Link href="/" className={`${ isActive('/') ? 'text-[#ed2124]' : 'text-gray-600' } hover:text-[#ed2124] tracking-wider`}>HOME</Link></li>
            <li><Link href="/kochi-city-taxi" className={`${ isActive('/kochi-city-taxi') ? 'text-[#ed2124]' : 'text-gray-600' } hover:text-[#ed2124] tracking-wider`}>FLEET</Link></li>
            <li><Link href="/kochi-taxi-rates" className={`${ isActive('/kochi-taxi-rates') ? 'text-[#ed2124]' : 'text-gray-600' } hover:text-[#ed2124] tracking-wider`}>TARIFF</Link></li>
            <li><Link href="/general-contact" className={`${ isActive('/general-contact') ? 'text-[#ed2124]' : 'text-gray-600' } hover:text-[#ed2124] tracking-wider`}>CONTACT</Link></li>
            <li><Link href="/book-now" className={`${ isActive('/book-now') ? 'text-[#ed2124]' : 'text-gray-600' } hover:text-[#ed2124] tracking-wider`}>BOOK NOW</Link></li>
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
