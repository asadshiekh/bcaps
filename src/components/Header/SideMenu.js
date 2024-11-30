import React from 'react';
import NavLinks from './NavLinks';
import SocialMediaIcons from './SocialMediaIcons';
import Logo from './Logo';

const SideMenu = ({ menuOpen, toggleMenu, links, isActive }) => (
  <div
    className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transition-transform transform ${
      menuOpen ? 'translate-x-0' : '-translate-x-full'
    } ease-in-out duration-300 z-50 border-t border-b`}
  >
    <div className="p-4 flex justify-center items-center border-b">
      <Logo src='/images/assets/side-menu-logo.png' alt='Side Menu Logo' width={100} height={100} />
    </div>
    <NavLinks links={links} isActive={isActive} className="flex-col space-y-6 p-4" />
    <SocialMediaIcons />
    <div className="p-2 mt-4 text-center text-sm">
      <p>&copy; 2024 <br /> BTransport Solutions (P) Limited</p>
      <p>All rights reserved</p>
    </div>
  </div>
);

export default SideMenu;
