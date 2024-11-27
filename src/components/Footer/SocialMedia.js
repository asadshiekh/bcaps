import { FaFacebookF, FaYoutube } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://www.facebook.com/bcabs/",
    label: "Like Us",
    platform: "Facebook",
    icon: FaFacebookF,
    color: "#3B5998",
  },
  {
    href: "https://www.youtube.com/@bcabs",
    label: "Subscribe",
    platform: "Youtube",
    icon: FaYoutube,
    color: "#c4302b",
  },
];

const SocialMedia = () => (
  <div className="flex mt-8 lg:mt-12">
    {socialLinks.map(({ href, label, platform, icon: Icon, color }, index) => (
      <a
        key={index}
        href={href}
        target="_blank"
        className="flex items-center mr-12 md:mr-20"
      >
        <div
          className={`h-[40px] w-[40px] text-gray text-xl flex items-center justify-center rounded-md mr-3`}
          style={{ backgroundColor: color }}
        >
          <Icon />
        </div>
        <div>
          <small>
            <strong>{label}</strong>
            <p>{`on ${platform}`}</p>
          </small>
        </div>
      </a>
    ))}
  </div>
);

export default SocialMedia;
