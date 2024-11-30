import React from 'react';

const MobileMenuToggle = ({ menuOpen, toggleMenu }) => (
  <div className="md:hidden flex items-center">
    <button onClick={toggleMenu} className={`text-2xl focus:outline-none ${!menuOpen ? 'inline-block' : 'hidden'}`}>
      &#9776;
    </button>
    <button onClick={toggleMenu} className={`text-3xl focus:outline-none ${menuOpen ? 'inline-block' : 'hidden'}`}>
      &times;
    </button>
  </div>
);

export default MobileMenuToggle;
