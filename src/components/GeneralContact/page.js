import Link from 'next/link'
import React from 'react'
import Header from '../global/header'
import { GrFacebookOption } from "react-icons/gr";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const GeneralContact = () => {
  return (
    <div>
        <Header />
        <div className="contact-banner border border-b-2 py-10">
            <div className="container mx-auto">
                <div className="block md:flex items-center justify-between">
                    <div>
                        <h4 className="text-4xl font-semibold">Contact</h4>
                        <p className="text-gray-500">Get In Touch With Us</p>
                    </div>
                    <div>
                        <ul className="flex space-x-3 text-gray-500">
                            <li><Link href="#">Home</Link></li>
                            <li>/</li>
                            <li><Link href="#">Contact</Link></li>
                            <li>/</li>
                            <li><Link href="#">General Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        {/* contact form */}

        <div className="contact-form py-10 mt-8">
            <div className="container mx-auto">
                <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-gray-200 p-3 flex items-center justify-center rounded-md">
                        <div>
                            <p>Corporate Office:<br/>
                            <strong>BTransport Solutions Private Limited</strong><br/>
                            PRA-167, Pallissery Rd, Palarivattom<br/>
                            Kochi, Kerala 682025, India</p>
                            <div className="border border-1 border-gray-900 my-5"/>
                            <ul className="flex space-x-3">
                                <li><Link href="/" className="bg-white flex p-2 rounded-md"><GrFacebookOption/></Link></li>
                                <li><Link href="/" className="bg-white flex p-2 rounded-md"><FaPinterestP/></Link></li>
                                <li><Link href="/" className="bg-white flex p-2 rounded-md"><FaTwitter/></Link></li>
                                <li><Link href="/" className="bg-white flex p-2 rounded-md"><FaYoutube/></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-3xl mb-3">General Contact</h4>
                        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-2 mb-5">
                            <div>
                                <label>Name*:</label>
                                <input type="text" placeholder="" className="w-full p-2 border border-2 rounded-md"/>
                            </div>
                            <div>
                                <label>Email*:</label>
                                <input type="text" placeholder="" className="w-full p-2 border border-2 rounded-md"/>
                            </div>
                            <div>
                                <label>Phone:</label>
                                <input type="text" placeholder="" className="w-full p-2 border border-2 rounded-md"/>
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-2 mb-5">
                            <div>
                                <label>Subject*:</label>
                                <input type="text" placeholder="" className="w-full p-2 border border-2 rounded-md"/>
                            </div>
                            <div>
                                <label>Department*:</label>
                                <select className="w-full p-2 border border-2 rounded-md">
                                    <option value="Sales">Sales</option>
                                    <option value="Admin">Admin</option>
                                    <option value="Admin">Accounts</option>
                                    <option value="Admin">Marketing</option>
                                    <option value="Admin">Human Resource</option>
                                    <option value="Admin">Vehicle Attachment</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-5">
                            <label>Message*:</label>
                            <textarea rows="4" className="w-full p-2 border border-2 rounded-md"></textarea>
                        </div>
                        <Link href='/login' className='border border-red bg-red-500 px-6 py-2 rounded-md text-white inline-block hover:bg-red-500 hover:border-red-500 cursor-pointer'>Submit</Link>
                    </div>
                </div>
            </div>
        </div>

        {/* contact types */}

        <div className="contact-types py-10">
            <div className="container mx-auto">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    <div className="contact-box relative border border-1 w-full px-3 py-8 text-center">
                        <IoMailOutline className="bg-white text-red-500 text-4xl absolute top-[-15%] left-[45%]"/>
                        <h4 className="font-semibold">Mail us on</h4>
                        <p>bcabs@bintel.com</p>
                    </div>
                    <div className="contact-box relative border border-1 w-full px-3 py-8 text-center">
                        <FaPhone className="bg-white text-red-500 text-4xl absolute top-[-15%] left-[45%]"/>
                        <h4 className="font-semibold">24x7 Taxi Hotline</h4>
                        <p>(+91) 9895 11 88 77</p>
                    </div>
                    <div className="contact-box relative border border-1 w-full px-3 py-8 text-center">
                        <FaGoogle className="bg-white text-red-500 text-4xl absolute top-[-15%] left-[45%]"/>
                        <h4 className="font-semibold">Visit Us</h4>
                        <p>On Google</p>
                    </div>
                    <div className="contact-box relative border border-1 w-full px-3 py-8 text-center">
                        <FaWhatsapp className="bg-white text-red-500 text-4xl absolute top-[-15%] left-[45%]"/>
                        <h4 className="font-semibold">Connect with us</h4>
                        <p>on Whatsapp</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GeneralContact