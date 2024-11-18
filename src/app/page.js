import BookNow from "@/components/BookNow/page";
import GeneralContact from "@/components/GeneralContact/page";
import Homepage from "@/components/homepage/page";
import JsonLd from "@/components/homepage/schema-component";
import Image from "next/image";
export const metadata = {
  title: "24/7 Kochi Taxi Cab Service | BCabs Ride Easy…",
  description: "Kochi Airport Taxi, Kerala Tour Taxi and General Taxi Cab Service at Ernakulam, Kochi, Cochin, Also available in all airports of Kerala and major cities of Kerala",
  keywords: "kochi taxi, taxi service in kochi, kochi airport taxi, kerala tour taxi",
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
        <JsonLd></JsonLd>
        <Homepage />
        {/* <GeneralContact /> */}
        {/* <BookNow /> */}
      </>
  );
}
