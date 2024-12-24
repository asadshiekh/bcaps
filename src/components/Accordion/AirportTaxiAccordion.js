"use client";
import React, { useState } from "react";

const AirportTaxiAccordion = () => {
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
              header="Can I book a taxi in advance?"
              text="Yes. You can book a Kochi airport taxi via our online booking service. Let us know your name, contact details, pickup and drop-off locations, and the time of arrival. We’ll let you know if there are any issues."
            />
            <AccordionItem
              header="What types of vehicles are available?"
              text="BCabs offers over 25 different categories of vehicles. From SUVs to sedans, our vehicles are all spacious, sanitised, and safe for your trip. We’re confident that we have a vehicle suited to every need. Please let us know which vehicle you would like during the booking process. In addition, we provide coaches and large vans for groups of up to 45 people. It’s perfect if you’re travelling as a cohort and all need to arrive at the same destination."
            />
            <AccordionItem
              header="Is your service available 24/7?"
              text="Yes. We can pick you up or drop you off at the airport no matter the time. BCabs offers a round-the-clock Kochi airport taxi service. Moreover, you can speak to our team 24/7, asking any questions you might have. We know that your flight could be scheduled throughout the night. That’s why we tailored our services to your schedule."
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="Are there additional charges for waiting time?"
              text="Our prices are 100% transparent. Waiting time is not charged at the airport itself. Instead, the final price is a combination of the minimum tariff and the distance or time to the destination."
            />
            <AccordionItem
              header="Do you assist with luggage handling?"
              text="Yes. Our drivers are more than happy to help you take your luggage in or out of the vehicle. We cannot carry your luggage any further than that. If you have any questions about the size of your luggage, please speak to our team before booking your Kochi airport taxi."
            />
            <AccordionItem
              header="Is the fare fixed or metered?"
              text="We offer both fixed and metered rates depending on the destination. If your drop-off is within the city limits, we can provide a fixed fare. However, for longer distances, the rate is based on the distance or time, depending on the package."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirportTaxiAccordion;

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
