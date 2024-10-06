import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div className="container mx-auto text-center py-4 px-4 sm:px-6 md:px-8">
        <h4 className="mb-5 text-2xl sm:text-3xl md:text-4xl font-medium">
          Welcome! This is <span className="text-red-500">BCabs Ride Easy...</span>
        </h4>
        <h4 className="mb-6 text-xl sm:text-2xl md:text-3xl font-medium">
          Kerala's Most Trusted and Largest Taxi Cab Operator
        </h4>
        <p className="w-full sm:w-3/4 mx-auto mb-5 text-sm sm:text-base md:text-lg">
          B-Cabs, started in 2009; is the first and largest professional Taxi - Cab service of Kochi (Cochin) having a fleet of well-maintained and periodically reviewed vehicles ranging from Suzuki Dzire to Mercedes Benz S-Class including luxury coaches. Currently, BCabs has services at all airports and major cities of Kerala.
        </p>
        <p className="mb-7 text-sm sm:text-base md:text-lg">
          BTransport Solutions Private Limited. A synonym in transport solutions.
        </p>
        <Link href='/login' className='border border-red bg-red-500 px-6 py-2 rounded-md text-white inline-block hover:bg-red-500 hover:border-red-500 cursor-pointer'>
          Book Now!
        </Link>
    </div>
  )
}

export default About;
