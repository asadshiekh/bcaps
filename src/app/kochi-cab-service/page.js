import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/global/footer";
import Header from "@/components/global/header";
import { FaChevronRight } from "react-icons/fa6";
import ServicesSection from "@/components/Services";
import Features from "@/components/homepage/features/page";

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
                    Kochi Cab Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <ServicesSection />

        <Features />

        <div className="featured-car mt-10">
          <div className="container mx-auto bg-[#003458]  p-5 lg:p-20 text-white rounded-md">
            <div className="grid  grid-cols-1 md:grid-cols-2 gap-20">
              <div>
                <h4 className="text-3xl mb-5 font-semibold">
                  Luxury Coach Rental
                </h4>
                <p className="mb-5 text-gray-100">
                  If you are looking for a comfortable and convenient way to
                  travel with your group to Kerala, look no further than BCabs
                  Traveller and Bus rental service at Kochi. We offer a range of
                  coaches that can accommodate from 12 to 50 passengers, all
                  equipped with modern amenities and safety features. Whether
                  you need a coach for a corporate event, a wedding, a
                  sightseeing tour, or any other occasion, we can provide you
                  with the best option for your needs and budget.
                </p>
                <Link href="/kochi-city-taxi" className="font-semibold">
                  Visit our Coaches fleet page for more information{" "}
                  <FaChevronRight className="inline-block" />
                </Link>
              </div>
              <div>
                <Image
                  src="/images/assets/kochi-bus-rental.jpg"
                  alt="kochi-bus-rental"
                  className="w-full"
                  layout="responsive" // Optional: Use layout if you want responsive behavior
                  width={500} // Set an appropriate width
                  height={500} // Set an appropriate height
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
              <div>
                <h4 className="font-semibold">Executive Force AC Travellers</h4>
                <p className="text-gray-200">
                  Force Traveller is India&apos;s most sought after people
                  mover; it comes in 12,17 and 26 Seater configuration; we have
                  a large fleet of the same operating out of Kochi, Trivandrum
                  and Kozhikode
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Luxury Force AC Travellers</h4>
                <p className="text-gray-200">
                  Apart from the Executive segment, we are the only Taxi
                  operator in Kochi having customised luxury Force Travellers in
                  the seating configuration of 8,10 and 14 which commands
                  luxrious seats and enhanced leg space
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Mercedes Benz Luxury AC Coach</h4>
                <p className="text-gray-200">
                  Our BCabs Kochi depot has a range of Mercedes Benz luxury
                  coaches, with a seating capacity of either 35 Seats or 45
                  Seats, these vehicles are not only luxury but are equipped
                  with modern amenities and safety features.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">AC Air Bus</h4>
                <p className="text-gray-200">
                  If you are looking for a comfortable and economical way to
                  travel in Kerala with a large group of people, you might want
                  to consider our range of Air Buses having seating capacity
                  from 30 to 50 Seater.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <section className="bg-[#f8f9fa] rounded-lg py-10 px-10 md:py-20 md:px-20 my-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <img
                src="https://staging12.autobusparis.com/images/about/bcabs-kochi-cabs.jpg"
                alt="Corporate Transport Solutions"
                className="shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-medium text-gray-800">
                Corporate Transport Solutions
              </h2>
              <p className="text-gray-600 mt-4">
                Does your company or organization use B-Cabs Ride Easy...
                regularly in Kerala? Look into the benefits of a B-Cabs
                Corporate Account.
              </p>
              <a
                href="tel:your-hotline-number"
                className="text-blue-500 font-medium mt-4 inline-block"
              >
                Call our hotline now!
              </a>
            </div>
          </div>

          <div className="flex">
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-800">Branding</h3>
                <p className="text-gray-600 mt-2">
                  We provide vehicles on a yearly contract basis by branding it
                  with your logo and uniform, enhancing your brand visibility.
                  At present, we cater on a similar basis to various hotels,
                  hospitals, and corporates. Some of our clients in this sector
                  are BCPL, KTDC, etc.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  Corporate Transportation Packages
                </h3>
                <p className="text-gray-600 mt-2">
                  Our expert transportation coordinators shall collect your
                  requirements to create a custom package for your organization.
                  This ensures all of your needs are met. No organization is too
                  large or too small for our reliable and experienced
                  transportation services!
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  Group/Event Transportation
                </h3>
                <p className="text-gray-600 mt-2">
                  Whether your group is 1 or 50,000, we handle all of your
                  event&apos;s transportation logistics so you won&apos;t have
                  to worry! BCabs have been providing reliable large group
                  transportation services for events including Conferences,
                  Conventions, Expos, Trade Shows, and more in and around Cochin
                  City!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="py-10 text-white text-center text-2xl md:text-3xl bg-[#ed2124] hover:bg-black transition-all">
        <h3>
          Ready for unmatched convenience,{" "}
          <a href="/book-now">
            <strong className="underline">Book your BCabs Now!</strong>{" "}
          </a>
        </h3>
      </div>

      <Footer />
    </div>
  );
};

export default page;
