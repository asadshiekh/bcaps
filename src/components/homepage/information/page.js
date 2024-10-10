import Link from 'next/link'
import Image from 'next/image'

export default function Information() {
    return (
        <>

<div className="container mx-auto my-10 p-4">
      <div className="flex flex-col md:flex-row items-center justify-between bg-white  overflow-hidden">
        {/* Left Side - Image */}
        <div className="md:w-1/2">
          <Image
            src="/images/assets/kerala-tour-package.png" // Update with your actual image path
            alt="Kerala Tour"
            width={500} // Set the desired width
            height={300} // Set the desired height
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right Side - Text and Button */}
        <div className="md:w-1/2 p-3 lg:p-6 flex flex-col">
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
               Travelling to Kerala?
          </h2>
          <p className="mb-6  text-center md:text-left">
           whether you are travelling for business, pleasure or anything else; BCabs will have the perfect taxi for your journey to Kerala .
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              href="/kochi-taxi-rates" // Update the link to your actual tariff page
              className="inline-block bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200"
            >
              Explore our Kerala Tour Taxi Tariff
            </Link>
          </div>
        </div>
      </div>
    </div> 

      
        </>
    );
  }