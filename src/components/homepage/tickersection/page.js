"use client";
import { FaCheck, FaStar } from 'react-icons/fa';

const TickerSection = () => {
  return (
    <section className="bg-black px-4 py-4">
      <div className="overflow-hidden">
        {/* Ticker Wrapper */}
        <div className="ticker flex ticker-animate">
          <div className="ticker-item text-white flex items-center w-full whitespace-nowrap lg:mr-5">
            <FaCheck className="text-green-500 mr-2" />
            Highly cooperative and guide equivalent chauffeurs
          </div>
          <div className="ticker-item text-white flex items-center w-full whitespace-nowrap lg:mr-5">
            <FaCheck className="text-green-500 mr-2" />
            English and Hindi Speaking chauffeurs
          </div>
          <div className="ticker-item text-white flex items-center w-full whitespace-nowrap lg:mr-5">
            <FaStar className="text-yellow-400 mr-2" />
            Consistently reviewed 5-Star on Google, Facebook & Tripadvisor
          </div>
          <div className="ticker-item text-white flex items-center w-full whitespace-nowrap lg:mr-5">
            <FaCheck className="text-green-500 mr-2" />
            Well maintained vehicles
          </div>
          <div className="ticker-item text-white flex items-center w-full whitespace-nowrap lg:mr-5">
            <FaCheck className="text-green-500 mr-2" />
            Legible and clear tariff, no surge
          </div>
          <div className="ticker-item text-white flex items-center w-full whitespace-nowrap lg:mr-5">
            <FaCheck className="text-green-500 mr-2" />
            Guaranteed Satisfaction
          </div>
        </div>
      </div>

      {/* Tailwind CSS Custom Styles */}
      <style jsx>{`
        @media (min-width: 768px) {
          .ticker-animate {
            display: flex;
            animation: ticker-scroll 20s linear infinite;
            width: 100%;
          }
        }

        @keyframes ticker-scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @media (max-width: 767px) {
          .ticker-animate {
            display: block;
            animation: none;
          }

          .ticker-item {
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default TickerSection;
