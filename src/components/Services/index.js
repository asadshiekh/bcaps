import React from "react";

const ServicesSection = () => {
  return (
    <div className="flex flex-wrap justify-between gap-8 py-16 bg-white px-6 lg:px-0">
      <div className="flex-1 min-w-[250px]">
        <h2 className="text-lg font-bold mb-4">For Daily Commuters</h2>
        <ul className="space-y-2 list-disc pl-4 text-gray-700">
          <li>Kochi City Transportation</li>
          <li>Cochin Airport Transfers</li>
          <li>Ernakulam Railway Transfers</li>
          <li>Business Travels</li>
          <li>Weddings</li>
          <li>Personal/Family Visits</li>
        </ul>
      </div>

      <div className="flex-1 min-w-[250px]">
        <h2 className="text-lg font-bold mb-4">Trips & Packages</h2>
        <ul className="space-y-2 list-disc pl-4 text-gray-700">
          <li>Kerala Holiday Trips</li>
          <li>Monthly Car Rentals</li>
          <li>Religious and Spiritual Visits</li>
          <li>Medical Visits</li>
          <li>Field Trips</li>
          <li>Educational Tours</li>
        </ul>
      </div>

      <div className="flex-1 min-w-[250px]">
        <h2 className="text-lg font-bold mb-4">
          For Package Operators & Agents
        </h2>
        <p className="text-gray-700 mb-4">
          We assist and enhance the Package operators and Travel Agents holiday
          operations in Kerala by providing them:
        </p>
        <ul className="space-y-2 list-disc pl-4 text-gray-700">
          <li>Cost-effective Transportation</li>
          <li>Ground Handling</li>
          <li>Guide Support</li>
        </ul>
      </div>
    </div>
  );
};

export default ServicesSection;
