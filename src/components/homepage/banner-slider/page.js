// src/components/BannerSlider.js
"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

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
        <div className="relative h-screen overflow-hidden flex">
            {/* Left Part */}
            <div className="relative w-1/3 flex flex-col items-center justify-center overflow-hidden">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className="absolute top-0 left-0 w-full h-full bg-cover"
                        style={{
                            backgroundImage: `url(${src})`,
                            transform: `translateY(${scrollPosition * 0.2 * (index + 1)}px)`, // Adjust the multiplier for speed
                            zIndex: -index, // Adjust the stacking of images
                        }}
                    >
                        <div className="bg-black bg-opacity-50 h-full"></div>
                    </div>
                ))}
            </div>

            {/* Middle Part */}
            <div className="relative flex flex-col items-center justify-center w-1/3">
                <h1 className="text-white text-4xl font-bold">Welcome to Our Parallax Page</h1>
                <p className="text-white mt-4">Here is some static information about our services.</p>
            </div>

            {/* Right Part */}
            <div className="relative w-1/3 flex flex-col items-center justify-center overflow-hidden">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className="absolute top-0 left-0 w-full h-full bg-cover"
                        style={{
                            backgroundImage: `url(${src})`,
                            transform: `translateY(${scrollPosition * 0.2 * (index + 1)}px)`, // Adjust the multiplier for speed
                            zIndex: -index, // Adjust the stacking of images
                        }}
                    >
                        <div className="bg-black bg-opacity-50 h-full"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BannerSlider;
