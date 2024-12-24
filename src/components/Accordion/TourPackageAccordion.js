"use client";
import React, { useState } from "react";

const TourPackageAccordion = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-12 pt-20">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[520px] text-center mb-12">
              <span className="mb-2 block text-lg font-semibold text-primary">
                FAQ
              </span>
              <h2 className="mb-4 text-3xl md:text-4xl font-bold text-black">
                Frequently Asked Questions
              </h2>
              <p className="text-base text-body-color">How can we help you?</p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="What destinations can I visit with BCabs?"
              text="BCabs will transport you to any destination in Kerala or a neighbouring state. We’re more than happy to pick you up from Cochin International Airport or somewhere else within the region. Let us know what you need, and we’ll work to accommodate your request."
            />
            <AccordionItem
              header="Are the packages customisable?"
              text="Yes. We know that no two trips are the same. That’s why we personalise each Kerala taxi package. We listen to your trip itinerary, providing a detailed and affordable package tailored to your needs. We may advise on the best approach to the journey. However, where possible, we always work around you."
            />
            <AccordionItem
              header="What types of vehicles are available?"
              text="BCabs is proud of our well-maintained fleet of vehicles. We’re confident we have the right vehicle for almost every occasion. From budget-friendly sedans to luxurious SUVs, we have it all. We even offer large coaches for groups of people travelling around the region. Each vehicle is driven by our professional and courteous drivers, who are happy to answer any of your questions. These experienced drivers will ensure a smooth and safe ride to each destination."
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="Is advance booking required?"
              text="Yes. We ask that you book our taxi services in Kerala in advance. We need time to plan the trip, ensuring you have access to the vehicle of your choice. Let us know your contact details, pickup date and time, vehicle type, and trip type via the contact form. It’s a simple way to reserve your taxi in Kerala."
            />
            <AccordionItem
              header="Are drivers knowledgeable about local attractions?"
              text="Yes. Each of our drivers lives locally within the region, serving tourists and other visitors every single week. They have a wealth of knowledge about the region, from top restaurants to exciting tourist attractions. While they’re more than happy to leave you in peace during the drive, if you’ve got any questions, please feel free to ask them. We’re here to help."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourPackageAccordion;

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    event.preventDefault();
    setActive(!active);
  };
  return (
    <div className="mb-8 w-full rounded-lg bg-[#f8f9fa] p-4 sm:p-8 lg:px-6 xl:px-8">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={() => handleToggle()}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary">
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="mt-1 text-lg font-semibold text-black">{header}</h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-body-color">{text}</p>
      </div>
    </div>
  );
};
