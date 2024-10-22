'use client';
import React, { useState } from 'react';
import Header from '../global/header';
import Link from 'next/link';
import Footer from '../global/footer';

const BookNow = () => {
  const [selectedOption, setSelectedOption] = useState('yes');
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    pickupDate: '',
    vehicleType: 'Sedan',
    tripType: '',
    numberOfPassengers: '',
    preferredModel: '',
    pickupLocation: '',
    dropLocation: '',
    airport: '',
    flightNumber: '',
    dropDate: '', // Added for multi-day package
    itinerary: ''  // Added for multi-day package
  });

  const [loading, setLoading] = useState(false); // To manage loading state
  const [message, setMessage] = useState(''); // To manage success/error message
  const [messageStyle, setMessageStyle] = useState(''); // To manage message styling

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Disable button and show loading state
    setMessage(''); // Clear previous messages

    try {
      const response = await fetch('/api/bookNow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Reservation request sent successfully!');
        setMessageStyle('bg-green-200 text-green-800'); // Green success message
        // Optionally reset the form
        setFormData({
          name: '',
          email: '',
          phone: '',
          whatsapp: '',
          pickupDate: '',
          vehicleType: 'Sedan',
          tripType: '',
          numberOfPassengers: '',
          preferredModel: '',
          pickupLocation: '',
          dropLocation: '',
          airport: '',
          flightNumber: '',
          dropDate: '',
          itinerary: ''
        });
      } else {
        setMessage('Failed to send reservation request.');
        setMessageStyle('bg-red-200 text-red-800'); // Red error message
      }
    } catch (error) {
      console.error('Error submitting the form', error);
      setMessage('An error occurred while sending the request.');
      setMessageStyle('bg-red-200 text-red-800'); // Red error message
    } finally {
      setLoading(false); // Re-enable button after response
    }
  };

  return (
    <div>
      <Header />
      <div className="contact-banner border border-b-2 px-4 pt-[150px] pb-[70px]">
        <div className="container mx-auto">
          <div className="block md:flex items-center justify-between">
            <div>
              <h4 className="text-2xl md:text-4xl font-semibold">Book your BCabs in Kerala now!</h4>
            </div>
            <div>
              <ul className="flex space-x-3 text-gray-500 mt-4">
                <li><Link href="/">Home</Link></li>
                <li>/</li>
                <li><Link href="/general-contact">Contact</Link></li>
                <li>/</li>
                <li><Link href="/book-now">Book Now</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* contact form */}
      <div className="contact-form py-10 mt-8 p-4">
        <div className="container mx-auto">
          <form onSubmit={handleSubmit} className="w-full md:w-2/4 md:pl-[30px]">
            <h4 className="text-3xl mb-3">General Contact</h4>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-2 mb-5">
              <div>
                <label>Name*:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-2 rounded-md"
                  required
                />
              </div>
              <div>
                <label>Email*:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-2 rounded-md"
                  required
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-2 mb-5">
              <div>
                <label>Phone:</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-2 rounded-md"
                />
              </div>

              <div className="p-4 md:pl-0 md:pr-4 md:py-4 lg:pl-0 lg:pr-4 lg:py-4 max-w-md mx-auto">
                <h2 className="text-lg font-medium mb-4">Is this your WhatsApp number?</h2>
                <div className="flex items-center mb-4 space-x-4">
                  <button
                    type="button"
                    className={`px-10 py-2  ${
                      selectedOption === 'yes' ? 'bg-[#6c757d] text-white border-[1px] border-transparent ' : ' text-[#6c757d] border-[1px] border-[#6c757d]'
                    }`}
                    onClick={() => handleOptionChange('yes')}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    className={`px-10 py-2 ${
                      selectedOption === 'no' ? 'bg-[#6c757d] text-white border-[1px] border-transparent' : ' text-[#6c757d] border-[1px] border-[#6c757d]'
                    }`}
                    onClick={() => handleOptionChange('no')}
                  >
                    No
                  </button>
                </div>

                {selectedOption === 'no' && (
                  <div>
                    <label className="block mb-2 text-sm font-medium">WhatsApp Number</label>
                    <input
                      type="text"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      className="px-4 py-2 border border-gray-300 rounded-lg w-full"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="mb-5">
              <label htmlFor="pickupDateTime">Pickup Date and Time*:</label>
        
              <input
                type="datetime-local"
                name="pickupDate"
                value={formData.pickupDate}
                onChange={handleInputChange}
                className="w-full p-2 border-2 rounded-md"
                required
                id="pickupDateTime"
              />
             
            </div>
            <div className="mb-5">
              <label>Vehicle Type*:</label>
              <select
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleInputChange}
                className="w-full p-2 border border-2 rounded-md"
                required
              >
                <option value="Sedan">Sedan</option>
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

            {/* Conditional fields based on vehicle type */}
            {(formData.vehicleType === 'Executive Traveller' ||
              formData.vehicleType === 'Premium Traveller' ||
              formData.vehicleType === 'Luxury Traveller') && (
              <div className="mb-5">
                <label>Number of Passengers*:</label>
                <input
                  type="text"
                  name="numberOfPassengers"
                  value={formData.numberOfPassengers}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-2 rounded-md"
                  required
                />
              </div>
            )}

            {formData.vehicleType === 'Premium Vehicles' && (
              <div className="mb-5">
                <label>Preferred Model:</label>
                <input
                  type="text"
                  name="preferredModel"
                  value={formData.preferredModel}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-2 rounded-md"
                  placeholder='Benz E-Class, Audi A6'
                  required
                />
              </div>
            )}

            <div className="mb-5">
              <label>Trip Type*:</label>
              <select
                name="tripType"
                value={formData.tripType}
                onChange={handleInputChange}
                className="w-full p-2 border border-2 rounded-md"
                required
              >
                 <option value="" disabled hidden>
                  Select City
                </option>
                <option value="city-travel">City Travel</option>
                <option value="airport-pickup">Pickup from Airport</option>
                <option value="airport-drop">Drop to Airport</option>
                <option value="drop-only">Drop Only</option>
                <option value="outstation-trip">Outstation Trip</option>
                <option value="sabarimala-package">Sabarimala Package</option>
                <option value="multi-day-package">Multi Day Package</option>
              </select>
            </div>

            {/* Additional Fields based on tripType */}
  {/* Additional Fields based on tripType */}
  {['city-travel', 'drop-only', 'outstation-trip', 'sabarimala-package'].includes(formData.tripType) && (
        <>
          <div className="mb-5">
            <label>Pickup Location*:</label>
            <textarea
              type="text"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleInputChange}
              className="w-full p-2 border border-2 rounded-md"
              required
              placeholder="Enter Your Pickup Address"
            />
          </div>
          <div className="mb-5">
            <label>Drop Location*:</label>
            <textarea
              type="text"
              name="dropLocation"
              value={formData.dropLocation}
              onChange={handleInputChange}
              className="w-full p-2 border border-2 rounded-md"
              required
              placeholder="Enter Your Drop Location"
            />
          </div>
        </>
      )}

                {formData.tripType === 'airport-pickup' && (
                  <>
                    <div className="mb-5 flex justify-between">
                      <div className="w-1/2 pr-2">
                        <label>Select Airport*:</label>
                        <select
                          name="airport"
                          value={formData.airport}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-2 rounded-md"
                          required
                        >
                          <option value="" disabled>Select an airport</option>
                          <option value="Cochin/Kochi Airport">Cochin/Kochi Airport</option>
                          <option value="Trivandrum Airport">Trivandrum Airport</option>
                          <option value="Kozhikode/Calicut Airport">Kozhikode/Calicut Airport</option>
                          <option value="Kannur Airport">Kannur Airport</option>
                        </select>
                      </div>
                      <div className="w-1/2 pl-2">
                        <label>Flight Number*:</label>
                        <input
                          type="text"
                          name="flightNumber"
                          value={formData.flightNumber}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-2 rounded-md"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-5">
                      <label>Drop Location*:</label>
                      <textarea
                        type="text"
                        name="dropLocation"
                        value={formData.dropLocation}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-2 rounded-md"
                        placeholder='Enter your Drop Loction'
                        required
                      />
                    </div>
                  </>
                )}


{formData.tripType === 'airport-drop' && (
        <>
          <div className="mb-5">
            <label>Select Airport*:</label>
            <select
              name="airport"
              value={formData.airport}
              onChange={handleInputChange}
              className="w-full p-2 border border-2 rounded-md"
              required
            >
              <option value="" disabled>
                Select an airport
              </option>
              <option value="Cochin/Kochi Airport">Cochin/Kochi Airport</option>
              <option value="Trivandrum Airport">Trivandrum Airport</option>
              <option value="Kozhikode/Calicut Airport">Kozhikode/Calicut Airport</option>
              <option value="Kannur Airport">Kannur Airport</option>
            </select>
          </div>
          <div className="mb-5">
            <label>Pickup Location*:</label>
            <textarea
              type="text"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleInputChange}
              className="w-full p-2 border border-2 rounded-md"
              required
              placeholder="Enter Your Pickup Location"
            />
          </div>
        </>
      )}


{formData.tripType === 'multi-day-package' && (
        <>
          <div className="mb-5">
            <label>Pickup Location*:</label>
            <textarea
              type="text"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleInputChange}
              className="w-full p-2 border border-2 rounded-md"
              required
              placeholder="Enter Your Pickup Location"
            />
          </div>
          
                    <div className="mb-5">
            <label>Itinerary*:</label>
            <textarea
              type="text"
              name="itinerary"
              value={formData.itinerary}
              onChange={handleInputChange}
              className="w-full p-2 border border-2 rounded-md"
              required
              rows="4"
              placeholder="Enter the locations you are planning to visit (eg: 2 nights at Munnar, 1 night at Thekkady, 1 Night at Alleppey etc...
                          Also if you have booked the hotels: please do mention the names of the same. Eg: Munnar: Abad Copper Castle, Thekkady: Grand Thekkady, Aleppey: Houseboat"
            />
          </div>

          <div className="mb-5">
            <label>Drop Location*:</label>
            <textarea
              type="text"
              name="dropLocation"
              value={formData.dropLocation}
              onChange={handleInputChange}
              className="w-full p-2 border border-2 rounded-md"
              required
              placeholder="Enter Your Drop Location"
            />
          </div>
          <div className="mb-5">
            <label>Drop Date*:</label>
            <input
              type="date"
              name="dropDate"
              value={formData.dropDate}
              onChange={handleInputChange}
              className="w-full p-2 border border-2 rounded-md"
              required
            />
          </div>

        </>
      )}


                  

            <button
              type="submit"
              className="border border-red bg-[#ed2124] px-6 py-2 rounded-md text-white hover:bg-[#ed2124]"
              disabled={loading} // Disable button while loading
            >
              {loading ? 'Reserving...' : 'Reserve Now'}
            </button>
            {message && (
              <div className={`mt-4 p-2 rounded-md ${messageStyle}`}>
                {message}
              </div>
            )}

<div className="bg-gray-100 p-3 rounded mt-4 border-2">
  <div className="p-3">
    <p className="mb-0">We shall connect with you and convey the complete tariff prior to confirming the booking.</p>
  </div>
</div>

          </form>
          
        </div>
      </div>



      <Footer />
    </div>
  );
};

export default BookNow;
