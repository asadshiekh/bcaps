import { Poppins } from 'next/font/google';
import './globals.css';
import FloatingBtns from '@/components/homepage/floating-btns/page';
import { FaArrowUp } from 'react-icons/fa';  // Importing the arrow icon
import BackToTopButton from '@/components/global/back-to-top';

const poppins = Poppins({
  weight: ['300', '400', '500', '700'], // Specify the weights to load
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        
      <BackToTopButton></BackToTopButton>

        {children}

        <FloatingBtns />
  
   
      </body>
    </html>
  );
}
