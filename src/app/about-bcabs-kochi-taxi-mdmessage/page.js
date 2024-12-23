import React from "react";
import Link from "next/link";
import Footer from "@/components/global/footer";
import Header from "@/components/global/header";

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
                    Md&apos;s Message
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="bg-[#f8f9fa] p-8 rounded-lg shadow-lg max-w-4xl w-full">
          <div className="text-center">
            <h1 className="text-4xl font-medium text-gray-800 mb-4">
              My Dear & Valued Guests
            </h1>
            <p className="text-xl text-gray-600 mb-6">Warm Greetings</p>
          </div>
          <div className="text-lg text-gray-700 space-y-4">
            <p>
              First off, I would like to personally thank you for choosing
              B-Cabs Ride Easy for your transportation and travelling needs.
              Hosting and serving a guest is one of the most prominent
              traditions that our culture honors us with. In keeping up with
              this profound tradition, we welcome you to experience the sheer
              pleasure of luxury with our service.
            </p>
            <p>
              At all Bintel concerns, we sincerely believe that success is in
              treasuring this wonderful legacy and heritage.
            </p>
            <p>
              If there are any suggestions or concerns, please do write to me at{" "}
              <a
                href="mailto:gazal@bintel.com"
                className="text-indigo-600 hover:underline"
              >
                gazal@bintel.com
              </a>
              .
            </p>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-600">--</p>
            <p className="font-medium text-gray-800 text-xl mt-2">
              Gazal Mohamed
            </p>
            <p className="text-gray-600 text-sm">Managing Director</p>
            <p className="text-gray-600 text-sm">Bintel Group</p>
            <p className="mt-2">
              <a
                href="https://www.facebook.com/gazal.mohamederattakulam"
                className="text-indigo-600 hover:underline text-sm"
              >
                Facebook Profile
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
