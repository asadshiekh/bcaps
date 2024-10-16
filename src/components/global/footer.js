// components/Footer.jsx
import Link from 'next/link';
import { FaChevronRight, FaYoutube, FaFacebookF, FaTwitter, FaGoogle, FaPinterest, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { AiOutlinePhone } from 'react-icons/ai';
import { BsSkype, BsWhatsapp, BsArrowDownRightSquare } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
    <footer className="bg-[#343A40] text-white pt-[40px] pb-[40px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
  
          {/* Second Section: Links */}
          <div className="flex flex-col   text-xl space-y-2">
            {/* <h4 className="font-bold mb-2">Useful Links</h4> */}
            <Link href="#" className="hover:underline flex items-center text-[14px] font-medium"><FaChevronRight className='inline-block text-sm mr-1' size="10" />Home</Link>
            <Link href="#" className=" hover:underline flex items-center text-[14px] font-medium"><FaChevronRight className='inline-block text-sm mr-1' />Fleet </Link>
            <Link href="#" className=" hover:underline flex items-center text-[14px] font-medium"><FaChevronRight className='inline-block text-sm mr-1' />Tariff</Link>
            <Link href="#" className=" hover:underline flex items-center text-[16px] font-medium"><BsArrowDownRightSquare className='inline-block text-md mr-2' />Contact</Link>
            <Link href="#" className=" hover:underline flex items-center text-[14px] font-medium"><FaChevronRight className='inline-block text-sm mr-1' />General Contact</Link>
            <Link href="#" className=" hover:underline flex items-center text-[14px] font-medium"><FaChevronRight className='inline-block text-sm mr-1' />Book Now</Link>
          </div>

          {/* Third Section: Additional Links */}
          <div className="flex flex-col my-5 md:mb-0">
            <h4 className="font-bold mb-1 text-3xl text-gray-200">15,065,421</h4>
            <p className='font-semibold text-gray-400 uppercase'>Total Trips</p>
            <Link href="https://www.facebook.com/bcabs/" target="_blank" className='flex items-center mt-8'>
              <div className='h-[50px] w-[50px] text-white bg-[#3B5998] text-xl flex items-center justify-center rounded-md mr-3'>
                <FaFacebookF />
              </div>
              <div>
                <strong>Like Us</strong>
                <p>on Facebook</p>
              </div>
            </Link>
          </div>
        
          {/* Fourth Section: Stats and Contact */}
          <div className="flex flex-col mb-5 md:mb-0">
            <h4 className="font-bold mb-1 text-3xl text-gray-200">18,465</h4>
            <p className='font-semibold text-gray-400 uppercase'>Regular Clients</p>
            <Link href="https://www.facebook.com/bcabs/" target="_blank" className='flex items-center mt-8'>
              <div className='h-[50px] w-[50px] text-white bg-[#c4302b] text-xl flex items-center justify-center rounded-md mr-3'>
                <FaYoutube />
              </div>
              <div>
                <strong>Subscribe</strong>
                <p> to our Youtube</p>
              </div>
            </Link>
          </div>

          {/* First Section: Logo */}
          <div className="">
            {/* <Image
              src="/images/assets/bcabs-cochin-taxi-logo-white.png" // Replace with your logo image path
              alt="BCabs Logo"
              width={150} // Adjust width as necessary
              height={50}  // Adjust height as necessary
              className="object-contain mb-4"
            /> */}
             <img src='/images/assets/bcabs-cochin-taxi-logo-white.png' alt='logo' className='w-62 mb-5' />
            <h4>Corporate Office:</h4>
            <p className='text-md'>
            <strong>BTransport Solutions Private Limited</strong>
            PRA-167, Pallissery Rd, Palarivattom
            Kochi, Kerala 682025, India
            </p>
    
          </div>
        </div>
      </div>
    </footer>

    <section className="bg-[#2A2E33] text-gray-400 py-8 px-2">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      {/* Left Section */}
      <div className="text-center md:text-left space-y-2">
        <p className='text-sm '>Copyrights © 2024 BTransport Solutions Private Limited, Kochi-25</p>
        <p className='text-sm w-full md:w-[60%] '>
          B-Cabs, B-Cabs logo and Ride Easy... are trademarks or registered
          trademarks of Bintel Ventures (P) Limited - Kochi and is used under
          licence by BTransport Solutions Private Limited. All rights are
          reserved and any legal issues shall be dealt under Kochi
          Jurisdiction.
        </p>
        <div className="flex justify-center md:justify-start mt-5 mb-5 space-x-2 md:space-x-5">
          <a href="#" className="hover:text-white underline decoration-dotted text-[12px] md:text-[13px] text-white">Terms & Conditions</a>
          <a href="#" className="hover:text-white underline decoration-dotted text-[12px] md:text-[13px] text-white">Cancellation & Refund policy</a>
          <a href="#" className="hover:text-white underline decoration-dotted text-[1px]  md:text-[13px] text-white">Privacy Policy</a>
        </div>
      </div>

      {/* Right Section */}
      <div className="text-center md:text-right space-y-2 w-full">
          <div className="flex justify-center md:justify-end space-x-2 md:space-x-8">
              <a href="#" className="hover:text-white"><FaFacebookF /></a>
              <a href="#" className="hover:text-white"><FaTwitter /></a>
              <a href="#" className="hover:text-white"><FaGoogle /></a>
              <a href="#" className="hover:text-white"><FaPinterest /></a>
              <a href="#" className="hover:text-white"><FaInstagram /></a>
            </div>
            <div className="text-center md:text-right space-y-2">
              <p className="flex items-center justify-center md:justify-end space-x-2 mt-4">
                <MdEmail className="text-blue-500" size="15"/>
                <a href="mailto:bcabs@bintel.com" className="hover:text-white text-[13px]">bcabs@bintel.com</a>
                <span className="text-gray-500">·</span>
                <AiOutlinePhone className="text-red-500" size="15" />
                <a href="tel:+919895118877" className="text-red-500 hover:text-white text-[13px]">+91 9895 11 88 77</a>
              </p>
              <p className="flex items-center justify-center md:justify-end  space-x-2 mt-4">
                <BsSkype className="text-blue-500"  size="15"/>
                <a href="skype:BCabsOnSkype?call" className="hover:text-white text-[13px]">BCabsOnSkype</a>
                <span className="text-gray-500">·</span>
                <BsWhatsapp className="text-green-500" size="15" />
                <a href="https://wa.me/919895118877" className="text-green-500 hover:text-white text-[13px]">Connect with us on WhatsApp!</a>
              </p>
            </div>
    
      </div>
    </div>
    </section>
</>
  );
};

export default Footer;
