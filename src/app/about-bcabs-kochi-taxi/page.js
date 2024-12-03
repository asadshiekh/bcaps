import React from "react";
import Link from "next/link";
import Footer from "@/components/global/footer";
import Header from "@/components/global/header";
import ImageCarousel from "@/components/ImageCarousel";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export const metadata = {
  title: "Kochi Taxi Tariff| 24/7 Kochi Taxi Cab Service | Bcabs Ride Easy…",
  description:
    "Discover competitive Kochi Airport Taxi tariffs with BCabs. Our transparent pricing ensures you get the best value for reliable and comfortable airport transfers. Check our tariff page for detailed rates and book your Kochi Airport Taxi today for a hassle-free travel experience!",
  keywords:
    "kochi airport taxi tariff, kochi cab tariff, ernakulam taxi tariff",
  alternates: {
    canonical: "https://bcabs.com/kochi-taxi-rates", // Update the URL to match your live URL when deployed
  },
  robots: {
    index: false, // Allow indexing of the page
    follow: false, // Allow search engines to follow the links on this page
  },
};

const page = () => {
  return (
    <div>
      <Header />
      {/* banner section */}
      <div className="contact-banner bg-[#f8f9fa] border border-b-2 px-4 lg:px-0 pt-[120px] pb-[20px]">
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
                    About BCabs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-24 lg:pb-32">
        <div className="container mx-auto">
          <ImageCarousel />

          <div className="text-center">
            <h1 className="text-2xl md:text-4xl font-medium leading-relaxed">
              BCabs Ride Easy...
            </h1>
            <h2 className="text-xl md:text-3xl font-medium leading-relaxed">
              24x7 Taxi Cab Service
            </h2>
            <span className="text-base md:text-xl text-[#6c757d] mt-2 block">
              Kerala&apos;s Most Trusted & Largest Taxi Cab Operator
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto mb-8">
        <p className="px-4">
          BCabs was started in the year 2009 in the city of Cochin to provide
          quality vehicle rental service and has been since catering to
          thousands of tourist, businessmen, corporates, instutions etc. with
          varied transport solutions ranging from daily vehicle rentals of
          budget to premium luxury vehicles and further to holiday & business
          trips including corporate transport solutions with an operational
          footprint across the state of Kerala.
        </p>
      </div>

      <div className="container mx-auto">
        <div className="bg-[#f8f9fa] gap-x-6 rounded p-10 flex justify-between items-center flex-wrap lg:flex-nowrap space-y-6 lg:space-y-0">
          <div>
            <h3 className="text-2xl font-semibold">
              <span className="text-[#ed2124]">BCabs</span> is more than just a
              taxi service. We are your trusted travel partner.
            </h3>
            <span className="text-base inline-block font-light mt-1.5">
              Book your ride today and discover the difference.
            </span>
          </div>

          <Link
            href="/book-now"
            className="border uppercase bg-black min-w-[125px] px-8 py-3 text-center rounded-full text-white hover:bg-[#ed2124] hover:border-[#ed2124] text-sm md:text-base"
          >
            Book Now!
          </Link>
        </div>
      </div>

      <div className="pb-12 lg:pb-20">
        <div className="container mx-auto my-12 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Why Choose Us */}
            <div>
              <h3 className="text-2xl font-medium mb-2 pb-2">
                Why choose <span className="text-[#ed2124]">Us.</span>
              </h3>
              <hr className="border border-[#ed2124] mb-6" />
              <p className="text-[15px] leading-relaxed text-gray-700">
                BCabs taxi service offers the best value, comfort, and safety
                for your travel needs. Whether you need a ride to or from the
                various airports in Kerala, a business meeting, wedding,
                shopping trip, or a night out, we have the apt vehicle for you.
                Our drivers are friendly, professional, and knowledgeable, and
                our vehicles are clean, modern, and well-maintained. With BCabs,
                you can relax and enjoy the ride, knowing that you are in good
                hands.
              </p>
            </div>

            {/* Our Mission */}
            <div>
              <h3 className="text-2xl font-medium mb-2 pb-2">
                Our <span className="text-[#ed2124]">Mission.</span>
              </h3>
              <hr className="border border-[#ed2124] mb-6" />
              <p className="text-[15px] leading-relaxed text-gray-700">
                At BCabs 24×7 Taxi Service, we are on a mission to revolutionize
                the way people travel. We believe that quality, comfort, and
                technology are the key factors that make a difference in the
                transportation industry. That&apos;s why we offer our customers
                a fleet of modern, clean, and safe vehicles equipped with the
                latest features and amenities. Our goal is to make every ride an
                enjoyable and hassle-free experience for our customers.
              </p>
            </div>

            {/* BCabs Vision */}
            <div>
              <h3 className="text-2xl font-medium mb-2 pb-2">
                BCabs <span className="text-[#ed2124]">Vision.</span>
              </h3>
              <hr className="border border-[#ed2124] mb-6" />
              <p className="text-[15px] leading-relaxed text-gray-700">
                Our vision at BCabs 24×7 Taxi Service is to become the preferred
                choice of transportation for people who value quality, comfort,
                and technology. We aspire to create a network of loyal customers
                who trust us to deliver a superior service every time. We also
                aim to be a leader in innovation and sustainability by adopting
                the best practices and technologies in the industry. We envision
                a future where travel is easy, enjoyable, and eco-friendly.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f8f9fa] py-16">
        <TestimonialCarousel />
      </div>

      <Footer />
    </div>
  );
};

export default page;
