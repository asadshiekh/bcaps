import BookNow from "@/components/BookNow/page";
import GeneralContact from "@/components/GeneralContact/page";
import Homepage from "@/components/homepage/page";
import Image from "next/image";

export const metadata = {
  title: "Home Page",
  description: "Home Page Description",
  keywords: "about us, company, business, values, mission",
  alternates: {
    canonical: "http://localhost:3000/home", // Update the URL to match your live URL when deployed
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
