import React from "react";
import Link from "next/link";
import { MdStars } from "react-icons/md";
import { FaCarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import Footer from "@/components/global/footer";
import Header from "@/components/global/header";
import BannerForm from "@/components/BannerForm/page";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import TourPackageAccordion from "@/components/Accordion/TourPackageAccordion";

export const metadata = {
  title: "Kerala tour package, Tour Package, Kerala Tour",
  description:
    "Explore Kerala with BCabs: Top taxi services for tours, airport pickups, & local sights. Comfortable rides, tailored packages, 24/7 support.",
  keywords:
    "taxis services in Kerala, Kerala taxi packages, taxi at Kerala, Kerala best taxi service",
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
                    Kerala Tour Package
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <BannerForm />

      <div className="bg-white py-12 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold">
              24-Hour Taxi Cab Services in Kerala
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
                <span className="text-lg">
                  English and Hindi Speaking Chauffeurs
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✔</span>
                <span className="text-lg">
                  Proud receipient of the 2024 Tripadvisors Travellers Choice
                  Award
                </span>
              </li>
            </ul>
          </div>

          <div className="text-left">
            <h3 className="text-xl md:text-2xl font-semibold">
              Discover Kerala with BCabs Taxi Services
            </h3>
            <p className="mt-4 text-gray-700">
              Kerala is one of the most beautiful parts of India, renowned for
              its rich wildlife, cultural hotspots, and natural beauty. Our taxi
              services in Kerala transport you from the airport, train station,
              or hotel to any destination within the local region.
            </p>
            <p className="mt-4 text-gray-700">
              BCabs is the best Kerala taxi service, guaranteeing a comfortable,
              luxurious experience for every traveller. Our friendly chauffeurs
              speak either English or Hindi, providing insightful advice on
              Kerala and its attraction. We’re committed to making your trip as
              simple and enjoyable as possible.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto pt-20 pb-10 border-t border-gray-300 px-4">
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

        <div className="bg-white py-12 px-4 md:px-8">
          <div className="container mx-auto">
            <div className="text-left">
              <h3 className="text-xl md:text-2xl font-semibold">
                Explore Kerala’s Top Destinations
              </h3>
              <p className="mt-4 text-gray-700">
                Kerala is an enchanting paradise covering a vast stretch of
                India’s southern coastline, from Poovar up to Manjeshwar.
                Travelling through this region is a challenge for tourists eager
                to see what the landscape and culture have to offer. That’s
                where we come in.
              </p>
              <p className="mt-4 text-gray-700">
                Our taxi services in Kerala help you visit all the top sights,
                including Munnar, Thekkady, Alleppey, Kovalam, or any other part
                of the region. Better still, our friendly drivers can help
                advise you on the best places to visit.
              </p>
              <p className="mt-4 text-gray-700">
                We offer personalised and affordable travel packages, working
                around your itinerary. Wherever you want to go, we’ll provide a
                bespoke offer just for you.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-10 overflow-auto scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-gray-600 scrollbar-track-gray-300">
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
            Comfortable Rides for Every Traveller
          </h3>
          <p className="mt-4 text-gray-700">
            Your comfort is our top priority. We maintain a fleet of exceptional
            vehicles, from sedans and SUVs to luxury coaches. Whether you’re a
            small group or a large cohort, we’ve got the right vehicle to
            transport you comfortably and securely throughout Kerala. That’s a
            promise.
          </p>
          <p className="mt-4 text-gray-700">
            Each vehicle is guaranteed to take you to your destination. With
            more than 25+ categories of vehicles, we’re confident we’ve got the
            premier transportation option for your trip to India’s natural
            paradise.{" "}
            <a href="/kochi-city-taxi" className="text-[#ed2124]">
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
          <a href="/book-now">
            <strong className="underline">Book your BCabs Now!</strong>{" "}
          </a>
        </h3>
      </div>

      <TourPackageAccordion />

      <Footer />
    </div>
  );
};

export default page;
