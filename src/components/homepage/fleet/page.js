import Image from 'next/image';
import Link from 'next/link';

const FleetSection = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold text-center">Our Fleet</h2>
        <p className="text-lg text-center mt-4 font-medium">
          Modern & Varied fleet of vehicles at your service.
        </p>
        <p className="text-center mt-4 max-w-2xl mx-auto">
          At B-Cabs Ride Easy, we have a diverse and well-maintained fleet of vehicles to suit your every need. Whether you are looking for a budget-friendly and spacious sedan, a luxurious SUV, or a large coach, we have it all.
        </p>
        <p className="text-center mt-4 max-w-2xl mx-auto">
          No matter what your occasion, destination, or budget, B-Cabs Ride Easy has the perfect vehicle for you. Book now and enjoy a smooth and safe ride with our professional and courteous drivers.
        </p>
      </div>

      {/* Vehicle Images Section */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { name: 'Sedan', src: '/images/assets/kochi-city-dzire-taxi.jpg' },
          { name: 'SUV', src: '/images/assets/kochi-city-ertiga-taxi.jpg' },
          { name: 'Coach', src: '/images/assets/kochi-city-crysta-taxi.jpg' },
          { name: 'Luxury Sedan', src: '/images/assets/kochi-city-traveller-taxi.jpg' },
          { name: 'Minivan', src: '/images/assets/kochi-luxury-traveller-taxi.jpg' },
          { name: 'Electric Car', src: '/images/assets/kochi-city-26-seater-traveller-taxi.jpg' },
          { name: 'Convertible', src: '/images/assets/kochi-city-bus-rental-taxi.jpg' },
          { name: 'Limousine', src: '/images/assets/kochi-premium-cabs-mercedes-benz.jpg' },
        ].map((vehicle, index) => (
          <div key={index} className="relative group">
            <Image 
              src={vehicle.src} 
              alt={vehicle.name} 
              layout="responsive" 
              width={400} 
              height={300} 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-lg font-bold">{vehicle.name}</h3>
              <button className="mt-2 px-4 py-2 bg-white text-black rounded-md">
                View More Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Categories Section */}
      <div className="bg-black text-white py-8 mt-8">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl text-center">
            We have more than 25+ categories of vehicles in Kochi City and Cochin Airport
          </h3>
          <div className="flex justify-center mt-4">
            <Link  href='' className="border border-red-500 px-4 py-2 mr-2 rounded-md text-red-500 inline-block hover:bg-red-500 hover:text-white cursor-pointer text-sm md:text-base">
              See More
            </Link>
      
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
