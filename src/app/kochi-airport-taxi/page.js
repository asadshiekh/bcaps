import React from "react";
import Link from "next/link";
import Footer from "@/components/global/footer";
import Header from "@/components/global/header";
import { MdStars } from "react-icons/md";
import { FaCarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import AirportTaxtAccordion from "@/components/Accordion/AirportTaxtAccordion";

export const metadata = {
  title: "Kochi airport taxi, Kochi taxi, airport taxi in Kochi",
  description:
    "Reliable Kochi Airport Taxi Services by BCabs: Comfortable rides, 24/7 availability, expert drivers, & seamless transfers from all terminals.",
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
              <h4 className="text-2xl font-medium">
                Services : Kochi Cab Service
              </h4>
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
                    Services
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link
                    href="/kochi-taxi-rates"
                    className="hover:text-gray-700"
                  >
                    Kochi Airport Taxi
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-12 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Comfortable Rides for Kochi Airport Transfers
            </h2>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✔</span>
                <span className="text-lg">1000+ 5-Star Reviews</span>
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✔</span>
                <span className="text-lg">15+ Years of Service</span>
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✔</span>
                <span className="text-lg">Well-maintained vehicles</span>
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✔</span>
                <span className="text-lg">
                  All-inclusive fares, no additional or hidden charges
                </span>
              </li>
            </ul>
          </div>

          <div className="text-left">
            <h3 className="text-xl md:text-2xl font-semibold">
              Kochi Airport Taxi Services with BCabs
            </h3>
            <p className="mt-4 text-gray-700">
              Travelling to and from Kochi Airport (Cochin International
              Airport) is either the first or last part of your trip. BCabs is
              committed to ensuring everything runs smoothly. Whether we’re
              picking you up from arrivals or dropping you off at departures, we
              arrive on time, ready to take you to your destination.
            </p>
            <p className="mt-4 text-gray-700">
              We can take you anywhere in Kerala or the surrounding states.
              Simply make a reservation, let us know your drop-off point, and we
              will handle the rest.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-20 border-t border-gray-300 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="feature-box flex flex-col items-center mb-3 px-4">
            <div className="mr-3 mb-4">
              <Link href="/kochi-city-taxi">
                <MdStars className="text-[#ed2124] text-4xl" />
              </Link>
            </div>
            <h4 className="text-xl font-medium mb-2">5-Star Service</h4>
            <p className="text-gray-500 text-center">
              We’re proud to have earned over 1,000 5-star ratings from our
              customers on Google, Facebook, and TripAdvisor.
            </p>
          </div>

          <div className="feature-box flex flex-col items-center mb-3 px-4">
            <div className="mr-3 mb-4">
              <Link href="/kochi-city-taxi">
                <FaCarAlt className="text-[#ed2124] text-4xl" />
              </Link>
            </div>
            <h4 className="text-xl font-medium mb-2">
              Guaranteed Satisfaction
            </h4>
            <p className="text-gray-500 text-center">
              We promise to live up to your expectations, arrive on time, and
              provide a comfortable mode of transportation.
            </p>
          </div>

          <div className="feature-box flex flex-col items-center mb-3 px-4">
            <div className="mr-3 mb-4">
              <Link href="/kochi-city-taxi">
                <FaClock className="text-[#ed2124] text-4xl" />
              </Link>
            </div>
            <h4 className="text-xl font-medium mb-2">24/7 Support</h4>
            <p className="text-gray-500 text-center">
              You can speak to our team at any time of day. Let us know your
              concerns, and we’ll work hard to resolve any issues.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="text-left">
          <h3 className="text-xl md:text-2xl font-semibold">
            Comfortable Rides for Every Traveler
          </h3>
          <p className="mt-4 text-gray-700">
            BCabs maintains a fleet of exceptional vehicles, from affordable
            sedans to luxury SUVs. Each of our vehicles is fully serviced and
            sanitised to provide the highest quality to our customers. All of
            our vehicles are available as a Kochi airport taxi.
          </p>
          <p className="mt-4 text-gray-700">
            If you’re travelling as part of a larger group, we offer both
            minivans and coaches to transport people to their final destination.
            Please speak to our team for further information.
          </p>
        </div>

        <div className="my-10 overflow-auto scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-gray-600 scrollbar-track-gray-300">
          <table className="border border-1 border-gray-300 w-full text-center">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="border border-r-2 border-gray-500 p-2">
                  Vehicle <br />
                  (Make/Model)
                </th>
                <th className="border border-r-2 border-gray-500 p-2">
                  Seating Capacity
                </th>
                <th className="border border-r-2 border-gray-500 p-2">
                  Minimum Tariff
                </th>
                <th
                  className="border border-r-2 border-gray-500 p-2"
                  colSpan="2"
                >
                  Additional Hour/Km
                  <br />
                  whichever comes higher
                </th>
                <th className="border border-r-2 border-gray-500 p-2">
                  8Hours
                  <br />
                  Local/Outstation
                </th>
                <th className="border border-r-2 border-gray-500 p-2">
                  Day Package
                </th>
                <th className="border border-r-2 border-gray-500 p-2">
                  Airport Transfer
                  <br />
                  (City Limits)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-2 border-gray-400 p-2 w-40 sticky left-0 bg-gray-200 md:bg-white">
                  <strong>Suzuki Dzire Toyota Etios Ford Aspire</strong>
                  <br />
                  Sedan
                </td>
                <td className="border border-2 border-gray-400 p-2">4+1</td>
                <td className="border border-2 border-gray-400 p-2">
                  ₹1,300 <br /> (4hrs/40Kms)
                </td>
                <td className="border border-2 border-gray-400 p-2">₹200</td>
                <td className="border border-2 border-gray-400 p-2">₹18</td>
                <td className="border border-2 border-gray-400 p-2">₹2,200</td>
                <td className="border border-2 border-gray-400 p-2">₹2,400</td>
                <td className="border border-2 border-gray-400 p-2">₹1,300</td>
              </tr>
              <tr>
                <td className="border border-2 border-gray-400 p-2 w-40 sticky left-0 bg-gray-200 md:bg-white">
                  <strong>Suzuki Ertiga</strong>
                  <br />
                  Compact MUV
                </td>
                <td className="border border-2 border-gray-400 p-2">6+1</td>
                <td className="border border-2 border-gray-400 p-2">
                  ₹2,400 <br /> (8hrs/80Kms)
                </td>
                <td className="border border-2 border-gray-400 p-2">₹225</td>
                <td className="border border-2 border-gray-400 p-2">₹20</td>
                <td className="border border-2 border-gray-400 p-2">₹2,400</td>
                <td className="border border-2 border-gray-400 p-2">₹2,800</td>
                <td className="border border-2 border-gray-400 p-2">₹1,700</td>
              </tr>
              <tr>
                <td className="border border-2 border-gray-400 p-2 w-40 sticky left-0 bg-gray-200 md:bg-white">
                  <strong>Toyota Innova Mahindra Marrazo</strong>
                  <br />
                  Luxury MUV
                </td>
                <td className="border border-2 border-gray-400 p-2">
                  6+1 and 7+1
                </td>
                <td className="border border-2 border-gray-400 p-2">
                  ₹3,000 <br /> (8hrs/80Kms)
                </td>
                <td className="border border-2 border-gray-400 p-2">₹300</td>
                <td className="border border-2 border-gray-400 p-2">₹23</td>
                <td className="border border-2 border-gray-400 p-2">₹3,000</td>
                <td className="border border-2 border-gray-400 p-2">₹3,500</td>
                <td className="border border-2 border-gray-400 p-2">₹3,000</td>
              </tr>
              <tr>
                <td className="border border-2 border-gray-400 p-2 w-40 sticky left-0 bg-gray-200 md:bg-white">
                  <strong>Toyota Innova Crysta</strong>
                  <br />
                  Ultra Luxury MUV
                </td>
                <td className="border border-2 border-gray-400 p-2">7+1</td>
                <td className="border border-2 border-gray-400 p-2">
                  ₹3,500 <br /> (8hrs/80Kms)
                </td>
                <td className="border border-2 border-gray-400 p-2">₹350</td>
                <td className="border border-2 border-gray-400 p-2">₹28</td>
                <td className="border border-2 border-gray-400 p-2">₹3,500</td>
                <td className="border border-2 border-gray-400 p-2">₹4,000</td>
                <td className="border border-2 border-gray-400 p-2">₹3,500</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-left">
          <h3 className="text-xl md:text-2xl font-semibold">
            Seamless Transfers for Domestic and International Terminals
          </h3>
          <p className="mt-4 text-gray-700">
            We can provide a pickup or drop-off service for both domestic and
            international terminals at Cochin International Airport. Our
            friendly drivers are highly familiar with the airport, ensuring the
            shortest possible route. We provide a quick, reliable, and efficient
            service that gets you where you need to be when you need to be
            there. With competitive pricing, expert local knowledge, and a focus
            on customer satisfaction, BCabs is your trusted travel partner for
            hassle-free airport transfers. View our full fleet at{" "}
            <a href="/fleet" className="text-[#ed2124]">
              Fleet Page
            </a>
          </p>
        </div>
      </div>

      <div className="my-10">
        <TestimonialCarousel />
      </div>

      <div className="py-10 text-white text-center text-2xl md:text-3xl bg-[#ed2124] hover:bg-black transition-all">
        <h3>
          Ready for unmatched convenience,{" "}
          <strong className="underline">Book your BCabs Now!</strong>{" "}
        </h3>
      </div>

      <AirportTaxtAccordion />

      <Footer />
    </div>
  );
};

export default page;
