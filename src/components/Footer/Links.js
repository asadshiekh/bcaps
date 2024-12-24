import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";

const links = [
  { section: "", items: [{ href: "/", text: "Home" }] },
  {
    section: "About",
    items: [
      { href: "/about-bcabs-kochi-taxi", text: "About BCabs" },
      { href: "/about-bcabs-kochi-taxi-mdmessage", text: "MD's Message" },
      { href: "/about-bcabs-kerala", text: "About Kerala" },
      { href: "/about-bcabs-kochi", text: "About Kochi" },
      { href: "/about-cochin-airport", text: "About Cochin Airport" },
    ],
  },
  {
    section: "Fleet",
    items: [
      { href: "/kochi-city-taxi", text: "General" },
      { href: "/", text: "Premium" },
      { href: "/", text: "Coach" },
      { href: "/", text: "Caravan" },
      { href: "/", text: "Special Vehicles" },
    ],
  },
];

const Links = () => (
  <div className="flex flex-col text-xl space-y-4 w-full text-gray-200">
    {links.map(({ section, items }, sectionIndex) => (
      <div key={sectionIndex}>
        <h2 className="text-[14px] font-semibold mb-2">{section}</h2>
        <div className="flex flex-col space-y-1">
          {items.map(({ href, text }, index) => (
            <Link
              key={index}
              href={href}
              className="hover:underline flex items-center text-[14px] font-medium -ml-2"
            >
              <IoMdArrowDropright
                className="inline-block text-sm mr-0.5"
                size={20}
              />
              {text}
            </Link>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default Links;
