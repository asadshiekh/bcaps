import React from 'react'
import Header from '../global/header'
import Link from 'next/link'
import GalleryCard from '../global/gallery-card'
import { FaChevronRight } from "react-icons/fa6";
import Footer from '../global/footer';

const Fleet = () => {
  return (
    <div>
        <Header />
        <div className="contact-banner border border-b-2 h-[383px] overflow-hidden relative">
            <video preload="auto" autoplay="" muted="" playsinline="" className="w-full scale-11">
                <source src="/video/kochi-city-taxi-fleet2.mp4" type="video/mp4"></source>
            </video>
            <div className="banner-block absolute top-0 left-0 right-0 bottom-0 bg-[#0000004f] text-white text-center flex items-center">
                <div className="container mx-auto">
                    <div>
                        <h4 className="text-4xl font-semibold mb-4">Fleet : Kochi General City Cab Fleet</h4>
                        <p className="text-gray-300 mb-4">We have a combined fleet strength of 750+ vehicles</p>
                    </div>
                    <div>
                        <ul className="flex space-x-3 text-gray-300 justify-center">
                            <li><Link href="#">Home</Link></li>
                            <li>/</li>
                            <li><Link href="#">Fleet</Link></li>
                            <li>/</li>
                            <li><Link href="#">General Fleet</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* Gallery Cards */}
        <div className="cars-gallery py-10">
            <div className="container mx-auto">
                <div className="grid grid-cols-3 gap-5">

                    <GalleryCard cat="sedan" title="Suzuki Dzire" des="One of the most sought out car for Kochi City Travel and Kerala Tour Packages alike, this is an ideal & compact sedan for cruising through the landscapes and beaches of Kerala for you and your family." seats="5" miles="680-915mm" luggage="1 Large Suitcase + 1 Traveller Bag"/>
                    <GalleryCard cat="sedan" title="Suzuki Dzire" des="One of the most sought out car for Kochi City Travel and Kerala Tour Packages alike, this is an ideal & compact sedan for cruising through the landscapes and beaches of Kerala for you and your family." seats="5" miles="680-915mm" luggage="1 Large Suitcase + 1 Traveller Bag"/>
                    <GalleryCard cat="sedan" title="Suzuki Dzire" des="One of the most sought out car for Kochi City Travel and Kerala Tour Packages alike, this is an ideal & compact sedan for cruising through the landscapes and beaches of Kerala for you and your family." seats="5" miles="680-915mm" luggage="1 Large Suitcase + 1 Traveller Bag"/>
                    <GalleryCard cat="sedan" title="Suzuki Dzire" des="One of the most sought out car for Kochi City Travel and Kerala Tour Packages alike, this is an ideal & compact sedan for cruising through the landscapes and beaches of Kerala for you and your family." seats="5" miles="680-915mm" luggage="1 Large Suitcase + 1 Traveller Bag"/>
                    <GalleryCard cat="sedan" title="Suzuki Dzire" des="One of the most sought out car for Kochi City Travel and Kerala Tour Packages alike, this is an ideal & compact sedan for cruising through the landscapes and beaches of Kerala for you and your family." seats="5" miles="680-915mm" luggage="1 Large Suitcase + 1 Traveller Bag"/>
                    <GalleryCard cat="sedan" title="Suzuki Dzire" des="One of the most sought out car for Kochi City Travel and Kerala Tour Packages alike, this is an ideal & compact sedan for cruising through the landscapes and beaches of Kerala for you and your family." seats="5" miles="680-915mm" luggage="1 Large Suitcase + 1 Traveller Bag"/>
                
                </div>
            </div>
        </div>

        {/* Featured car */}
        <div className="featured-car mt-10">
            <div className="container mx-auto bg-[#003458] p-20 text-white rounded-md">
                <div className="grid grid-cols-2 gap-20">
                    <div>
                        <h4 className="text-3xl mb-5 font-semibold">Luxury Coach Rental</h4>
                        <p className="mb-5 text-gray-100">If you are looking for a comfortable and convenient way to travel with your group to Kerala, look no further than BCabs Traveller and Bus rental service at Kochi. We offer a range of coaches that can accommodate from 12 to 50 passengers, all equipped with modern amenities and safety features. Whether you need a coach for a corporate event, a wedding, a sightseeing tour, or any other occasion, we can provide you with the best option for your needs and budget.</p>
                        <Link href="" className="font-semibold">Visit our Coaches fleet page for more information <FaChevronRight className="inline-block" /></Link>
                    </div>
                    <div>
                    <img src='/images/assets/kochi-bus-rental.jpg' alt='logo' className='w-full' />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                    <div>
                        <h4 className="font-semibold">Executive Force AC Travellers</h4>
                        <p className="text-gray-200">Force Traveller is India's most sought after people mover; it comes in 12,17 and 26 Seater configuration; we have a large fleet of the same operating out of Kochi, Trivandrum and Kozhikode</p>
                    </div>
                    <div>
                        <h4 className="font-semibold">Luxury Force AC Travellers</h4>
                        <p className="text-gray-200">Apart from the Executive segment, we are the only Taxi operator in Kochi having customised luxury Force Travellers in the seating configuration of 8,10 and 14 which commands luxrious seats and enhanced leg space</p>
                    </div>
                    <div>
                        <h4 className="font-semibold">Mercedes Benz Luxury AC Coach</h4>
                        <p className="text-gray-200">Our BCabs Kochi depot has a range of Mercedes Benz luxury coaches, with a seating capacity of either 35 Seats or 45 Seats, these vehicles are not only luxury but are equipped with modern amenities and safety features.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold">AC Air Bus</h4>
                        <p className="text-gray-200">If you are looking for a comfortable and economical way to travel in Kerala with a large group of people, you might want to consider our range of Air Buses having seating capacity from 30 to 50 Seater.</p>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Featured car */}
        <div className="featured-car mt-10 mb-20">
            <div className="container mx-auto bg-gray-200 p-20 rounded-md">
                <div className="grid grid-cols-2 gap-20">  
                    <div>
                    <img src='/images/assets/bcabs-kochi-cabs.jpg' alt='logo' className='w-full' />
                    </div>
                    <div>
                        <h4 className="text-3xl mb-5 font-semibold">Corporate Transport Soloutions</h4>
                        <p className="mb-5 text-gray-700">Does your company or organization use B-Cabs Ride Easy... regularly in Kerala? Look into the benefits of a B-Cabs Corporate Account.</p>
                        <Link href="" className="font-semibold text-blue-500">Call our hotline now! <FaChevronRight className="inline-block" /></Link>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    <div>
                        <h4 className="font-semibold">Branding</h4>
                        <p className="text-gray-700">We provide vehicles on yearly contract basis by branding it with your logo and uniform enhancing you brand visiblity. At present we cater on a similiar bais to various hotels, hospitals and corporates. Some of our clients in this sector are BCPL, KTDC etc..</p>
                    </div>
                    <div>
                        <h4 className="font-semibold">Corporate Transportation Packages</h4>
                        <p className="text-gray-700">Our expert transportation coordinators shall collect your requirements to create a custom package for your organisation. This ensures all of your needs are met. No organisation is too large or too small for our reliable and experienced transportation services!</p>
                    </div>
                    <div>
                        <h4 className="font-semibold">Group/Event Transportation</h4>
                        <p className="text-gray-700">Whether your group is 1 or 50,000, we handle all of your event's transportation logistics so you won't have to worry! BCabs have been providing reliable large group transportation services for events including Conferences, Conventions, Expos, Trade Shows and more in and around Cochin City!</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Fleet