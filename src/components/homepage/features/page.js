import FeatureBox from '@/components/global/feature-box';
import React from 'react'
import { BsBuildings } from "react-icons/bs";
import { BsAirplane } from "react-icons/bs";
import { BsAppIndicator } from "react-icons/bs";
import { IoAirplaneOutline } from "react-icons/io5";
import { FaPix } from "react-icons/fa6";
import { IoBusOutline } from "react-icons/io5";
import { TbBus } from "react-icons/tb";
import { FaCarSide } from "react-icons/fa";
import { IoImageOutline } from "react-icons/io5";
import Link from 'next/link';

const Features = () => {
  return (
    <div className="container mx-auto py-20 border-t border-gray-300 px-4">
        {/* Grid layout for responsive design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Feature boxes with responsive padding */}
            <div className="feature-box flex mb-3 px-4">
                <div className="mr-3">
                    <Link href="/kochi-city-taxi">
                        <BsBuildings className="text-[#ed2124] text-3xl" />
                    </Link>                
                </div>
                <div>
                    <h4 className="text-xl font-medium mb-2">Kochi City Taxi</h4>
                    <p className="text-gray-500">Book a reliable and affordable taxi for Kochi city tours, transfers and outstation trips.</p>
                </div>
            </div>
            <div className="feature-box flex mb-3 px-4">
                <div className="mr-3">
                    <Link href="/kochi-city-taxi">
                    <BsAirplane className="text-[#ed2124] text-3xl" />
                    </Link>
                </div>
                <div>
                    <h4 className="text-xl font-medium mb-2">Kochi Airport Taxi</h4>
                    <p className="text-gray-500">Travel to and from Kochi airport (Cochin International Airport) with ease and comfort in our cabs, we have services from both Domestic and International Terminals of Cochin International Airport.</p>
                </div>
            </div>
            <div className="feature-box flex mb-3 px-4 ">
                <div className="mr-3">
                    <Link href="/kochi-city-taxi">
                    <BsAppIndicator className="text-[#ed2124] text-3xl" />
                    </Link>
                </div>
                <div>
                    <h4 className="text-xl font-medium mb-2">Sabarimala Taxi</h4>
                    <p className="text-gray-500">Enjoy a hassle-free and safe journey to Sabarimala from Cochin airport or Ernakulam city. Choose from our all-inclusive fixed Sabarimala Taxi Packages.</p>
                </div>
            </div>
            <div className="feature-box flex mb-3 px-4 ">
                <div className="mr-3">
                <Link href="/kochi-city-taxi">
                    <IoImageOutline className="text-[#ed2124] text-3xl" />
                    </Link>
                </div>
                <div>
                    <h4 className="text-xl font-medium mb-2">Kerala Tour Packages</h4>
                    <p className="text-gray-500">Explore the beauty and diversity of Kerala with our multi-day taxi packages.</p>
                </div>
            </div>
            <div className="feature-box flex mb-3 px-4">
                <div className="mr-3">
                <Link href="/kochi-city-taxi">
                    <FaCarSide className="text-[#ed2124] text-3xl" />
                    </Link>
                </div>
                <div>
                    <h4 className="text-xl font-medium mb-2">Kochi Premium Cabs</h4>
                    <p className="text-gray-500">Experience luxury and convenience with our premium cabs for your special occasions.</p>
                </div>
            </div>
            <div className="feature-box flex mb-3 px-4">
                <div className="mr-3">
                <Link href="/kochi-city-taxi">
                    <TbBus className="text-[#ed2124] text-3xl" />
                    </Link>
                </div>
                <div>
                    <h4 className="text-xl font-medium mb-2">Tempo Traveller</h4>
                    <p className="text-gray-500">Complete control on each & every element that provides endless customization possibilities.BCabs is Kerala’s premier provider of tempo traveller services, boasting an extensive fleet of Force Travellers and Force Urbanias. Our offerings include executive, premium, and luxury tempo travellers, all available in Ernakulam city and Cochin Airport.</p>
                </div>
            </div>
            <div className="feature-box flex mb-3 px-4">
                <div className="mr-3">
                <Link href="/kochi-city-taxi">
                    <IoBusOutline className="text-[#ed2124] text-3xl" />
                    </Link>
                </div>
                <div>
                    <h4 className="text-xl font-medium mb-2">Luxury Coaches and Bus</h4>
                    <p className="text-gray-500">Our reputation for prompt, reliable and courteous service makes us the top choice for all the major events and tours in Cochin.</p>
                </div>
            </div>
            <div className="feature-box flex mb-3 px-4">
                <div className="mr-3">
                <Link href="/kochi-city-taxi">
                    <FaPix className="text-[#ed2124] text-3xl" />
                    </Link>
                </div>
                <div>
                    <h4 className="text-xl font-medium mb-2">Corporate Transport Solutions</h4>
                    <p className="text-gray-500">Does your company or organization use B-Cabs Ride Easy... regularly? Look into the benefits of a B-Cabs Corporate Account.</p>
                </div>
            </div>
            <div className="feature-box flex mb-3 px-4">
                <div className="mr-3">
                     <Link href="/kochi-city-taxi">
                        <IoAirplaneOutline className="text-[#ed2124] text-3xl" />
                    </Link>
                </div>
                <div>
                    <h4 className="text-xl font-medium mb-2">Pan Kerala Network</h4>
                    <p className="text-gray-500">We have our services across major cities and at all airports in Kerala.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features;
