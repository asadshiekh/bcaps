import { Poppins } from "next/font/google";
import FloatingBtns from "@/components/homepage/floating-btns/page";
import BackToTopButton from "@/components/global/back-to-top";
import { GoogleTagManager } from "@next/third-parties/google";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-TVQ7K9ZK" />
      <body className="relative">
        {/* Google Tag Manager (noscript) */}
        {/* Back to Top Button */}
        <BackToTopButton />

        {/* Page Content */}
        {children}

        {/* Floating Buttons */}
        <FloatingBtns />
      </body>
    </html>
  );
}
