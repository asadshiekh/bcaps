"use client"; // Add this directive at the top of your component

import Link from 'next/link'
import React, { useState } from 'react'; // Import useState for managing form state
import Header from '../global/header'
import { GrFacebookOption } from "react-icons/gr";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Footer from '../global/footer';

const GeneralContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    department: 'Sales',
    message: ''
  });

  const [status, setStatus] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Email sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          department: 'Sales',
          message: ''
        });
      } else {
        const errorData = await response.json();
        setStatus(errorData.message || 'Error sending email. Please try again.');
      }
    } catch (error) {
      setStatus('Error sending email. Please try again.');
    }
  };

  return (
    <div>
        <Header />
        <div className="contact-banner border border-b-2 px-4 lg:px-0 pt-[150px] pb-[70px]">
            <div className="container mx-auto">
                <div className="block md:flex items-center justify-between">
                    <div>
                        <h4 className="text-2xl md:text-4xl font-semibold">Contact</h4>
                        <p className="text-gray-500">Get In Touch With Us</p>
                    </div>
                    <div>
                        <ul className="flex space-x-3 text-gray-500 mt-5">
                            <li><Link href="/" className='hover:text-gray-700'>Home</Link></li>
                            <li>/</li>
                            <li><Link href="/general-contact" className='hover:text-gray-700'>Contact</Link></li>
                            <li>/</li>
                            <li><Link href="/general-contact" className='hover:text-gray-700'>General Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        {/* contact form */}

        <div className="contact-form py-10 mt-8 px-4">
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
                                <li><Link href="https://www.facebook.com/bcabs/" target="_blank" className="bg-white flex p-2 rounded-md"><GrFacebookOption/></Link></li>
                                <li><Link href="https://in.pinterest.com/bcabsrideeasy/" target="_blank" className="bg-white flex p-2 rounded-md"><FaPinterestP/></Link></li>
                                <li><Link href="https://twitter.com/bcabsrideeasy/" target="_blank" className="bg-white flex p-2 rounded-md"><FaTwitter/></Link></li>
                                <li><Link href="https://www.youtube.com/@bcabs" target="_blank" className="bg-white flex p-2 rounded-md"><FaYoutube/></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-3xl mb-3">General Contact</h4>
                        <form onSubmit={handleSubmit}> {/* Add form onSubmit handler */}
                          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-2 mb-5">
                              <div>
                                  <label>Name*:</label>
                                  <input 
                                      type="text" 
                                      name="name" 
                                      value={formData.name} 
                                      onChange={handleChange} 
                                      placeholder="" 
                                      className="w-full p-2 border border-2 rounded-md"/>
                              </div>
                              <div>
                                  <label>Email*:</label>
                                  <input 
                                      type="email" 
                                      name="email" 
                                      value={formData.email} 
                                      onChange={handleChange} 
                                      placeholder="" 
                                      className="w-full p-2 border border-2 rounded-md"/>
                              </div>
                              <div>
                                  <label>Phone:</label>
                                  <input 
                                      type="text" 
                                      name="phone" 
                                      value={formData.phone} 
                                      onChange={handleChange} 
                                      placeholder="" 
                                      className="w-full p-2 border border-2 rounded-md"/>
                              </div>
                          </div>
                          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-2 mb-5">
                              <div>
                                  <label>Subject*:</label>
                                  <input 
                                      type="text" 
                                      name="subject" 
                                      value={formData.subject} 
                                      onChange={handleChange} 
                                      placeholder="" 
                                      className="w-full p-2 border border-2 rounded-md"/>
                              </div>
                              <div>
                                  <label>Department*:</label>
                                  <select 
                                      name="department" 
                                      value={formData.department} 
                                      onChange={handleChange} 
                                      className="w-full p-2 border border-2 rounded-md">
                                      <option value="Sales">Sales</option>
                                      <option value="Admin">Admin</option>
                                      <option value="Accounts">Accounts</option>
                                      <option value="Marketing">Marketing</option>
                                      <option value="Human Resource">Human Resource</option>
                                      <option value="Vehicle Attachment">Vehicle Attachment</option>
                                  </select>
                              </div>
                          </div>
                          <div className="mb-5">
                              <label>Message*:</label>
                              <textarea 
                                  name="message" 
                                  value={formData.message} 
                                  onChange={handleChange} 
                                  rows="4" 
                                  className="w-full p-2 border border-2 rounded-md"></textarea>
                          </div>
                          <button type="submit" className='border border-red bg-[#ed2124] px-6 py-2 rounded-md text-white inline-block hover:bg-[#ed2124] hover:border-[#ed2124] cursor-pointer'>
                            Submit
                          </button>
                          {status && <p className="mt-3 text-[#ed2124]">{status}</p>} {/* Display status message */}
                        </form>
                    </div>
                </div>
            </div>
        </div>

        {/* contact types */}

        <div className="contact-types py-10 px-4">
            <div className="container mx-auto">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    <div className="contact-box relative border border-1 w-full px-3 py-8 text-center">
                        <Link href="mailto:bcabs@bintel.com">
                          <IoMailOutline className="bg-white text-[#ed2124] text-4xl absolute top-[-15%] left-[45%]"/>
                        </Link>
                        <h4 className="font-semibold">Mail us on</h4>
                        <p>bcabs@bintel.com</p>
                    </div>
                    <div className="contact-box relative border border-1 w-full px-3 py-8 text-center">
                    <Link href="tel:+919895118877">
                        <FaPhone className="bg-white text-[#ed2124] text-4xl absolute top-[-15%] left-[45%]"/>
                        </Link>
                        <h4 className="font-semibold">24x7 Taxi Hotline</h4>
                        <p>(+91) 9895 11 88 77</p>
                    </div>
                    <div className="contact-box relative border border-1 w-full px-3 py-8 text-center">
                    <Link href="https://maps.app.goo.gl/yHhNHxfk6uctkh7z6" target="_blank">
                        <FaGoogle className="bg-white text-[#ed2124] text-4xl absolute top-[-15%] left-[45%]"/>
                        </Link>
                        <h4 className="font-semibold">Visit Us</h4>
                        <p>On Google</p>
                    </div>
                    <div className="contact-box relative border border-1 w-full px-3 py-8 text-center">
                        <Link href="https://wa.me/919895118877" target="_blank">
                          <FaWhatsapp className="bg-white text-[#ed2124] text-4xl absolute top-[-15%] left-[45%]"/>
                        </Link>
                        <h4 className="font-semibold">WhatsApp</h4>
                        <p>Send us a message</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
  );
};

export default GeneralContact;
