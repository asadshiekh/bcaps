// src/app/components/FullWidthVideoSection.jsx

import Image from 'next/image';
import Link from 'next/link';

const FullWidthVideoSection = () => {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/videos/messiermarathon.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50 text-white text-center px-4">
        <h2 className="text-3xl font-bold md:text-4xl">Travelling to Kerala?</h2>
        <p className="text-md md:text-2xl text-gray-200 my-8">
        whether you are travelling for business, pleasure or anything else;
        <br/> BCabs will have the perfect taxi for your journey to Kerala 
        </p>
        <div className="mt-4 flex space-x-4">
          <Link href="https://wa.me/919895118877?text=Just%20visited%20www.bcabs.com,%20would%20like%20to%20get%20a%20quote?" className="px-6 py-2 bg-transparent border-white border text-white text-xl rounded-md hover:bg-white hover:text-black">
            Get a Quote
          </Link>
          <Link href="/book-now" className="px-6 py-2 bg-transparent border-white border rounded-md text-xl hover:bg-white hover:text-black">
            Book Now
          </Link>

        </div>
      </div>
    </section>
  );
};

export default FullWidthVideoSection;
