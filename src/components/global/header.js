"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
  // State to manage the side menu open/close
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle function for side menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='inset-0'>
      <div className='container-fluid mx-auto'>
        <div className='bg-white px-3 py-3 flex flex-wrap justify-between items-center shadow-md text-black rounded-md'>
          {/* Left - Logo and Hamburger Menu */}
          <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
            <div className='border-r border-gray-300 pr-3 mr-3 flex items-center'>
              <h3 className='text-xl md:text-2xl'>
                <Link href='/' className='flex items-center'>
                  <img src='/images/assets/bcabs-logo.png' alt='logo' className='w-1/2 md:w-3/4' />
                </Link>
              </h3>
            </div>
            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-3xl focus:outline-none">
                &#9776; {/* Hamburger Icon */}
              </button>
            </div>
            {/* Desktop Menu */}
            <ul className='hidden md:flex items-center space-x-4 md:space-x-8 font-medium text-sm md:text-lg border-r border-gray-300 pr-3'>
              <li><Link href="/">HOME</Link></li>
              <li><Link href="/kochi-city-taxi">FLEET</Link></li>
              <li><Link href="/kochi-taxi-rates">TARIFF</Link></li>
              <li><Link href="/general-contact">CONTACT</Link></li>
              <li><Link href="/book-now">BOOK NOW</Link></li>
            </ul>
          </div>

          {/* Right - Contact Links for larger screens */}
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

      {/* Side Menu for Mobile */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transition-transform transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} ease-in-out duration-300 z-50`}>
        <div className="p-4 flex justify-between items-center">
          <h3 className='text-xl font-bold'>Menu</h3>
          <button onClick={toggleMenu} className="text-2xl">&times;</button> {/* Close button */}
        </div>
        <ul className='p-4 space-y-6'>
          <li><Link href="/" className="text-lg" onClick={toggleMenu}>HOME</Link></li>
          <li><Link href="/kochi-city-taxi" className="text-lg" onClick={toggleMenu}>FLEET</Link></li>
          <li><Link href="/kochi-taxi-rates" className="text-lg" onClick={toggleMenu}>TARIFF</Link></li>
          <li><Link href="/general-contact" className="text-lg" onClick={toggleMenu}>CONTACT</Link></li>
          <li><Link href="/book-now" className="text-lg" onClick={toggleMenu}>BOOK NOW</Link></li>
        </ul>
      </div>

      {/* Overlay for Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleMenu}></div>
      )}
    </div>
  );
};

export default Header;
