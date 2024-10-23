import Link from 'next/link'
import Image from 'next/image'

export default function Information() {
    return (
        <>
<section className='bg-[#2A2E33]'>
<div className="container mx-auto mb-10 p-4">
      <div className="flex flex-col md:flex-row items-center justify-between   overflow-hidden">
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
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left text-white">
               Travelling to Kerala?
          </h2>
          <p className="mb-6  text-center md:text-left text-white">
          Kerala is renowned for its breathtaking backwaters, hills, captivating wildlife and vibrant cultural heritage. To explore this enchanting paradise it's essential to have an comfortable taxi service that can effortlessly transport you to Kerala's destinations. That's where BCabs Kerala Tour Package Taxi comes in – as the leading provider of taxi services in Kerala. We offer tailored and affordable taxi packages that cater to all your travel requirements. Whether you have your heart set on visiting Munnar, Thekkady, Alleppey, Kovalam or any other place in Kerala we have the taxi package designed for you. With a fleet of maintained vehicles ranging from sedans, MUVs, to luxury coaches and our team of professional and courteous drivers at your disposal we guarantee a seamless and secure journey. Don't miss out on experiencing the allure and magnificence of Kerala. Book your BCabs for your Kerala Tour Package today!

          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              href="/kochi-taxi-rates" // Update the link to your actual tariff page
              className="inline-block bg-[#ed2124] text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200"
            >
              Explore our Kerala Tour Taxi Tariff
            </Link>
          </div>
        </div>
      </div>
    </div> 
</section>


      
        </>
    );
  }