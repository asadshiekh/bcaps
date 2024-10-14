import BookNow from '@/components/BookNow/page'
import React from 'react'

export const metadata = {
  title: "Book your BCabs now in Kerala | BCabs | 24x7 Airport Taxi & General Taxi Cab Service in Kerala",
  description: "24x7 Airport Taxi & General Taxi Cab Service at Ernakulam, Kochi, Cochin",
  keywords: "kerala taxi, taxi in cochin, cabs in cochin, kochi taxi, cochin taxi service, kochi airport taxi, book a taxi in kerala, book a cab for your kerala tour",
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