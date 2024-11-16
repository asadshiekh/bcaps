import BookNow from '@/components/BookNow/page'
import React from 'react'

export const metadata = {
  title: "Book your taxi cab in Kerala| 24/7 Kochi Taxi Cab and Kochi Airport Taxi Service | Bcabs Ride Easy…",
  description: "Easily book your Kerala Tour Taxi online with BCabs. Our user-friendly booking system ensures a hassle-free experience for all your travel needs in Kerala. Choose from a wide range of vehicles and enjoy reliable, comfortable rides.",
  keywords: "kerala tour taxi, sabarimala taxi, cochin airport taxi",
  alternates: {
    canonical: "https://bcabs.com/book-now", // Update the URL to match your live URL when deployed
  },
  robots: {
    index: true, // Allow indexing of the page
    follow: true, // Allow search engines to follow the links on this page
  },
};


const page = () => {
  return (
    <div>
        <BookNow />
    </div>
  )
}

export default page