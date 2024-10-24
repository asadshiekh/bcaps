"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCheck } from "react-icons/fa6";
import BasicSlider from '../BasicSlider/page';
import TypingComponent from '../TypingComponent/page';
import { FaStar } from 'react-icons/fa'; // Import the star icon
import RatingList from '../RatingList/page';
import { FaWhatsapp } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import RatingList1 from '../RatingList1/page';


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
                 src='/images/assets/slider1mian.png' 
                 alt='BCabs Kochi' 
                 width={1920} // Set the original image width
                 height={650} // Set the original image height
                 className="w-full h-[950px] lg:h-[700px] object-cover hidden md:block" 
                 sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw" // Adjust sizes based on viewport
                 priority // Optional: only if this image is crucial for the initial load
             />
            )}
            
            {/* White background section for mobile */}
            {isMobile && (
                <div className="w-full h-[1100px] lg:h-[650px] bg-white flex items-center pt-[60px] lg:pt-[150px]  md:pt-0 border-b border-gray-300">
                    <div className="container mx-auto text-center">
                        <h4 className="text-xl md:text-3xl font-medium mb-8">BCabs Ride Easy...<span className='bg-red-300'>24x7 Taxi Service</span></h4>

                        <BasicSlider></BasicSlider>

                        <div className=' mt-5'>
                            <TypingComponent fontColor="text-black" fontSize="3xl"></TypingComponent>
                        </div>


                        <h4 className="text-2xl md:text-2xl font-medium mb-8 w-full lg:w-2/4 mx-auto">Kerala&apos;s Most Trusted <br /> & Largest Taxi Cab Operator</h4>
                        <h4 className="text-2xl md:text-2xl font-medium mb-2"><span className="text-red-600">1000+</span> 5 Star reviews</h4>
                        <h4 className="text-2xl md:text-2xl font-medium"><span className="text-red-600">18000+</span> regular customers</h4>
                        <div className='flex justify-center mt-8 space-x-2'> {/* Added space-x-2 for spacing between buttons */}
                            <Link href='/book-now' 
                                className='py-2 px-3 border border-[#ed2124] text-xl bg-[#ed2124] lg:px-6 lg:py-2 rounded-md text-white inline-block hover:bg-[#ed2124] hover:border-[#ed2124] cursor-pointer'
                            >
                                Book Now!
                            </Link>
                            <Link  href='https://wa.me/919895118877?text=Just%20visited%20www.bcabs.com,%20would%20like%20to%20get%20a%20quote?' 
                                className='py-2 px-3 border border-black text-xl lg:px-6 lg:py-2 rounded-md text-black inline-block hover:bg-black hover:text-white cursor-pointer'
                            >
                                Get a Quote
                            </Link>
                        </div>
                        <ul className='flex flex-wrap items-center justify-center text-[13px] space-x-4  md:space-x-10 text-medium mt-10 text-center px-2'>
                            <li className='flex items-center mb-2'><FaCheck className='inline-block mr-3'/> On-Time</li>
                            <li className='flex items-center mb-2'><FaCheck className='inline-block mr-3'/> Reliable</li> 
                            <li className='flex items-center mb-2'><FaCheck className='inline-block mr-3'/> Guaranteed Satisfaction</li> 
                            <li className='flex items-center mb-2'><FaCheck className='inline-block mr-3'/> 15+ Years in service</li>
                        </ul>

                        <p className='flex justify-center baseline  text-center my-5 px-[20px] text-[14px] ml-[20px]'>
                            <FaStar style={{ color: 'orange', fontSize: '25px' }}/> 
                            Consistently received 5-Star on Google, Facebook & Tripadvisor
                        </p>
                           
                        <RatingList1></RatingList1>

                    </div>
                </div>
            )}

            {/* Overlay and white background for larger screens */}
            {!isMobile && (
                <div className="banner-block absolute top-0 left-0 right-0 bottom-0  text-black text-center flex items-center pt-[70px]">
                    <div className="container mx-auto">
                        <div>
                            <h4 className="text-2xl font-medium mb-6 text-black">BCabs Ride Easy...<span className='bg-red-300'>24x7 Taxi Service</span></h4>
                            <TypingComponent fontColor="text-black" fontSize="4xl"></TypingComponent>
                            <h4 className="text-2xl font-medium mb-6 w-full lg:w-2/4 mx-auto text-black">Kerala&apos;s <b className='text-black'>Most Trusted <br /> & Largest</b> Taxi Cab Operator</h4>
                            <h4 className="text-2xl font-medium mb-2 text-black"><span className="text-red-600">1000+</span> 5 Star reviews</h4>
                            <h4 className="text-2xl font-medium"><span className="text-red-600">18000+</span> regular customers</h4>
                            <div className='flex justify-center mt-8'>
                                <Link href='/book-now' className='py-2 px-3 font-bold border border-[#ed2124] text-lg bg-[#ed2124] lg:px-6 lg:py-2 mr-2 rounded-md text-white inline-block hover:bg-primary hover:border-[#ed2124] cursor-pointer flex items-center'>
                                    <FaCar className='mr-1'/> Book Now!
                                </Link>
                                <Link href='https://wa.me/919895118877?text=Just%20visited%20www.bcabs.com,%20would%20like%20to%20get%20a%20quote?' className='font-bold py-2 px-3 border-[1px] border-black text-lg lg:px-6 lg:py-2 rounded-md text-black-500 inline-block hover:boder-[1px] hover:border-[#ed2124]  hover:bg-[#ed2124] hover:text-white cursor-pointer flex items-center'>
                                <FaWhatsapp className='mr-1' /> Get a Quote
                                </Link>
                            </div>
                            <ul className='flex align-center justify-center space-x-10 text-medium mt-10'>
                                <li className='text-[14px]'><FaCheck className='inline-block'/> On-Time</li>
                                <li className='text-[14px]'><FaCheck className='inline-block'/> Reliable</li> 
                                <li className='text-[14px]'><FaCheck className='inline-block'/> Guaranteed Satisfaction</li> 
                
                                <li className='text-[14px]'><FaCheck className='inline-block'/> 15+ Years in service</li>
                            </ul>

                            <p className='flex justify-center items-center my-5'> <FaStar style={{ color: 'orange', fontSize: '14px' }} className='mr-2'/> Consistently reviewed 5-Star on Google, Facebook & Tripadvisor</p>
                           
                            <RatingList></RatingList>

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
