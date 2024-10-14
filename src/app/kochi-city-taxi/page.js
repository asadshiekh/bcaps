import Fleet from '@/components/Fleet/page'
import React from 'react'


export const metadata = {
  title: "24x7 Kochi Taxi Cab Service | Our Taxi Fleet | BCabs Ride Easy...",
  description: "24x7 Airport Taxi & General Taxi Cab Service at Ernakulam, Kochi, Cochin",
  keywords: "kerala taxi, taxi in cochin, cabs in cochin, kochi taxi, cochin taxi service, kochi airport taxi, kochi taxi fleet, kochi premium cabs fleet, kochi traveller on rent",
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