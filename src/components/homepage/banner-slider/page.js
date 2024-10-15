"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCheck } from "react-icons/fa6";
import BasicSlider from '../BasicSlider/page';
import TypingComponent from '../TypingComponent/page';


const BannerSlider = () => {
    // State to track the window size
    const [isMobile, setIsMobile] = useState(false);

    // Effect to update isMobile state based on window width
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Adjust this threshold as needed
        };

        handleResize(); // Set initial state
        window.addEventListener('resize', handleResize); // Listen for resize events

        return () => {
            window.removeEventListener('resize', handleResize); // Cleanup event listener
        };
    }, []);

    return (
        <div className="overflow-hidden relative">
            {/* Image section for larger screens */}
            {!isMobile && (
                <Image 
                    src='/images/assets/bcabs-kochi-cabs.jpg' 
                    alt='BCabs Kochi' 
                    className='w-full h-[950px] lg:h-[650px] object-cover' 
                    width={1920} 
                    height={650} 
                    priority
                />
            )}
            
            {/* White background section for mobile */}
            {isMobile && (
                <div className="w-full h-[950px] lg:h-[650px] bg-white flex items-center pt-[200px] md:pt-0">
                    <div className="container mx-auto text-center">
                        <h4 className="text-xl md:text-3xl font-medium mb-8">BCabs Ride Easy...<span className='bg-red-300'>24x7 Taxi Service</span></h4>

                        <BasicSlider></BasicSlider>

                        <div className=' mt-5'>
                            <TypingComponent fontColor="text-black" fontSize="3xl"></TypingComponent>
                        </div>


                        <h4 className="text-2xl md:text-3xl font-medium mb-8 w-full lg:w-2/4 mx-auto">Kerala's Most Trusted & Largest Taxi Cab Operator</h4>
                        <h4 className="text-2xl md:text-3xl font-medium mb-2"><span className="text-red-600">1000+</span> 5 Star reviews</h4>
                        <h4 className="text-2xl md:text-3xl font-medium"><span className="text-red-600">18000+</span> regular customers</h4>
                        <div className='flex justify-center mt-8 space-x-2'> {/* Added space-x-2 for spacing between buttons */}
                            <Link href='/book-now' 
                                className='py-2 px-3 border border-red-500 text-2xl bg-red-500 lg:px-6 lg:py-2 rounded-md text-white inline-block hover:bg-red-500 hover:border-red-500 cursor-pointer'
                            >
                                Book Now!
                            </Link>
                            <Link  href='https://wa.me/919895118877?text=Just%20visited%20www.bcabs.com,%20would%20like%20to%20get%20a%20quote?' 
                                className='py-2 px-3 border border-black text-2xl lg:px-6 lg:py-2 rounded-md text-black inline-block hover:bg-black hover:text-white cursor-pointer'
                            >
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
            )}

            {/* Overlay and white background for larger screens */}
            {!isMobile && (
                <div className="banner-block absolute top-0 left-0 right-0 bottom-0 bg-[#00000090] text-white text-center flex items-center">
                    <div className="container mx-auto">
                        <div>
                            <h4 className="text-3xl font-medium mb-8">BCabs Ride Easy...<span className='bg-red-300'>24x7 Taxi Service</span></h4>
                            <TypingComponent fontColor="text-white" fontSize="4xl"></TypingComponent>


                            <h4 className="text-3xl font-medium mb-8 w-full lg:w-2/4 mx-auto">Kerala's Most Trusted & Largest Taxi Cab Operator</h4>
                            <h4 className="text-3xl font-medium mb-2"><span className="text-red-600">1000+</span> 5 Star reviews</h4>
                            <h4 className="text-3xl font-medium"><span className="text-red-600">18000+</span> regular customers</h4>
                            <div className='flex justify-center mt-8'>
                                <Link href='/book-now' className='py-2 px-3 border border-red-500 text-2xl bg-red-500 lg:px-6 lg:py-2 mr-2 rounded-md text-white inline-block hover:bg-red-500 hover:border-red-500 cursor-pointer'>
                                    Book Now!
                                </Link>
                                <Link href='https://wa.me/919895118877?text=Just%20visited%20www.bcabs.com,%20would%20like%20to%20get%20a%20quote?' className='py-2 px-3 border border-black-500 text-2xl lg:px-6 lg:py-2 rounded-md text-black-500 inline-block hover:bg-black-500 hover:text-white cursor-pointer'>
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
            )}
            
            <svg
                className='absolute left-0 right-0 bottom-[-10px] hidden md:block' // Only display on mobile devices
                id="bigTriangleColor"
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                version="1.1"
                width="100%"
                height="100"
                viewBox="0 0 100 102"
                preserveAspectRatio="none"
            >
                <path d="M0 30 L50 90 L100 30 V100 H0"></path>
            </svg>

        </div>
    );
};

export default BannerSlider;
