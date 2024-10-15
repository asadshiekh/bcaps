import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image'; // Assuming you're using Next.js
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
    "/images/assets/slider-car-1.jpg",
    "/images/assets/slider-car-2.jpg",
    "/images/assets/slider-car-3.jpg",
];

const BasicSlider = () => {
    // Slider settings for customization
    const sliderSettings = {
        dots: true,              // Show navigation dots
        infinite: true,          // Infinite loop
        speed: 500,              // Transition speed
        slidesToShow: 1,         // Show one slide at a time
        slidesToScroll: 1,       // Scroll one slide at a time
        autoplay: true,          // Auto slides
        autoplaySpeed: 3000,     // Slide interval 3 seconds
        arrows: true,            // Show left and right arrows
        appendDots: (dots) => (
            <div style={{ position: 'absolute', top: '10px', left: '5px', zIndex: 10 }}> {/* Positioning to the left corner */}
                <ul style={{ margin: '0', padding: '0', display: 'flex', listStyleType: 'none' }}>
                    {React.Children.map(dots, (dot) => (
                        <li style={{ margin: '0 2px' }}> {/* Reduce space between dots */}
                            {dot}
                        </li>
                    ))}
                </ul>
            </div>
        ),
        customPaging: () => (
            <div style={{
                width: '8px',  // Size of the dot
                height: '8px',
                borderRadius: '50%', // Make dots circular
                background: 'white', // Dot color
                cursor: 'pointer',
            }} />
        )
    };

    return (
        <div className="slider-container block lg:hidden relative"> {/* Display on mobile only */}
            <Slider {...sliderSettings}>
                {images.map((img, index) => (
                    <div key={index} className="w-full h-[300px] relative"> {/* Set the dimensions for the slide */}
                        <Image
                            src={img}
                            alt={`Slide ${index + 1}`}
                            layout="fill" // Use layout fill to make the image fill the parent container
                            className="object-cover" // Ensures the image covers the container while maintaining aspect ratio
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default BasicSlider;
