import BookNow from "@/components/BookNow/page";
import GeneralContact from "@/components/GeneralContact/page";
import Homepage from "@/components/homepage/page";
import Image from "next/image";
export const metadata = {
  title: "24x7 Kochi Taxi Cab Service | Taxi Tariff | BCabs Ride Easy...",
  description: "24x7 Airport Taxi & General Taxi Cab Service at Ernakulam, Kochi, Cochin",
  keywords: "kerala taxi, taxi in cochin, cabs in cochin, kochi taxi, cochin taxi service, kochi airport taxi, kochi taxi fare, kochi cab fare, kochi taxi tariff, cheapest taxi in kerala",
  alternates: {
    canonical: "https://bcabs.com/", // Update the URL to match your live URL when deployed
  },
  robots: {
    index: true, // Allow indexing of the page
    follow: true, // Allow search engines to follow the links on this page
  },

};

export default function Home() {
  
  return (
      <>

        <Homepage />
        {/* <GeneralContact /> */}
        {/* <BookNow /> */}
      </>
  );
}
