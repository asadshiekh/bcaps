import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa'; // Importing icons

const WhyChooseUsSection = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Side Image */}
        <div className="md:w-1/2 w-full mb-8 md:mb-0">
          <Image
            src="/images/assets/kochi-airport-taxi.jpg" // Add your actual image path
            alt="Taxi Car"
            layout="responsive"
            width={500}
            height={300}
            className="object-cover rounded-lg"
          />
        </div>

        {/* Right Side Content */}
        <div className="md:w-1/2 w-full md:pl-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Kochi Airport Taxi
          </h2>
          <p className="text-gray-700 mb-6">
            Cabs offers 24/7 taxi cab service from Cochin International Airport to any destination in Kerala and neighboring states. Our taxi cab services are available from both Domestic and International Terminals of Cochin International Airport and can be pre-booked via call, email, or WhatsApp.
          </p>

          {/* Why Choose Us Section */}
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Why choose BCabs Kochi Airport Taxi
          </h3>
          <ul className="space-y-3">
            {[
              'Government Approved Rates',
              'Multi Segment Vehicles',
              'Clear and legible Tariff, no hidden charges',
              'Fully sanitised vehicles',
              'Consistently reviewed 5-Star',
            ].map((point, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <FaCheckCircle className="text-green-500 mr-2" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
