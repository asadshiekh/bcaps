import React from "react";
import Link from "next/link";
import Footer from "@/components/global/footer";
import Header from "@/components/global/header";
import CochinAirport from "@/components/Welcome/CochinAirport";

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
                    Cochin Airport
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <CochinAirport />

      <Footer />
    </div>
  );
};

export default page;
