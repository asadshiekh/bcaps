import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo = ({ src, alt, width = 150, height = 50, className = '' }) => (
  <Link href='/' className={`flex items-center ${className}`}>
    <Image src={src} alt={alt} width={width} height={height} className="w-full" />
  </Link>
);

export default Logo;
