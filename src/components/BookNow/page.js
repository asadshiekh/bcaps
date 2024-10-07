'use client';
import React from 'react'
import Header from '../global/header'
import Link from 'next/link'
import { useState } from 'react';

const BookNow = () => {
    const [showInput, setShowInput] = useState(false);
    const setShowInputFunc = (value) => {
        setShowInput(value);
    };
  return (
    <div>
        <Header />
        <div className="contact-banner border border-b-2 py-10">
            <div className="container mx-auto">
                <div className="block md:flex items-center justify-between">
                    <div>
                        <h4 className="text-4xl font-semibold">Book your BCabs in Kerala now!</h4>
                    </div>
                    <div>
                        <ul className="flex space-x-3 text-gray-500">
                            <li><Link href="#">Home</Link></li>
                            <li>/</li>
                            <li><Link href="#">Contact</Link></li>
                            <li>/</li>
                            <li><Link href="#">Book Now</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        {/* contact form */}

        <div className="contact-form py-10 mt-8">
            <div className="container mx-auto">
                <div className="w-2/4">
                    <div>
                        <h4 className="text-3xl mb-3">General Contact</h4>
                        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-2 mb-5">
                            <div>
                                <label>Name*:</label>
                                <input type="text" placeholder="" className="w-full p-2 border border-2 rounded-md"/>
                            </div>
                            <div>
                                <label>Email*:</label>
                                <input type="text" placeholder="" className="w-full p-2 border border-2 rounded-md"/>
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-2 mb-5">
                            
                            <div>
                                <label>Phone:</label>
                                <input type="text" placeholder="" className="w-full p-2 border border-2 rounded-md"/>
                            </div>
                            <div>
                                <div className="p-4 max-w-md mx-auto">
                                    <h2 className="text-lg font-medium mb-4">Is this your WhatsApp number?</h2>

                                    {/* Radio buttons */}
                                    <div className="flex items-center mb-4">
                                        <label className="flex items-center">
                                            <input
                                                type="radio"
                                                name="whatsapp"
                                                value="yes"
                                                onChange={() => setShowInputFunc('yes')}
                                                className="mr-2"
                                            />
                                            Yes
                                        </label>
                                        <label className="flex items-center ml-4">
                                            <input
                                                type="radio"
                                                name="whatsapp"
                                                value="no"
                                                onChange={() => setShowInputFunc('no')}
                                                className="mr-2"
                                            />
                                            No
                                        </label>
                                    </div>

                                    {/* Conditional WhatsApp number input field */}
                                    
                                    {showInput && (
                                        <div>
                                            <label className="block mb-2 text-sm font-medium">WhatsApp Number</label>
                                            <input
                                                type="text"
                                                placeholder="Enter your WhatsApp number"
                                                className="px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    )}
                                    {/* <label>Is this your whatsapp number?</label>
                                    <div className="flex">
                                    <input type="radio" placeholder="" id="yes" name="whatsapp" className="w-full p-2 border border-2 rounded-md"/>
                                    <label for="yes">Yes</label>
                                    <input type="radio" placeholder="" id="no" name="whatsapp" className="w-full p-2 border border-2 rounded-md"/>
                                    <label for="no">No</label>
                                    </div> */}
                                </div>
                                
                            </div>
                        </div>
                        <div className="mb-5">
                            <label>Pickup Date and Time*:</label>
                            <input type="date" className="w-full p-2 border border-2 rounded-md"/>
                            {/* <textarea rows="4" className="w-full p-2 border border-2 rounded-md"></textarea> */}
                        </div>
                        <div className="mb-5">
                            <label>Vehicle Type*:</label>
                            <select className="w-full p-2 border border-2 rounded-md">
                                <option value="Sedan" selected="">Sedan</option>
                                <option value="Compact MUV - Ertiga">Compact MUV - Ertiga</option>
                                <option value="MUV - Innova/Marrazo">MUV - Innova/Marrazo</option>
                                <option value="Premium MUV - Crysta">Premium MUV - Crysta</option>
                                <option value="Ultra Luxury MUV - Hycross">Ultra Luxury MUV - Hycross</option>
                                <option value="Executive Traveller">Executive Traveller</option>
                                <option value="Premium Traveller">Premium Traveller</option>
                                <option value="Luxury Traveller">Luxury Traveller</option>
                                <option value="Luxury Bus - 35Seater">Luxury Bus - 35Seater</option>
                                <option value="Luxury Bus - 45Seater">Luxury Bus - 45Seater</option>
                                <option value="Premium Vehicles">Premium Vehicles</option>
                                <option value="Special Vehicles">Special Vehicles</option>
                            </select>
                        </div>
                        <div className="mb-5">
                            <label>Trip Type*:</label>
                            <select className="w-full p-2 border border-2 rounded-md">
                                <option></option>
                                <option>City Travel</option>
                                <option value="airport-pickup">Pickup from Airport</option>
                                <option value="airport-drop">Drop to Airport</option>
                                <option>Drop Only</option>
                                <option>Outstation Trip</option>
                                <option>Sabarimala Package</option>
                                <option value="package">Multi Day Package</option>
                            </select>
                        </div>
                        <div className="mb-5 bg-gray-200 p-4 border border-2 border-gray-300 rounded-md">
                            <p>We shall connect with you and convey the complete tariff prior to confirming the booking</p>
                        </div>
                        <Link href='/login' className='border border-red bg-red-500 px-6 py-2 rounded-md text-white inline-block hover:bg-red-500 hover:border-red-500 cursor-pointer'>Reserve Now</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookNow