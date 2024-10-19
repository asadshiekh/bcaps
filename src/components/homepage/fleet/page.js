import Image from 'next/image';
import Link from 'next/link';
import { GoTriangleRight } from "react-icons/go";

const FleetSection = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto  py-8 text-center">
        <h2 className="text-4xl font-bold text-center">Our Fleet</h2>
        <p className="text-lg text-center mt-4 font-medium text-gray-400">
          Modern & Varied fleet of vehicles at your service.
        </p>
        <div className='h-[1.5px] w-10 bg-gray-900 mx-auto my-8'></div>
        <p className="mt-4 mx-auto w-full md:w-[90%] px-5 md:px-0">
          At B-Cabs Ride Easy, we have a diverse and well-maintained fleet of vehicles to suit your every need. Whether you are looking for a budget-friendly and spacious sedan, a luxurious SUV, or a large coach, we have it all.
        </p>
        <strong className="block mt-4 w-full mx-auto md:w-[90%] px-4 md:px-0">
          No matter what your occasion, destination, or budget, B-Cabs Ride Easy has the perfect vehicle for you. Book now and enjoy a smooth and safe ride with our professional and courteous drivers.
        </strong>
      </div>

      {/* Vehicle Images Section */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { name: 'Suzuki Dzire', lable:'Sedan', src: '/images/assets/kochi-city-dzire-taxi.jpg' },
          { name: 'Suzuki Ertiga', lable:'Compact MUV', src: '/images/assets/kochi-city-ertiga-taxi.jpg' },
          { name: 'Toyota Crysta', lable:'Luxury MUV', src: '/images/assets/kochi-city-crysta-taxi.jpg' },
          { name: '12/17 Seater Force Traveller', lable:'Standard, Executive and Luxury Coaches', src: '/images/assets/kochi-city-traveller-taxi.jpg' },
          { name: '14 Seater Ultra Luxury Traveller', lable:'Enhanced Leg Space', src:  '/images/assets/kochi-luxury-traveller-taxi.jpg' },
          { name: '26 Seater Force Traveller', lable:'Executive Coach', src: '/images/assets/kochi-city-26-seater-traveller-taxi.jpg' },
          { name: '45 Seater Mercedes Benz Glider', lable:'Luxury Coach', src: '/images/assets/kochi-city-bus-rental-taxi.jpg' },
          { name: 'Mercedes Benz E Class', lable:'Ultra Luxury Premium Fleet', src: '/images/assets/kochi-premium-cabs-mercedes-benz.jpg' },
        ].map((vehicle, index) => (
          <div key={index} className="relative group">
            <Image 
              src={vehicle.src} 
              alt={vehicle.name}   
              width={400} 
              height={300} 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-lg font-bold">{vehicle.name}</h3>
              <h5 className="text-white text-sm font-normal">{vehicle.lable}</h5>
              <Link href="/kochi-city-taxi" className="mt-2 px-4 py-2 bg-white text-black rounded-md">
                View More Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Categories Section */}
      <div className="bg-gray-900 text-white py-8">
        <div className="container mx-auto">
          <h3 className="text-3xl lg:text-4xl text-center leading-relaxed px-4 lg:px-0">
            We have more than 25+ categories of vehicles in Kochi City and Cochin Airport
          </h3>
          <div className="flex justify-center mt-4">
            <Link  href='/kochi-city-taxi' className="text-4xl font-bold">
              See More <GoTriangleRight className='inline-block ml-1'/>
            </Link>
      
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
