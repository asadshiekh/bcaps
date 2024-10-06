"use client";
import { useState } from 'react';
import { FaPhone, FaCheck, FaQuestionCircle, FaChartLine, FaInfoCircle } from 'react-icons/fa';

// Sample FAQ data
const faqData = [
  { id: 1, category: 'faq-1', question: 'What services do you offer in Kochi Taxi?', answer: 'We provide affordable and reliable taxi services throughout Kochi.', icon: <FaPhone /> },
  { id: 2, category: 'faq-1', question: 'Is Kochi Taxi available 24/7?', answer: 'Yes, our taxi services in Kochi are available 24/7.', icon: <FaCheck /> },
  { id: 3, category: 'faq-2', question: 'What’s included in Kerala Tour Package?', answer: 'Our Kerala Tour Packages include guided tours, accommodation, and transport.', icon: <FaQuestionCircle /> },
  { id: 4, category: 'faq-2', question: 'How long does a typical Kerala tour last?', answer: 'A typical Kerala tour can last between 3 to 7 days depending on your package.', icon: <FaChartLine /> },
  { id: 5, category: 'faq-3', question: 'How can I book Kochi Airport Taxi?', answer: 'You can book our Kochi Airport Taxi services via call, email, or WhatsApp.', icon: <FaPhone /> },
  { id: 6, category: 'faq-4', question: 'What is the fare for Trivandrum Airport Taxi?', answer: 'Our fares for Trivandrum Airport Taxi are government-approved and transparent.', icon: <FaInfoCircle /> },
  { id: 7, category: 'faq-5', question: 'Do you offer services from Kozhikode Airport?', answer: 'Yes, we offer pickup and drop-off services from Kozhikode Airport.', icon: <FaPhone /> },
  { id: 8, category: 'faq-6', question: 'How can I book Kannur Airport Taxi?', answer: 'Our Kannur Airport Taxi services can be booked online or via phone.', icon: <FaPhone /> },
  { id: 9, category: 'faq', question: 'Are your rates government approved?', answer: 'Yes, all of our rates are government-approved with no hidden charges.', icon: <FaCheck /> },
  { id: 10, category: 'faq', question: 'Are vehicles sanitized?', answer: 'Yes, all our vehicles are thoroughly sanitized after each trip.', icon: <FaCheck /> },
];

const FaqSection = () => {
  const [activeFilter, setActiveFilter] = useState('faq');

  const filteredFaqs = activeFilter === 'faq'
    ? faqData
    : faqData.filter((faq) => faq.category === activeFilter);

  return (
    <section className="py-[60px] px-20 lg:px-[250px]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <h3 className="text-lg mb-4">How can we help you?</h3>

        {/* FAQ Filter Tabs */}
        <ul className="flex justify-center space-x-4 mb-6">
          <li>
            <button
              className={`transition-all duration-300 fw-semibold border-2 border-transparent rounded-full py-2 px-4 ${activeFilter === 'faq' ? 'border-red-500 text-red-500 bg-white py-2 px-4 rounded-full' : 'text-blue-500 hover:border-red-500'}`}
              onClick={() => setActiveFilter('faq')}
            >
              All
            </button>
          </li>
          <li>
            <button
              className={`transition-all duration-300 fw-semibold border-2 border-transparent rounded-full py-2 px-4 ${activeFilter === 'faq-1' ? 'border-red-500 text-red-500 bg-white py-2 px-4 rounded-full' : 'text-blue-500 hover:border-red-500'}`}
              onClick={() => setActiveFilter('faq-1')}
            >
              Kochi Taxi
            </button>
          </li>
          <li>
            <button
              className={`transition-all duration-300 fw-semibold border-2 border-transparent rounded-full py-2 px-4 ${activeFilter === 'faq-2' ? 'border-red-500 text-red-500 bg-white py-2 px-4 rounded-full' : 'text-blue-500 hover:border-red-500'}`}
              onClick={() => setActiveFilter('faq-2')}
            >
              Kerala Tour Package
            </button>
          </li>
          <li>
            <button
              className={`transition-all duration-300 fw-semibold border-2 border-transparent rounded-full py-2 px-4 ${activeFilter === 'faq-3' ? 'border-red-500 text-red-500 bg-white py-2 px-4 rounded-full' : 'text-blue-500 hover:border-red-500'}`}
              onClick={() => setActiveFilter('faq-3')}
            >
              Kochi Airport Taxi
            </button>
          </li>
          <li>
            <button
              className={`transition-all duration-300 fw-semibold border-2 border-transparent rounded-full py-2 px-4 ${activeFilter === 'faq-4' ? 'border-red-500 text-red-500 bg-white py-2 px-4 rounded-full' : 'text-blue-500 hover:border-red-500'}`}
              onClick={() => setActiveFilter('faq-4')}
            >
              Trivandrum Airport Taxi
            </button>
          </li>
        </ul>

        <ul className="flex justify-center space-x-4 mb-6">
          <li>
            <button
              className={`transition-all duration-300 fw-semibold border-2 border-transparent rounded-full py-2 px-4 ${activeFilter === 'faq-5' ? 'border-red-500 text-red-500 bg-white py-2 px-4 rounded-full' : 'text-blue-500 hover:border-red-500'}`}
              onClick={() => setActiveFilter('faq-5')}
            >
              Kozhikode Airport Taxi
            </button>
          </li>
          <li>
            <button
              className={`transition-all duration-300 fw-semibold border-2 border-transparent rounded-full py-2 px-4 ${activeFilter === 'faq-6' ? 'border-red-500 text-red-500 bg-white py-2 px-4 rounded-full' : 'text-blue-500 hover:border-red-500'}`}
              onClick={() => setActiveFilter('faq-6')}
            >
              Kannur Airport Taxi
            </button>
          </li>
        </ul>

        {/* FAQ Items */}
        <div>
          {filteredFaqs.map((faq) => (
            <div key={faq.id} className="border-b border-gray-200 py-4 flex items-center justify-left">
              <span className="mr-2 text-gray-700">{faq.icon}</span>
              <div className="text-left">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
