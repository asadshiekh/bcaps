import React from "react";
import {
  FaMapMarkerAlt,
  FaCarAlt,
  FaUmbrellaBeach,
  FaShieldAlt,
  FaDollarSign,
} from "react-icons/fa";

const WelcomeKerala = () => {
  return (
    <div className="text-gray-800 bg-gray-50 min-h-screen py-16 px-6 md:px-20">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-gray-900">
        Welcome to <span className="text-green-600">Kerala</span>
      </h1>
      <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto leading-relaxed mb-10">
        Kerala, often called{" "}
        <span className="font-semibold">
          &quot;God&apos;s Own Country&quot;
        </span>
        , is a blend of nature, culture, and adventure. Discover serene
        backwaters, lush hills, vibrant beaches, and rich heritage all in one
        place!
      </p>

      <section>
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-gray-800">
          Top Tourist Destinations in Kerala
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <FaMapMarkerAlt className="text-green-600 mr-2" /> Munnar
            </h3>
            <p className="text-gray-600">
              Nestled in the Western Ghats, Munnar is a picturesque hill station
              known for its tea plantations, rolling hills, and cool climate.
              Don&apos;t miss the Eravikulam National Park and the Anamudi Peak.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <FaMapMarkerAlt className="text-green-600 mr-2" /> Alleppey
              (Alappuzha)
            </h3>
            <p className="text-gray-600">
              Famous for its backwaters, Alleppey offers houseboat cruises that
              take you through tranquil waters, lush paddy fields, and charming
              villages. It&apos;s a perfect destination for a relaxing getaway
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <FaMapMarkerAlt className="text-green-600 mr-2" /> Kochi (Cochin)
            </h3>
            <p className="text-gray-600">
              A vibrant port city with a rich history, Kochi boasts attractions
              like Fort Kochi, Chinese Fishing Nets, Mattancherry Palace, and
              the bustling Jew Town. It&apos;s a melting pot of cultures and a
              must-visit for history enthusiasts.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <FaMapMarkerAlt className="text-green-600 mr-2" /> Thekkady
            </h3>
            <p className="text-gray-600">
              Home to the Periyar Wildlife Sanctuary, Thekkady is a haven for
              nature lovers. Enjoy boat rides on Periyar Lake, spot wildlife,
              and explore spice plantations.
            </p>
          </div>

          {/* Card 5 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <FaMapMarkerAlt className="text-green-600 mr-2" /> Kumarakom
            </h3>
            <p className="text-gray-600">
              Another gem in Kerala&apos;s backwater destinations, Kumarakom is
              known for its bird sanctuary and luxurious houseboats. It&apos;s
              an ideal spot for birdwatching and unwinding in nature.
            </p>
          </div>

          {/* Card 6 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <FaMapMarkerAlt className="text-green-600 mr-2" /> Wayanad
            </h3>
            <p className="text-gray-600">
              A district filled with natural beauty, Wayanad offers lush
              forests, waterfalls, and wildlife. Visit the Edakkal Caves,
              Banasura Sagar Dam, and the scenic Chembra Peak.
            </p>
          </div>

          {/* Card 7 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <FaMapMarkerAlt className="text-green-600 mr-2" /> Kovalam
            </h3>
            <p className="text-gray-600">
              Renowned for its crescent-shaped beaches, Kovalam is a beach
              lover&apos;s paradise. Enjoy sunbathing, swimming, and water
              sports at the Lighthouse Beach, Hawa Beach, and Samudra Beach.
            </p>
          </div>

          {/* Card 8 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <FaMapMarkerAlt className="text-green-600 mr-2" /> Varkala
            </h3>
            <p className="text-gray-600">
              Known for its stunning cliffs and pristine beaches, Varkala is a
              serene coastal town. The Papanasam Beach and the Janardhana Swamy
              Temple are major attractions.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-gray-800">
          Why Choose <span className="text-green-600">BCabs</span> for Your
          Kerala Journey?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 flex items-start">
            <FaCarAlt className="text-green-600 text-3xl mr-4 w-16" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Convenience</h3>
              <p className="text-gray-600">
                BCabs offers reliable and comfortable taxi services across all
                major parts of Kerala. Whether you&apos;re traveling to hill
                stations, backwaters, or beaches, BCabs ensures a hassle-free
                journey.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 flex items-start">
            <FaShieldAlt className="text-green-600 text-3xl mr-4 w-10" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Safety</h3>
              <p className="text-gray-600">
                Our professional drivers are well-trained and prioritize your
                safety. Travel with peace of mind knowing you&apos;re in good
                hands.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 flex items-start">
            <FaDollarSign className="text-green-600 text-3xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Affordability</h3>
              <p className="text-gray-600">
                Enjoy competitive rates and transparent pricing with no hidden
                charges. BCabs provides value for your money.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 flex items-start">
            <FaUmbrellaBeach className="text-green-600 text-3xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Flexibility</h3>
              <p className="text-gray-600">
                Choose from a range of vehicles for solo trips or group
                adventures.
              </p>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 flex items-start">
            <FaMapMarkerAlt className="text-green-600 text-3xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
              <p className="text-gray-600">
                Our drivers are locals who know Kerala inside out. Get insider
                tips and recommendations to make the most of your trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Plan Your <span className="text-green-600">Kerala Adventure</span>{" "}
          with BCabs!
        </h2>
        <p className="text-gray-600 mb-6">
          Ready to explore the beauty of Kerala? Book your ride with BCabs today
          and experience the best of God&apos;s Own Country. Whether you&apos;re
          planning a family vacation, a romantic getaway, or a solo adventure,
          BCabs is your trusted travel partner.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800">
          Geography & Climate
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Kerala&apos;s diverse geography includes the Western Ghats, serene
          backwaters, and a beautiful coastline. With a tropical climate, Kerala
          experiences lush monsoons from June to September and a pleasant dry
          season from December to February.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800">
          History of Kerala
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Kerala has a rich historical legacy as a major spice trading hub. It
          attracted merchants from around the globe, including the Greeks,
          Romans, and Arabs. Colonial influences from the Portuguese, Dutch, and
          British shaped its cultural and architectural landscape.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800">
          Culture
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Kerala is renowned for its vibrant culture, which is a blend of
          traditional and modern influences. The state is famous for its
          classical dance forms like Kathakali and Mohiniyattam, as well as its
          traditional music, including Carnatic and folk music. Festivals such
          as Onam, Vishu, and Thrissur Pooram are celebrated with great
          enthusiasm. The state&apos;s cuisine, known for its use of coconut,
          spices, and seafood, is a significant part of its cultural identity.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800">
          Economy
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Kerala&apos;s economy is diverse, with significant contributions from
          agriculture, industry, and services. The state is a leading producer
          of spices, rubber, tea, coffee, and coconut. The tourism industry
          plays a crucial role in the economy, attracting millions of visitors
          each year to its scenic landscapes, backwaters, and cultural heritage
          sites. Additionally, Kerala has a high literacy rate and a
          well-developed healthcare system, contributing to its overall economic
          development.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800">
          Tourism
        </h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Kerala is a popular tourist destination known for its natural beauty
          and cultural richness. Major tourist attractions include:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <FaMapMarkerAlt className="text-green-600 mr-2" /> Munnar
            </h3>
            <p className="text-gray-600">
              A hill station famous for its tea plantations and scenic
              landscapes.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <FaMapMarkerAlt className="text-green-600 mr-2" /> Alleppey
              (Alappuzha)
            </h3>
            <p className="text-gray-600">
              Known for its backwaters and houseboat cruises.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <FaMapMarkerAlt className="text-green-600 mr-2" /> Kochi (Cochin)
            </h3>
            <p className="text-gray-600">
              A historic port city with attractions like Fort Kochi, Chinese
              Fishing Nets, and Mattancherry Palace.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <FaMapMarkerAlt className="text-green-600 mr-2" /> Thekkady
            </h3>
            <p className="text-gray-600">
              Home to the Periyar Wildlife Sanctuary and spice plantations.
            </p>
          </div>

          {/* Card 5 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <FaMapMarkerAlt className="text-green-600 mr-2" /> Kumarakom
            </h3>
            <p className="text-gray-600">
              Famous for its bird sanctuary and backwater tourism.
            </p>
          </div>

          {/* Card 6 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <FaMapMarkerAlt className="text-green-600 mr-2" /> Wayanad
            </h3>
            <p className="text-gray-600">
              Known for its lush forests, wildlife, and waterfalls.
            </p>
          </div>

          {/* Card 7 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <FaMapMarkerAlt className="text-green-600 mr-2" /> Kovalam
            </h3>
            <p className="text-gray-600">
              Renowned for its beautiful beaches and resorts.
            </p>
          </div>

          {/* Card 8 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <FaMapMarkerAlt className="text-green-600 mr-2" /> Varkala
            </h3>
            <p className="text-gray-600">
              Famous for its cliffs and pristine beaches.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800">
          Education and Healthcare
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Kerala boasts one of the highest literacy rates in India, with a
          strong emphasis on education. The state has numerous educational
          institutions, including universities, colleges, and schools that offer
          quality education. Kerala&apos;s healthcare system is also highly
          developed, with a network of hospitals and healthcare centers
          providing excellent medical services to its residents.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800">
          Transportation
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Kerala has a well-developed transportation network, including
          roadways, railways, and waterways. The state is connected by three
          international airports: Thiruvananthapuram, Kochi, and Kozhikode. The
          extensive road network and efficient public transport system make it
          easy for residents and tourists to travel within the state.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800">
          BCabs: Your Trusted Taxi Cab Partner
        </h2>
        <p className="text-gray-600 leading-relaxed">
          For a seamless travel experience across Kerala, choose BCabs. Our
          reliable and comfortable taxi services in Kerala ensure you can
          explore all the major attractions with ease. Whether you&apos;re
          heading to the hills, backwaters, or beaches, BCabs is here to make
          your journey smooth and enjoyable.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800">
          Conclusion
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Kerala, with its unique blend of natural beauty, rich cultural
          heritage, and modern amenities, is truly a remarkable state. Whether
          you&apos;re exploring its scenic landscapes, experiencing its vibrant
          culture, or enjoying its delicious cuisine, Kerala offers an
          unforgettable experience for all who visit. And with BCabs, your
          travel experience in Kerala will be even more convenient and
          enjoyable.
        </p>
      </section>
    </div>
  );
};

export default WelcomeKerala;
