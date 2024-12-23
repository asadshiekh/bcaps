import React from "react";
import Link from "next/link";
import Footer from "@/components/global/footer";
import Header from "@/components/global/header";

export const metadata = {
  title: "Kochi Taxi Tariff | 24/7 Kochi Taxi Cab Service | Bcabs Ride Easy",
  description:
    "Discover competitive Kochi Airport Taxi tariffs with BCabs. Our transparent pricing ensures you get the best value for reliable and comfortable airport transfers. Check our tariff page for detailed rates and book your Kochi Airport Taxi today for a hassle-free travel experience!",
  keywords:
    "kochi airport taxi tariff, kochi cab tariff, ernakulam taxi tariff",
  alternates: {
    canonical: "https://bcabs.com/kochi-taxi-rates",
  },
  robots: {
    index: false,
    follow: false,
  },
};

const page = () => {
  return (
    <div>
      <Header />

      <div className="contact-banner bg-[#f8f9fa] border border-b-2 px-8 lg:px-0 pt-[120px] pb-[20px]">
        <div className="container mx-auto">
          <div className="block md:flex items-center justify-between">
            <div>
              <h4 className="text-2xl font-medium">About BCabs</h4>
            </div>
            <div>
              <ul className="flex space-x-3 text-sm text-gray-500">
                <li>
                  <Link href="/" className="hover:text-gray-700">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link
                    href="/kochi-taxi-rates"
                    className="hover:text-gray-700"
                  >
                    About
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link
                    href="/kochi-taxi-rates"
                    className="hover:text-gray-700"
                  >
                    Bcabs Kerala
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-banner bg-[url('https://staging12.autobusparis.com/images/about/bcabs-kochi-taxi-head-office.jpg')] bg-cover bg-center h-[500px] border-b-2 px-8 lg:px-0 pt-[120px] pb-[20px]" />

      {/* Content Section */}
      <div className="container mx-auto px-8 py-16">
        <p className="text-lg text-gray-600 mb-12">
          Nestled on the southwestern coast of India, Kochi City, also known as
          Cochin, is a vibrant blend of history, culture, and modernity. Whether
          you&apos;re a history buff, a nature lover, or a foodie, Kochi has
          something for everyone.
        </p>
        <div className="pb-12 grid grid-cols-1 lg:grid-cols-2 gap-28">
          <div>
            <h2 className="text-3xl font-medium mb-8">
              Top Attractions in Kochi City
            </h2>
            <ul className="space-y-6">
              <li>
                <h3 className="text-xl font-medium mb-3">Fort Kochi</h3>
                <p className="text-gray-600">
                  Wander through the charming streets of Fort Kochi, where
                  colonial architecture meets vibrant street art.
                </p>
              </li>
              <li>
                <h3 className="text-xl font-medium mb-3">
                  Chinese Fishing Nets
                </h3>
                <p className="text-gray-600">
                  Witness the iconic Chinese fishing nets at the Vasco da Gama
                  Square, a testament to Kochi&apos;s rich maritime history.
                </p>
              </li>
              <li>
                <h3 className="text-xl font-medium mb-3">
                  Mattancherry Palace
                </h3>
                <p className="text-gray-600">
                  Explore the Mattancherry Palace, also known as the Dutch
                  Palace, and marvel at its stunning murals and artifacts.
                </p>
              </li>
              <li>
                <h3 className="text-xl font-medium mb-3">Jew Town</h3>
                <p className="text-gray-600">
                  Stroll through Jew Town, home to the Paradesi Synagogue and a
                  bustling market filled with antiques and spices.
                </p>
              </li>
              <li>
                <h3 className="text-xl font-medium mb-3">Marine Drive</h3>
                <p className="text-gray-600">
                  Enjoy a leisurely walk along Marine Drive, offering
                  picturesque views of the backwaters and the city skyline.
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-medium mb-8">Why Visit Kochi City?</h2>
            <ul className="space-y-6">
              <li>
                <h3 className="text-xl font-medium mb-3">
                  Cultural Melting Pot
                </h3>
                <p className="text-gray-600">
                  Experience a unique blend of Indian, Portuguese, Dutch, and
                  British influences.
                </p>
              </li>
              <li>
                <h3 className="text-xl font-medium mb-3">Natural Beauty</h3>
                <p className="text-gray-600">
                  From serene backwaters to lush greenery, Kochi is a paradise
                  for nature enthusiasts.
                </p>
              </li>
              <li>
                <h3 className="text-xl font-medium mb-3">Culinary Delights</h3>
                <p className="text-gray-600">
                  Savor the flavors of Kerala with mouth-watering seafood,
                  traditional Kerala sadhya, and more.
                </p>
              </li>
              <li>
                <h3 className="text-xl font-medium mb-3">
                  Festivals and Events
                </h3>
                <p className="text-gray-600">
                  Participate in vibrant festivals like the Cochin Carnival and
                  the Biennale, showcasing art and culture from around the
                  world.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t">
          <h3 className="text-2xl font-medium mb-6">
            Plan Your Trip to Kochi City
          </h3>
          <p className="text-gray-600 mb-10 mx-auto">
            Ready to explore Kochi City? Plan your trip today and immerse
            yourself in the beauty and culture of this enchanting destination.
            Whether you&apos;re looking for luxury hotels, budget
            accommodations, or unique homestays, Kochi has a range of options to
            suit every traveler. Book your cab with BCabs for a seamless
            experience of Kochi.
          </p>

          <h3 className="text-2xl font-medium mb-6">Kochi City Profile</h3>
          <p className="text-gray-600 mb-10 mx-auto">
            Kochi ([koˈtʃːi ], also known as Cochin, is a major port city on the
            south west coast of India by the Arabian Sea and is part of the
            district of Ernakulam in the state of Kerala. Kochi is often called
            Ernakulam, which refers to the mainland part of the city. The city
            of Kochi (pop. 601,574) is the second largest and most densely
            populated city in the state and is part of an extended metropolitan
            region (pop. 2.1 million), which is the largest urban agglomeration
            in Kerala. Kochi city is also a part of the Greater Cochin region
            and is classified as a Tier-II city by the Government of India. The
            civic body that governs the city is the Cochin Municipal
            Corporation, which was constituted in the year 1967, and the
            statutory bodies that oversee its development are the Greater Cochin
            Development Authority (GCDA) and the Goshree Islands Development
            Authority (GIDA).
          </p>

          <p className="text-gray-600 mb-10 mx-auto">
            Known as the Queen of the Arabian Sea, Kochi was an important spice
            trading centre on the west coast of India from the 14th century.
            Occupied by the Portuguese Empire in 1503, Kochi was the first of
            the European colonies in colonial India. It remained the main seat
            of Portuguese India until 1530, when Goa was chosen instead. The
            city was later occupied by the Dutch and the British, with the
            Kingdom of Cochin becoming a princely state. Kochi ranks first in
            the total number of international and domestic tourist arrivals in
            Kerala. Kochi has been ranked the sixth best tourist destination in
            India according to a survey conducted by the Nielsen Company on
            behalf of the Outlook Traveller magazine. Kochi was one of the 28
            Indian cities found to be among the emerging 440 global cities that
            will contribute 50% of the world GDP by the year 2025, in a study
            done by McKinsey Global Institute.
          </p>

          <p className="text-gray-600 mb-10 mx-auto">
            Kochi is the home to Southern Naval Command of the Indian Navy and
            the state headquarters of the Indian Coast Guard with an attached
            air squadron, named Air Squadron 747. Commercial maritime facilities
            of the city include the Port of Kochi, an International Container
            Transshipment Terminal, the Cochin Shipyard, offshore SPM of the
            Kochi Refineries, and the Kochi Marina. Kochi is also home for the
            Cochin Stock Exchange, International Pepper Exchange,industries like
            HMT , Cyber City , Kinfra Hi-Tech Park major chemical industries
            like the FACT, TCC, IREL, HOCL[18] and Kochi Refineries, electrical
            industries like TELK and industrial parks like the Cochin Special
            Economic Zone and Infopark. Kochi is home for the High Court of
            Kerala and Lakshadweep, and the Cochin University of Science and
            Technology. Kochi is also home for Kerala&apos;s National Law
            School, The National University of Advanced Legal Studies.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
