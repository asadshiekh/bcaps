import { MdEmail } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import Link from "next/link";
import { FaPinterestP } from "react-icons/fa";
import { GrFacebookOption, GrGoogle } from "react-icons/gr";
import { BsInstagram, BsSkype, BsTwitterX, BsWhatsapp } from "react-icons/bs";

const FooterBase = () => (
  <section className="bg-[#2A2E33] text-gray py-8 px-4 md:px-2">
    <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-6 md:space-y-0">
      <div className="text-center lg:text-left space-y-2">
        <p className="text-sm text-[#FFFFFF66] w-full lg:w-[75%]">
          Copyrights © 2024 BTransport Solutions Private Limited, Kochi-25
          B-Cabs, B-Cabs logo and Ride Easy... are trademarks or registered
          trademarks of Bintel Venutres (P) Limited - Kochi and is used under
          licence by BTransport Solutions Private Limited. All rights are
          reserved and any legal issues shall be dealt under Kochi
          Jurisdication.
        </p>
        <div className="flex flex-row justify-center text-[#adb5bd] lg:justify-start mt-3 space-x-5">
          <a
            href="/terms"
            className="hover:text-white underline decoration-dotted"
          >
            Terms
          </a>
          <a
            href="/refund-policy"
            className="hover:text-white underline decoration-dotted"
          >
            Refund Policy
          </a>
          <a
            href="/privacy-policy"
            className="hover:text-white underline decoration-dotted"
          >
            Privacy Policy
          </a>
        </div>
      </div>

      <div className="flex flex-col justify-end w-full items-center lg:items-end md:text-right">
        <ul className="flex space-x-3 text-[#FFFFFF66] mb-4">
          <li>
            <Link href="/" className="flex p-2 rounded-md">
              <GrFacebookOption size={15} />
            </Link>
          </li>
          <li>
            <Link href="/" className="flex p-2 rounded-md">
              <BsTwitterX size={15} />
            </Link>
          </li>
          <li>
            <Link href="/" className="flex p-2 rounded-md">
              <GrGoogle size={15} />
            </Link>
          </li>
          <li>
            <Link href="/" className="flex p-2 rounded-md">
              <FaPinterestP size={15} />
            </Link>
          </li>
          <li>
            <Link href="/" className="flex p-2 rounded-md">
              <BsInstagram size={15} />
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-x-3">
          <div className="flex items-center gap-1.5 text-sm text-[#87CEEB]">
            <MdEmail size="15" /> bcabs@bintel.com
          </div>
          <div className="flex items-center gap-1.5 text-sm text-[#ed2124]">
            <AiOutlinePhone size="15" /> +91 9895 11 88 77
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-sm py-1 text-[#00aff0]">
          <BsSkype size="15" /> BCabsOnSkype
        </div>
        <div className="flex items-center gap-1.5 text-sm text-[#25D366]">
          <BsWhatsapp size="15" /> Connect with us on WhatsApp
        </div>
      </div>
    </div>
  </section>
);

export default FooterBase;
