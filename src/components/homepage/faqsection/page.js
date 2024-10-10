"use client";
import { useState } from 'react';
import { FaPhone, FaCheck, FaQuestionCircle, FaChartLine, FaInfoCircle } from 'react-icons/fa';
import { CiCreditCard1 } from "react-icons/ci";
// Sample FAQ data
const faqData = [
  { id: 1, category: 'faq-1', question: 'How can I book a taxi at Kochi?', answer: 'You can book a Kochi Taxi online through various websites or apps that provide cab booking services in Kochi. You can call or WhatsApp BCabs 24x7 hotline number +919895118877 to get a quote or make a booking for your Taxi requirement at Kochi.', icon: <FaQuestionCircle /> },
  { id: 2, category: 'faq-1', question: 'What are the benefits of booking a taxi at Kochi with BCabs?', 
    answer: (
      <ul className="list-disc pl-5 text-left">
        <li className="mb-2">You can choose from a wide range of vehicles, from Sedans to SUVs to tempo travelers to coaches and premium vehicles, depending on your budget and group size.</li>
        <li className="mb-2">You can enjoy hassle-free and comfortable travel with experienced and courteous drivers who know the local routes and traffic conditions of Kochi and Kerala as a whole.</li>
        <li className="mb-2">You can get transparent and competitive pricing with no hidden charges or surge pricing.</li>
        <li className="mb-2">You can avail 24/7 taxi service and round-the-clock customer support via Call or Whatsapp for any queries or issues.</li>
      </ul>
    ), 
    icon: <FaCheck /> 
  },
  { id: 3, category: 'faq-1', question: 'What’s included in Kerala Tour Package?', 
    answer:  (
      <div>
        <p className="mb-3">Kochi is a vibrant and cultural city that has many attractions to offer to its visitors. Some of the best places to visit in Kochi with a BCabs Kochi Taxi are:</p>
      <ul className="list-disc pl-5 text-left">
        <li className="mb-2"><strong>Fort Kochi:</strong> A historical area that showcases the colonial influence of the Portuguese, Dutch, and British. You can see the Chinese fishing nets, St. Francis Church, Mattancherry Palace, Jewish Synagogue, and more.</li>
        <li className="mb-2"><strong>Marine Drive:</strong> A scenic promenade along the backwaters that offers a stunning view of the sunset and the skyline.</li>
        <li className="mb-2"><strong>Lulu Mall:</strong> A mega shopping mall with everything from branded stores to multiplexes.</li>
        <li className="mb-2"><strong>Cherai Beach:</strong> A beautiful beach known for its golden sand and clear water.</li>
        <li className="mb-2"><strong>Bolgatty Palace:</strong> A heritage hotel built by the Dutch in 1744.</li>
      </ul>
      </div>
    ),icon: <FaQuestionCircle /> },
  { id: 4, category: 'faq-2', question: 'What is a Kerala tour package?', answer: 'A Kerala tour package is a pre-planned itinerary that includes accommodation, sightseeing, meals, transportation and other services for travellers who want to explore the natural beauty and cultural diversity of Kerala.', icon: <FaQuestionCircle /> },
  { id: 5, category: 'faq-2', question: 'Why should I book a Taxi for Kerala tour package from BCabs?', answer: 'Booking a taxi can save you time, money, and hassle, offering a variety of options to suit your needs.', icon: <FaQuestionCircle /> },
  { id: 6, category: 'faq-2', question: 'What are the best places to visit in Kerala?', answer: 'Popular places include Munnar, Alleppey, Kochi, Wayanad, and Varkala. All locations are accessible by Taxi.', icon: <FaCheck /> },
  { id: 7, category: 'faq-2', question: 'How can I book a taxi for Kerala tour package?', answer: 'Contact BCabs at +919895118877 via Call or WhatsApp for booking and estimates.', icon: <FaQuestionCircle /> },
  { id: 8, category: 'faq-3', question: 'What is BCabs Kochi Airport Taxi?', answer: 'BCabs Kochi Airport Taxi offers reliable transportation to and from Cochin International Airport.', icon: <FaCheck /> },
  { id: 9, category: 'faq-3', question: 'How can I book a BCabs Kochi Airport Taxi?', answer: 'Visit www.bcabs.com, choose a vehicle, and schedule your pickup, or call our hotline.', icon: <FaChartLine /> },
  { id: 10, category: 'faq-3', question: 'Are the taxis available 24/7?', answer: 'Yes, our service operates 24/7.', icon: <FaPhone /> },
  { id: 11, category: 'faq-3', question: 'What are the rates for BCabs Kochi Airport Taxi?', answer: 'Our rates are competitive and transparent. Check our website for details.', icon: <CiCreditCard1 /> },
  { id: 12, category: 'faq-3', question: 'Can I cancel my BCabs Kochi Airport Taxi booking?', answer: 'Yes, you can cancel without charges within a specified timeframe.', icon: <FaQuestionCircle /> },
  { id: 13, category: 'faq-6', question: 'What is BCabs Trivandrum Airport Taxi?', answer: 'BCabs Trivandrum Airport Taxi is a premier taxi service offering transportation to and from Trivandrum Airport, both from the International Terminal and Domestic Terminal. We provide a variety of vehicles to accommodate individual and group travel needs.', icon: <FaQuestionCircle /> },
  { id: 14, category: 'faq-6', question: 'How can I book a BCabs Trivandrum Airport Taxi?', answer: 'Booking a BCabs Trivandrum Airport Taxi is easy! Visit our website www.bcabs.com, choose your preferred vehicle, and schedule your pickup. You can also call our 24x7 BCabs Taxi Hotline +919895118877 or connect with us via Whatsapp for the same.', icon: <FaQuestionCircle /> },
  { id: 15, category: 'faq-6', question: 'How can I contact customer service?', answer: 'The BCabs 24x7 Taxi Hotline +919895118877 is available to assist you with any inquiries or booking assistance. You can connect with us via the contact form on our website, by email, or by phone at the provided contact numbers..', icon: <FaQuestionCircle /> },
  { id: 16, category: 'faq-6', question: 'Are the taxis available 24/7 at the Trivandrum International Airport', answer: 'Yes, BCabs Trivandrum Airport Taxi service runs around the clock, every day of the week, ensuring you have a ride whenever you need one.', icon: <FaQuestionCircle /> },
  { id: 17, category: 'faq-6', question: 'What are the rates for BCabs Trivandrum Airport Taxi?', answer: 'We offer competitive, clear pricing. For detailed rates, please visit our website or get in touch with customer service', icon: <FaQuestionCircle /> },
  { id: 18, category: 'faq-4', question: 'What services does bcabs.com offer under BCabs Kozhikode Airport Taxi?', answer: 'BCabs Kozhikode Airport Taxi provides reliable and timely taxi services for all your transportation needs to and from Kozhikode International Airport (Calicut International Airport). Our fleet includes a variety of vehicles to cater to different group sizes and preferences.', icon: <FaQuestionCircle /> },
  { id: 19, category: 'faq-4', question: 'How can I book a Kozhikode Airport Taxi through bcabs.com', answer: 'Booking a BCabs at Kozhikode Airport is simple! Visit our website, choose your preferred vehicle, enter your details, and confirm your booking. You can also call our 24x7 BCabs Taxi Hotline +919895118877 or connect with us via Whatsapp on the same.', icon: <FaQuestionCircle /> },
  { id: 20, category: 'faq-4', question: 'What are the rates for BCabs Kozhikode Airport Taxi?', answer: 'Our rates are competitive and transparent. You can find detailed pricing information on our website or contact us directly for a quote. You can also call our 24x7 BCabs Taxi Hotline +919895118877 or connect with us via Whatsapp on the same.', icon: <FaQuestionCircle /> },
  { id: 21, category: 'faq-5', question: 'Are the drivers experienced and familiar with the Kannur area?', answer: 'Absolutely, our drivers are professionally trained, have extensive knowledge of the local routes, and are committed to ensuring a safe and comfortable journey for all passengers of Kannur International Airport.', icon: <FaQuestionCircle /> },
  { id: 22, category: 'faq-5', question: 'What are the safety measures in place for BCabs Kannur Airport Taxis?', answer: 'Your safety is our top priority. All our taxis are regularly maintained, and we adhere to strict health protocols to provide you with a secure travel experience.', icon: <FaQuestionCircle /> },
  { id: 23, category: 'faq-5', question: 'Can I expect any additional charges apart from the quoted fare for my BCabs Kannur Airport Taxi fare?', answer: 'No, we believe in transparency. The fare provided at the time of booking is final, inclusive of all taxes and tolls, with no hidden costs. It also included the mandotory entry fee levied by the Kannur International Airport Authority', icon: <FaQuestionCircle /> },
  { id: 24, category: 'faq-5', question: 'Does BCabs have services at Kannur International Airport', answer: 'Yes, BCabs provides reliable and timely taxi services for all your travel needs to and from Kannur International Airport. Our fleet includes a variety of vehicles to cater to individual preferences and group sizes.', icon: <FaQuestionCircle /> },

];

const FaqSection = () => {
  const [activeFilter, setActiveFilter] = useState('faq');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id); // Toggle open/close for the clicked FAQ
  };

  const filteredFaqs = activeFilter === 'faq'
    ? faqData
    : faqData.filter((faq) => faq.category === activeFilter);

  return (
    <section className="py-[60px] sm:px-2 lg:px-20 lg:px-[250px]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <h3 className="text-lg mb-4">How can we help you?</h3>

        {/* FAQ Filter Tabs */}
        <ul className="flex justify-center space-x-2 lg:space-x-4 mb-2 lg:mb-6">
          <li>
            <button
              className={`text-xs lg:text-base transition-all duration-300 fw-semibold border-2 border-transparent rounded-full py-2 lg:px-4 ${activeFilter === 'faq' ? 'border-red-500 text-red-500 bg-white' : 'text-blue-500 hover:border-red-500'}`}
              onClick={() => setActiveFilter('faq')}
            >
              All
            </button>
          </li>
          <li>
            <button
              className={`text-xs lg:text-base transition-all duration-300 fw-semibold border-2 border-transparent rounded-full py-2 lg:px-4 ${activeFilter === 'faq-1' ? 'border-red-500 text-red-500 bg-white' : 'text-blue-500 hover:border-red-500'}`}
              onClick={() => setActiveFilter('faq-1')}
            >
              Kochi Taxi
            </button>
          </li>
          <li>
            <button
              className={`text-xs lg:text-base transition-all duration-300 fw-semibold border-2 border-transparent rounded-full py-2 lg:px-4 ${activeFilter === 'faq-2' ? 'border-red-500 text-red-500 bg-white' : 'text-blue-500 hover:border-red-500'}`}
              onClick={() => setActiveFilter('faq-2')}
            >
              Kerala Tour Package
            </button>
          </li>
          <li>
            <button
              className={`text-xs lg:text-base transition-all duration-300 fw-semibold border-2 border-transparent rounded-full py-2 lg:px-4 ${activeFilter === 'faq-3' ? 'border-red-500 text-red-500 bg-white' : 'text-blue-500 hover:border-red-500'}`}
              onClick={() => setActiveFilter('faq-3')}
            >
              Kochi Airport Taxi
            </button>
          </li>

          <li>
            <button
              className={`text-xs lg:text-base transition-all duration-300 fw-semibold border-2 border-transparent rounded-full py-2 lg:px-4 ${activeFilter === 'faq-6' ? 'border-red-500 text-red-500 bg-white' : 'text-blue-500 hover:border-red-500'}`}
              onClick={() => setActiveFilter('faq-6')}
            >
                    Trivandrum Airport Taxi
            </button>
          </li>




        </ul>
        <ul className="flex justify-center space-x-2 lg:space-x-4 mb-2 lg:mb-6">
        <li>
            <button
              className={`text-xs lg:text-base transition-all duration-300 fw-semibold border-2 border-transparent rounded-full py-2 lg:px-4 ${activeFilter === 'faq-4' ? 'border-red-500 text-red-500 bg-white' : 'text-blue-500 hover:border-red-500'}`}
              onClick={() => setActiveFilter('faq-4')}
            >
             Kozhikode Airport Taxi

            </button>
          </li>
          <li>
            <button
              className={`text-xs lg:text-base transition-all duration-300 fw-semibold border-2 border-transparent rounded-full py-2 lg:px-4 ${activeFilter === 'faq-5' ? 'border-red-500 text-red-500 bg-white' : 'text-blue-500 hover:border-red-500'}`}
              onClick={() => setActiveFilter('faq-5')}
            >
              Kannur Airport Taxi
            </button>
          </li>
        </ul>

        {/* FAQ Items */}
        <div>
          {filteredFaqs.map((faq) => (
            <div key={faq.id} className="border-b border-gray-200 py-4">
              <button
                className="flex justify-left w-full text-left"
                onClick={() => toggleFaq(faq.id)}
              >
                <span className="mr-2 text-gray-700 mt-1">{faq.icon}</span>
                <h3 className="text-lg font-semibold">{faq.question}</h3>
              </button>
              {openFaq === faq.id && (
                <div className="text-gray-600 text-left mt-2">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
