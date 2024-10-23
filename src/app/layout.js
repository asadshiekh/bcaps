import { Poppins } from 'next/font/google';
import './globals.css';
import FloatingBtns from '@/components/homepage/floating-btns/page';
import { FaArrowUp } from 'react-icons/fa';  // Importing the arrow icon
import BackToTopButton from '@/components/global/back-to-top';
import Head from 'next/head';
import Script from 'next/script';

const poppins = Poppins({
  weight: ['300', '400', '500', '700'], // Specify the weights to load
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TVQ7K9ZK');
            `,
          }}
        />
      </Head>

      <body className="relative">
        {/* Google Tag Manager (noscript) */}
        <Script id="gtm-noscript" strategy="afterInteractive">
          {`
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TVQ7K9ZK"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
          `}
        </Script>

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
