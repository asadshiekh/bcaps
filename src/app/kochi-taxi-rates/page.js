import Tariff from '@/components/Tariff/page'
import React from 'react'

export const metadata = {
  title: "Kochi Taxi Tariff| 24/7 Kochi Taxi Cab Service | Bcabs Ride Easy…",
  description: "Discover competitive Kochi Airport Taxi tariffs with BCabs. Our transparent pricing ensures you get the best value for reliable and comfortable airport transfers. Check our tariff page for detailed rates and book your Kochi Airport Taxi today for a hassle-free travel experience!",
  keywords: "kochi airport taxi tariff, kochi cab tariff, ernakulam taxi tariff",
  alternates: {
    canonical: "https://bcabs.com/kochi-taxi-rates", // Update the URL to match your live URL when deployed
  },
  robots: {
    index: true, // Allow indexing of the page
    follow: true, // Allow search engines to follow the links on this page
  },
};

const page = () => {
  return (
    <div>
        <Tariff />
    </div>
  )
}

export default page