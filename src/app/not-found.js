import Footer from "@/components/global/footer";
import Header from "@/components/global/header";

export const metadata = {
  title: "Page Not Found - BCabs",
  description:
    "The page you are looking for does not exist. Explore our taxi services including Kochi Airport Taxi, Kerala Tour Taxi, and more.",
  keywords: "404, page not found, BCabs, kochi taxi, kerala taxi",
  alternates: {
    canonical: "https://bcabs.com/404", // Update with the actual 404 page URL
  },
  robots: {
    index: false, // Prevent indexing of the 404 page
    follow: false, // Prevent search engines from following links on the 404 page
  },
};

export default function Custom404() {
  return (
    <>
<Header></Header>
<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Page Not Found</p>
      <a
        href="/"
        className="border border-red bg-[#ed2124] px-4 py-2 rounded-md text-white inline-block hover:bg-[#ed2124] hover:border-[#ed2124] cursor-pointer text-sm md:text-base"
      >
        Go Back Home
      </a>
    </div>
    <Footer></Footer>

    </>
    
  );
}
