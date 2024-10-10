import React from 'react'
import { FaUsers } from "react-icons/fa";
import { GiStonePath } from "react-icons/gi";
import { GoBriefcase } from "react-icons/go";

const GalleryCard = ({ cat, title, des, seats, miles, luggage, imagetag }) => {
  return (
    <div className="border borser-1 border-gray-400 rounded-md">
      <img src={imagetag} alt='logo' className='w-full' />
      <div className="p-3">
        <span className="bg-blue-400 px-2 rounded-md text-sm mb-2 inline-block">{cat}</span>
        <h4 className="mb-2 text-2xl font-semibold text-gray-700 mb-3">{title}</h4>
        <p className="mb-2 text-gray-500">{des}</p>
        <h6 className="uppercase font-semibold text-gray-500 mb-3">Features</h6>
        <div className="flex justify-between mb-2">
          <p className="flex items-center"><FaUsers className="mr-1" /> {seats} Seater</p>
        
          {miles && (
            <p className="flex items-center"><GiStonePath className="mr-1" /> {miles}</p>
          )}
          
        </div>
        {/* Render luggage as a list */}
        {luggage && luggage.length > 0 ? (
          <div>
            <p className="font-semibold mb-1">Features:</p>
            <ul className="list-disc ml-4">
              {luggage.map((item, index) => (
                <li key={index} className="flex items-center mt-3">
                  <GoBriefcase className="mr-1" /> {item}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-gray-500 italic">No luggage space provided</p>
        )}
      </div>
    </div>
  );
}

export default GalleryCard;
