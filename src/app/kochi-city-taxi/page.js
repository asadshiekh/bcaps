import Fleet from '@/components/Fleet/page'
import React from 'react'


export const metadata = {
  title: "Kochi Taxi Fleet | 24/7 Kochi Taxi Cab Service | Bcabs Ride Easy…",
  description: "Explore Kerala with BCabs’ premier fleet of Kerala Tour Taxis. Choose from a wide range of vehicles, including sedans, MUVs, and luxury coaches, perfect for any travel need. Experience comfort, reliability, and exceptional service with Bcabs",
  keywords: "dzire taxi kochi, innova taxi kochi, crysta taxi kochi, kerala tempo traveller",
  alternates: {
    canonical: "https://bcabs.com/kochi-city-taxi", // Update the URL to match your live URL when deployed
  },
  robots: {
    index: true, // Allow indexing of the page
    follow: true, // Allow search engines to follow the links on this page
  },
};

const page = () => {
  return (
    <div>
        <Fleet />
    </div>
  )
}

export default page