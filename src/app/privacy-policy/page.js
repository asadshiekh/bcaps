import Policy from '@/components/Policy/page'
import React from 'react'

export const metadata = {
    title: "24x7 Kochi Taxi Cab Service | Privacy Policy",
    description: "When you use our services, you're agreeing to our terms. So please take a few minutes to read over the below mentioned Terms and Conditions.",
    keywords: "kerala taxi, taxi in cochin, cabs in cochin, kochi taxi, cochin taxi service, kochi airport taxi, kochi taxi fleet, kochi premium cabs fleet, kochi traveller on rent",
    alternates: {
      canonical: "https://bcabs.com/privacy-policy", // Update the URL to match your live URL when deployed
    },
    robots: {
      index: true, // Allow indexing of the page
      follow: true, // Allow search engines to follow the links on this page
    },
  };

const page = () => {
  return (
    <div>
        <Policy />
    </div>
  )
}

export default page