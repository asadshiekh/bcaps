"use client";
import React, { useState } from "react";
import Links from "../Footer/Links";
import FooterLogo from "../Footer/Logo";
import FooterBase from "../Footer/FooterBase";
import { BsArrowDownRightSquare, BsArrowRightSquareFill } from "react-icons/bs";
import { IoMdArrowDropright } from "react-icons/io";

const leftDropdownData = [
  {
    key: "kochi",
    title: "Services: Kochi",
    links: [
      { href: "/kochi-cab-service", label: "Kochi Cab Service" },
      { href: "/kochi-airport-taxi", label: "Kochi Airport Taxi" },
      { href: "/kerala-tour-package", label: "Kerala Tour Package" },
      { href: "/kochi-outstation-taxi", label: "Kochi Outstation Taxi" },
      { href: "/sabarimala-taxi", label: "Sabarimala Taxi" },
    ],
  },
  {
    key: "airports",
    title: "Services: Other Airports",
    links: [
      { href: "/trivandrum-airport-taxi", label: "Trivandrum Airport Taxi" },
      { href: "/kozhikode-airport-taxi", label: "Kozhikode Airport Taxi" },
      { href: "/kannur-airport-taxi", label: "Kannur Airport Taxi" },
      { href: "/coimbatore-airport-taxi1", label: "Coimbatore Airport Taxi" },
    ],
  },
  {
    key: "services",
    title: "Services: Other Cities",
    links: [
      { href: "/trivandrum-airport-taxi", label: "Trivandrum Taxi Service" },
      { href: "/kozhikode-airport-taxi", label: "Kozhikode Taxi Service" },
      { href: "/kannur-airport-taxi", label: "Kottayam Taxi Service" },
      { href: "/coimbatore-airport-taxi2", label: "Thrissur Taxi Service" },
    ],
  },
  {
    key: "special",
    title: "Special Services",
    links: [
      {
        href: "/trivandrum-airport-taxi",
        label: "Corporate Transport Solutions",
      },
      {
        href: "/kozhikode-airport-taxi",
        label: "Wedding/Event Transportation",
      },
      { href: "/kannur-airport-taxi", label: "Special Vehicles" },
      { href: "/coimbatore-airport-taxi3", label: "Premium Cabs" },
      { href: "/coimbatore-airport-taxi4", label: "Kerala Caravan Tour" },
    ],
  },
];

const rightDropdownData = [
  {
    key: "tariff",
    title: "Tariff",
    links: [
      { href: "/general-tariff", label: "General Tariff" },
      {
        href: "/kochi-outstation-taxi-tariff",
        label: "Kochi Outstation Taxi Tariff",
      },
      { href: "/kochi-aiport-taxi-tariff", label: "Kochi Aiport Taxi Tariff" },
      {
        href: "/Kochi-airport-os-tariff",
        label: "Kochi Airport Taxi - O/S Tariff",
      },
      { href: "/sabarimala-taxi-tariff", label: "Sabarimala Taxi Tariff" },
      { href: "/kerala-taxi", label: "Kerala Tour Taxi Tariff" },
      { href: "/kochi-taxi", label: "Kochi Premium Cab Tariff" },
      { href: "/special-taxi", label: "Special Offers" },
    ],
  },
  {
    key: "blog",
    title: "Blog",
    links: [
      { href: "/kochi", label: "Kochi" },
      { href: "/munnar", label: "Munnar" },
      { href: "/thekkady", label: "Thekkady" },
      { href: "/alleppey", label: "Alleppey" },
      { href: "/kovalam", label: "Kovalam" },
      { href: "/varkala", label: "Varkala" },
      { href: "/wayanad", label: "Wayanad" },
    ],
  },
  {
    key: "contact",
    title: "Contact",
    links: [
      { href: "/general-contact", label: "General Contact" },
      { href: "/work-with-BCabs", label: "Work with BCabs" },
      { href: "/book-now", label: "Book Now" },
      { href: "/bcabs-on-social-media", label: "BCabs on Social Media" },
      { href: "/faq", label: "FAQ" },
    ],
  },
];

const Footer = () => {
  const [openDropdown, setOpenDropdown] = useState(leftDropdownData[0].key);

  const toggleDropdown = (key) => {
    if (openDropdown === key) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(key);
    }
  };

  return (
    <footer className="bg-[#343A40] text-white pt-16">
      <div className="container mx-auto pb-16 px-4 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-10 space-y-6 md:space-y-0">
          <Links />
          <div>
            {leftDropdownData.map(({ key, title, links }) => (
              <React.Fragment key={key}>
                <button
                  onClick={() => toggleDropdown(key)}
                  className="flex items-center justify-between w-full text-[16px] font-medium focus:outline-none py-3 border-b border-b-white border-opacity-10"
                >
                  <span className="flex items-center">
                    {openDropdown === key ? (
                      <BsArrowDownRightSquare className="inline-block text-md mr-2 transition-transform duration-500" />
                    ) : (
                      <BsArrowRightSquareFill className="inline-block text-md mr-2 transition-transform duration-500" />
                    )}
                    {title}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openDropdown === key
                      ? "max-h-screen opacity-100 pb-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="pl-0 mt-2 text-sm space-y-2">
                    {links.map(({ href, label }) => (
                      <li key={href}>
                        <a href={href}>
                          <IoMdArrowDropright
                            className="inline-block text-sm mr-0.5"
                            size={20}
                          />
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </React.Fragment>
            ))}
          </div>
          <div>
            {rightDropdownData.map(({ key, title, links }) => (
              <React.Fragment key={key}>
                <button
                  onClick={() => toggleDropdown(key)}
                  className="flex items-center justify-between w-full text-[16px] font-medium focus:outline-none py-3 border-b border-b-white border-opacity-10"
                >
                  <span className="flex items-center">
                    {openDropdown === key ? (
                      <BsArrowDownRightSquare className="inline-block text-md mr-2 transition-transform duration-500" />
                    ) : (
                      <BsArrowRightSquareFill className="inline-block text-md mr-2 transition-transform duration-500" />
                    )}
                    {title}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openDropdown === key
                      ? "max-h-screen opacity-100 pb-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="pl-0 mt-2 text-sm space-y-2">
                    {links.map(({ href, label }) => (
                      <li key={href}>
                        <a href={href}>
                          <IoMdArrowDropright
                            className="inline-block text-sm mr-0.5"
                            size={20}
                          />
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </React.Fragment>
            ))}
          </div>
          <FooterLogo />
        </div>
      </div>
      <FooterBase />
    </footer>
  );
};

export default Footer;
