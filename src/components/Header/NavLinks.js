import React from 'react';

const NavLinks = ({ links, isActive, className = '' }) => (
  <ul className={`flex space-x-4 font-semibold text-sm md:text-medium ${className}`}>
    {links.map(({ label, href }) => (
      <li key={href}>
        <a href={href} className={`${isActive(href) ? 'text-[#ed2124]' : 'text-gray-600'} hover:text-[#ed2124] tracking-wider`}>
          {label}
        </a>
      </li>
    ))}
  </ul>
);

export default NavLinks;
