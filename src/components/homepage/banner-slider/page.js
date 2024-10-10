// src/components/BannerSlider.js
"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCheck } from "react-icons/fa6";

const images = [
    "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const BannerSlider = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="overflow-hidden relative">
            <Image 
                src='/images/assets/bcabs-kochi-cabs.jpg' 
                alt='BCabs Kochi' 
                className='w-full h-[650px] object-cover' 
                width={1920} 
                height={650} 
                priority
            />
            <div className="banner-block absolute top-0 left-0 right-0 bottom-0 bg-[#00000090] text-white text-center flex items-center">
                <div className="container mx-auto">
                    <div>
                        <h4 className="text-3xl font-medium mb-8">BCabs Ride Easy...<span className='bg-red-300'>24x7 Taxi Service</span></h4>
                        <h4 className="text-4xl font-semibold mb-8">Sabarimala Taxi</h4>
                        <h4 className="text-3xl font-medium mb-8 w-2/4 mx-auto">Kerala's Most Trusted & Largest Taxi Cab Operator</h4>
                        <h4 className="text-3xl font-medium mb-2"><span className="text-red-600">1000+</span> 5 Star reviews</h4>
                        <h4 className="text-3xl font-medium"><span className="text-red-600">18000+</span> regular customers</h4>
                        <div className='flex justify-center mt-8'>
                            <Link href='/book-now' className='border border-red-500 text-2xl bg-red-500 px-6 py-2 mr-2 rounded-md text-white inline-block hover:bg-red-500 hover:border-red-500 cursor-pointer'>
                                Book Now!
                            </Link>
                            <Link href='https://wa.me/919895118877?text=Just%20visited%20www.bcabs.com,%20would%20like%20to%20get%20a%20quote?' className='border border-black-500 text-2xl px-6 py-2 rounded-md text-black-500 inline-block hover:bg-black-500 hover:text-white cursor-pointer'>
                                Get a Quote
                            </Link>
                        </div>
                        <ul className='flex align-center justify-center space-x-10 text-medium mt-10'>
                            <li><FaCheck className='inline-block'/> On-Time</li>
                            <li><FaCheck className='inline-block'/> Reliable</li> 
                            <li><FaCheck className='inline-block'/> Guaranteed</li> 
                            <li><FaCheck className='inline-block'/> Satisfaction</li> 
                            <li><FaCheck className='inline-block'/> 15+ Years in service</li>
                        </ul>
                    </div>
                </div>
            </div>
            <svg className='absolute left-0 right-0 bottom-[-10px]' id="bigTriangleColor" xmlns="http://www.w3.org/2000/svg" fill="#fff" version="1.1" width="100%" height="100" viewBox="0 0 100 102" preserveAspectRatio="none">
                <path d="M0 30 L50 90 L100 30 V100 H0"></path>
            </svg>
        </div>
    );
};

export default BannerSlider;
