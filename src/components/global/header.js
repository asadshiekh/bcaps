"use client";
import React, { useState, useEffect } from "react";
import Logo from "../Header/Logo";
import Link from "next/link";

const Header = () => {
  const [currentPath, setCurrentPath] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setCurrentPath(window.location.pathname);

    const menuItems = document.querySelectorAll(".menu > ul > li");
    const menuMobile = document.querySelector(".menu-mobile");
    const subMenus = document.querySelectorAll(".menu > ul > li > ul");
    const mainMenu = document.querySelector(".menu > ul");

    menuItems.forEach((item) => {
      if (item.querySelector("ul")) {
        item.classList.add("menu-dropdown-icon");
      } else {
        item.classList.add("normal-sub");
      }
    });

    const handleHover = (e) => {
      if (window.innerWidth > 943) {
        const target = e.currentTarget;
        const subMenu = target.querySelector("ul");
        const menuLink = target.querySelector("a");
        if (subMenu) subMenu.classList.toggle("show");
        menuLink.classList.toggle("text-secondary");
      }
    };

    const closeAllSubMenus = (exceptMenu = null) => {
      subMenus.forEach((menu) => {
        if (menu !== exceptMenu) {
          menu.classList.remove("show");
        }
      });
    };

    const handleClick = (e) => {
      if (window.innerWidth <= 943) {
        const target = e.currentTarget;
        const subMenu = target.querySelector("ul");
        closeAllSubMenus(subMenu);
        if (subMenu) {
          e.preventDefault();
          subMenu.classList.toggle("show");
        }
      }
    };

    menuItems.forEach((item) => {
      item.addEventListener("mouseover", handleHover);
      item.addEventListener("mouseout", handleHover);
      item.addEventListener("click", handleClick);
    });

    const handleMobileClick = (e) => {
      e.preventDefault();
      mainMenu?.classList.toggle("show-on-mobile");
    };

    menuMobile?.addEventListener("click", handleMobileClick);

    const handleResize = () => {
      subMenus.forEach((menu) => menu.classList.remove("show"));
      mainMenu?.classList.remove("show-on-mobile");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      menuItems.forEach((item) => {
        item.removeEventListener("mouseover", handleHover);
        item.removeEventListener("mouseout", handleHover);
        item.removeEventListener("click", handleClick);
      });
      menuMobile?.removeEventListener("click", handleMobileClick);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10 && window.innerWidth <= 959) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`menu fixed top-0 left-0 right-0 h-[100px] flex items-center px-[30px] border-b z-[9999] bg-white transition-all duration-300 ${
        isScrolled
          ? "w-[92%] mx-auto mt-4 rounded-md shadow-lg bg-white/80 backdrop-blur-lg"
          : "w-full px-[30px] py-[20px] shadow-none"
      }`}
    >
      <a href="#" className="menu-mobile lg:hidden">
        <svg width="30" height="30" viewBox="0 0 30 30">
          <g fill="none" stroke="black" strokeWidth="2">
            <line x1="5" y1="7" x2="25" y2="7" />
            <line x1="5" y1="15" x2="25" y2="15" />
            <line x1="5" y1="23" x2="25" y2="23" />
          </g>
        </svg>
      </a>
      <Logo
        src="/images/assets/bcabs-logo.png"
        alt="Header Logo"
        width={230}
        className="p-2.5 pr-10 border-r w-[180px] lg:w-[230px]"
      />

      <ul className="clearfix flex flex-row justify-end items-center">
        <li>
          <a
            href="/"
            className="hover:text-secondary text-[#202020] font-medium text-[0.82rem] uppercase py-[2.5rem] px-[1.4em] block"
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#"
            className="hover:text-secondary text-[#202020] font-medium text-[0.82rem] uppercase py-[2.5rem] px-[1.4em] block"
          >
            About
          </a>
          <ul className="normal-sub">
            <li>
              <a href="/about-bcabs-kochi-taxi">About BCabs</a>
            </li>
            <li>
              <a href="/about-bcabs-kochi-taxi-mdmessage">Md&apos;s Message</a>
            </li>
            <li>
              <a href="/about-bcabs-kerala">About Kerala</a>
            </li>
            <li>
              <a href="/about-bcabs-kochi">About Kochi</a>
            </li>
            <li>
              <a href="/about-cochin-airport">About Cial</a>
            </li>
          </ul>
        </li>

        <li>
          <a
            href="#"
            className="hover:text-secondary text-[#202020] font-medium text-[0.82rem] uppercase py-[2.5rem] px-[1.4em] block"
          >
            Services
          </a>
          <ul>
            <li>
              <a href="#" className="!text-sm !font-bold !leading-normal">
                Kochi
              </a>
              <ul>
                <li>
                  <a href="/kochi-cab-service">Kochi Cab Service</a>
                </li>
                <li>
                  <a href="/kochi-airport-taxi">Kochi Airport Taxi</a>
                </li>
                <li>
                  <a href="/kerala-tour-packages">Kerala Tour Package</a>
                </li>
                <li>
                  <a href="#">Kochi Outstation Taxi</a>
                </li>
                <li>
                  <a href="#">Sabarimala Taxi Service</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="!text-sm !font-bold !leading-normal">
                Other Airports
              </a>
              <ul>
                <li>
                  <a href="#">Trivandrum Airport taxi</a>
                </li>
                <li>
                  <a href="#">Kozhikode Airport Taxi</a>
                </li>
                <li>
                  <a href="#">Kannur Airport taxi</a>
                </li>
                <li>
                  <a href="#">Coimbatore Airport taxi</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="!text-sm !font-bold !leading-normal">
                Other Cities
              </a>
              <ul>
                <li>
                  <a href="#">Trivandrum Taxi Service</a>
                </li>
                <li>
                  <a href="#">Calicut Taxi Service</a>
                </li>
                <li>
                  <a href="#">Kottayam Taxi Service</a>
                </li>
                <li>
                  <a href="#">Thrissur Taxi Service</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="!text-sm !font-bold !leading-normal">
                Special Services
              </a>
              <ul>
                <li>
                  <a href="#">Corporate Transport Solutions</a>
                </li>
                <li>
                  <a href="#">Event Transportation</a>
                </li>
                <li>
                  <a href="#">Wedding Cars</a>
                </li>
                <li>
                  <a href="#">Premium Cabs</a>
                </li>
                <li>
                  <a href="#">Kerala Caravan Tour</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <a
            href="#"
            className="hover:text-secondary text-[#202020] font-medium text-[0.82rem] uppercase py-[2.5rem] px-[1.4em] block"
          >
            Fleet
          </a>
          <ul className="normal-sub">
            <li>
              <a href="/kochi-city-taxi">General</a>
            </li>
            <li>
              <a href="#">Premium</a>
            </li>
            <li>
              <a href="#">Coaches</a>
            </li>
            <li>
              <a href="#">Caravan</a>
            </li>
            <li>
              <a href="#">Special Vehicles</a>
            </li>
          </ul>
        </li>

        <li>
          <a
            href="/kochi-taxi-rates"
            className="hover:text-secondary text-[#202020] font-medium text-[0.82rem] uppercase py-[2.5rem] px-[1.4em] block"
          >
            Tariff
          </a>
        </li>

        <li>
          <a
            href="/general-contact"
            className="hover:text-secondary text-[#202020] font-medium text-[0.82rem] uppercase py-[2.5rem] px-[1.4em] block"
          >
            Contact
          </a>
        </li>
      </ul>

      <div className="hidden lg:flex items-center space-x-2 border-l h-full pl-6">
        <Link
          href="tel:+919895118877"
          className="border border-[#ed2124] min-w-[170px] px-4 py-2 text-center rounded-md text-[#ed2124] hover:bg-[#ed2124] hover:text-white text-sm md:text-base"
        >
          +91 9895 11 8877
        </Link>
        <Link
          href="/book-now"
          className="border bg-[#ed2124] min-w-[125px] px-4 py-2 text-center rounded-md text-white hover:bg-[#ed2124] hover:border-[#ed2124] text-sm md:text-base"
        >
          Book Now!
        </Link>
      </div>
    </div>
  );
};

export default Header;
