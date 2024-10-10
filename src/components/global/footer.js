// components/Footer.jsx
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* First Section: Logo */}
          <div className="">
            <Image
              src="/images/assets/bcabs-cochin-taxi-logo-white.png" // Replace with your logo image path
              alt="BCabs Logo"
              width={150} // Adjust width as necessary
              height={50}  // Adjust height as necessary
              className="object-contain mb-4"
            />
            <h4>Corporate Office:</h4>
            <p>
            BTransport Solutions Private Limited
            PRA-167, Pallissery Rd, Palarivattom
            Kochi, Kerala 682025, India
            </p>
    
          </div>

          {/* Second Section: Links */}
          <div className="flex flex-col  pl-0 lg:pl-[30px]">
            <h4 className="font-bold mb-2">Useful Links</h4>
            <Link href="#" className="font-light hover:underline">About Us</Link>
            <Link href="#" className="font-light hover:underline">Our Services</Link>
            <Link href="#" className="font-light hover:underline">Contact Us</Link>
            <Link href="#" className="font-light hover:underline">FAQ</Link>
          </div>

          {/* Third Section: Additional Links */}
          <div className="flex flex-col">
            <h4 className="font-bold mb-2">Quick Links</h4>
            <Link href="#" className="font-light hover:underline">Terms & Conditions</Link>
            <Link href="#" className="font-light hover:underline">Privacy Policy</Link>
            <Link href="#" className="font-light hover:underline">Blog</Link>
            <Link href="#" className="font-light hover:underline">Careers</Link>
          </div>

          {/* Fourth Section: Stats and Contact */}
          <div className="flex flex-col">
            <h4 className="font-bold mb-2">Stats</h4>
            <p>Total Trips: <span className="font-semibold">15,065,421</span></p>
            <p>Regular Clients: <span className="font-semibold">18,465</span></p>
            <div className="mt-4">
              <p>bcabs@bintel.com</p>
              <p>+91 9895 11 88 77</p>
              <p>BCabsOnSkype</p>
              <p>Connect with us on <Link href="https://wa.me/919895118877?text=Just%20visited%20www.bcabs.com,%20would%20like%20to%20get%20a%20quote?" className="text-blue-400 hover:underline">WhatsApp</Link>!</p>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
