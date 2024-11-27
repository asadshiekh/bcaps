import Image from "next/image";
import Statistics from "./Statistics";
import SocialMedia from "./SocialMedia";

const FooterLogo = () => (
  <div className="text-gray md:col-span-2 xl:pl-12">
    <Image
      src="/images/assets/bcabs-cochin-taxi-logo-white.png"
      alt="logo"
      className="w-60 mb-5"
      width={240}
      height={60}
    />
    <h4>Corporate Office:</h4>
    <p className="text-md">
      <strong>BTransport Solutions Private Limited</strong> <br />
      PRA-167, Pallissery Rd, Palarivattom
      <br /> Kochi, Kerala 682025, India
    </p>

    <Statistics />
    <SocialMedia />
  </div>
);

export default FooterLogo;
