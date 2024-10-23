"use client";
import { FaCheck, FaStar } from 'react-icons/fa';

const TickerSection = () => {
  return (
    <section className="bg-black px-4 py-4">
      <div className="overflow-hidden">
        {/* Ticker Wrapper */}
        <div className="ticker flex ticker-animate">
          <div className="ticker-item text-white flex items-center w-full whitespace-nowrap  mr-5  lg:mr-10">
            <FaCheck className="text-green-500 mr-3" />
            Highly cooperative and guide equivalent chauffeurs
          </div>
          <div className="ticker-item text-white flex items-center w-full whitespace-nowrap  mr-5 lg:mr-10">
            <FaCheck className="text-green-500 mr-3" />
            Legible and clear tariff, no surge
          </div>
          <div className="ticker-item text-white flex items-center w-full whitespace-nowrap  mr-5 lg:mr-10">
            <FaCheck className="text-green-500 mr-3" />
            English and Hindi Speaking chauffeurs
          </div>
          <div className="ticker-item text-white flex items-center w-full whitespace-nowrap   mr-5 lg:mr-10">
            <FaStar className="text-yellow-400 mr-3" />
            Consistently reviewed 5-Star on Google, Facebook & Tripadvisor
          </div>
          <div className="ticker-item text-white flex items-center w-full whitespace-nowrap  mr-5  lg:mr-10">
            <FaCheck className="text-green-500 mr-3 " />
            Well maintained vehicles
          </div>
          <div className="ticker-item text-white flex items-center w-full whitespace-nowrap  mr-5 lg:mr-10">
            <FaCheck className="text-green-500 mr-3" />
            Guaranteed Satisfaction
          </div>
        </div>
      </div>

      {/* Tailwind CSS Custom Styles */}
      <style jsx>{`
        .ticker-animate {
          display: flex;
          animation: ticker-scroll 30s linear infinite;
          width: max-content; /* Ensures that all items scroll fully */
        }

        @keyframes ticker-scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  );
};

export default TickerSection;
