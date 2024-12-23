import React from "react";
import {
  FaShoppingBag,
  FaUtensils,
  FaCouch,
  FaWifi,
  FaExchangeAlt,
  FaSuitcase,
  FaClinicMedical,
  FaSolarPanel,
  FaLandmark,
  FaCheckCircle,
} from "react-icons/fa";

const CochinAirport = () => {
  return (
    <div className="bg-gray-50 text-gray-800 p-6 md:p-10">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
        Cochin International Airport (COK)
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Cochin International Airport (COK) is the primary international airport
        serving the city of Kochi, in the state of Kerala, India. Located about
        25 kilometers northeast of the city center, it is a major gateway to the
        region and a significant hub for trade and tourism.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          Cochin International Airport is one of the busiest airports in India,
          handling millions of passengers annually. The airport has undergone
          significant expansions and modernizations, offering state-of-the-art
          facilities and services to travelers.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={<FaShoppingBag className="text-blue-600 text-3xl" />}
            title="Duty-Free Shopping"
            description="Explore a wide range of duty-free shops offering perfumes, cosmetics, jewelry, and liquor."
          />
          <ServiceCard
            icon={<FaUtensils className="text-green-600 text-3xl" />}
            title="Food and Beverages"
            description="Enjoy a variety of cuisines, from traditional Kerala dishes to international fast food chains."
          />
          <ServiceCard
            icon={<FaCouch className="text-yellow-600 text-3xl" />}
            title="Lounges"
            description="Relax in comfort at one of the luxurious lounges, offering complimentary food, beverages, and Wi-Fi."
          />
          <ServiceCard
            icon={<FaWifi className="text-purple-600 text-3xl" />}
            title="Wi-Fi"
            description="Stay connected with complimentary Wi-Fi throughout the airport."
          />
          <ServiceCard
            icon={<FaExchangeAlt className="text-pink-600 text-3xl" />}
            title="Currency Exchange"
            description="Exchange currency at one of the many forex counters or ATMs."
          />
          <ServiceCard
            icon={<FaSuitcase className="text-red-600 text-3xl" />}
            title="Baggage Services"
            description="Take advantage of baggage wrapping, porter services, and luggage carts."
          />
          <ServiceCard
            icon={<FaClinicMedical className="text-indigo-600 text-3xl" />}
            title="Medical Facilities"
            description="Access medical assistance and first-aid services."
          />
        </div>
      </section>

      <section className="mt-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Specialties
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={<FaSolarPanel className="text-green-500 text-xl mt-1" />}
            title="Sustainable Airport"
            description="Cochin International Airport
              is the world's first airport to be fully powered by solar
              energy."
          />
          <ServiceCard
            icon={<FaLandmark className="text-blue-500 text-xl mt-1" />}
            title="Cultural Experience"
            description="Admire the traditional
              Kerala architecture and decor throughout the airport."
          />
          <ServiceCard
            icon={<FaCheckCircle className="text-yellow-500 text-xl mt-1" />}
            title="Efficient Check-in"
            description="Enjoy quick and hassle-free
              check-in processes."
          />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800">
          Traveling to/from the Airport
        </h2>
        <p className="text-gray-600 leading-relaxed">
          For a seamless travel experience, book your airport transfers with
          BCabs, a trusted and reliable cab service provider. Our expert drivers
          will ensure you reach your destination safely and on time. Tips and
          Essentials
        </p>

        <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-5 text-gray-800">
          Tips and Essentials
        </h3>

        <p className="text-gray-600 leading-relaxed">
          1. Plan your travel in advance to avoid peak hour traffic.
        </p>
        <p className="text-gray-600 leading-relaxed">
          2. Check the airport&apos;s website for flight schedules and updates.
        </p>
        <p className="text-gray-600 leading-relaxed">
          3. Carry essential documents, including your passport, visa (if
          required), and ID proof.
        </p>
        <p className="text-gray-600 leading-relaxed">
          4. Take advantage of BCabs&apos; convenient door-to-door services for
          a stress-free journey.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
          Book Your Ride with BCabs
        </h2>
        <p className="text-gray-600 leading-relaxed">
          For a comfortable and hassle-free journey to/from Cochin International
          Airport, book your ride with BCabs today!
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
          Contact Us
        </h2>
        <p className="text-gray-600 leading-relaxed">
          For any queries or assistance, contact BCabs&apos; 24x7 customer
          support team.
        </p>
      </section>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <div className="flex items-start bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="mr-4">{icon}</div>
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const SpecialtyItem = ({ icon, title, description }) => (
  <div className="flex items-start">
    <div className="mr-3">{icon}</div>
    <div>
      <h3 className="font-medium text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

export default CochinAirport;
