import GeneralContact from '@/components/GeneralContact/page'
import React from 'react'


export const metadata = {
  title: "4x7 Kochi Taxi Cab Service | Contact BCabs 24x7 | BCabs Ride Easy...",
  description: "24x7 Airport Taxi & General Taxi Cab Service at Ernakulam, Kochi, Cochin",
  keywords: "kerala taxi, taxi in cochin, cabs in cochin, kochi taxi, cochin taxi service, kochi airport taxi, 24x7 taxi service in kerala, contact bcabs taxi, best taxi in kerala",
  alternates: {
    canonical: "https://bcabs.com/general-contact", // Update the URL to match your live URL when deployed
  },
  robots: {
    index: true, // Allow indexing of the page
    follow: true, // Allow search engines to follow the links on this page
  },
};

const page = () => {
  return (
    <div>
       <GeneralContact /> 
       
    </div>
  )
}

export default page