import GeneralContact from '@/components/GeneralContact/page'
import JsonLd from '@/components/GeneralContact/schema-component';
import React from 'react'


export const metadata = {
  title: "Contact us| 24/7 Kochi Taxi Cab and Kochi Airport Taxi Service | Bcabs Ride Easy…",
  description: "Get in touch with BCabs for reliable Taxi cab service in Kerala. Our dedicated team is here to assist you with bookings, inquiries, and support. ",
  keywords: "ernakulam taxi, palarivattom taxi, cochin taxi",
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
      <JsonLd></JsonLd>
       <GeneralContact /> 
       
    </div>
  )
}

export default page