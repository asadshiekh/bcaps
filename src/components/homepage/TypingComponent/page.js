import React from 'react';
import { ReactTyped } from 'react-typed'; // Correct for named export


const TypingComponent = ({ fontColor, fontSize }) => (
  <div className="flex justify-center items-center h-full"> {/* Center the content */}
    <ReactTyped
      strings={[
        'Kochi City Taxi', 
        'Kerala Tour Packages', 
        'Kochi Airport Taxi', 
        'Sabarimala Taxi', 
        'Trivandrum Airport Taxi', 
        'Trivandrum City Taxi', 
        'Kozhikode Airport Taxi', 
        'Kozhikode City Taxi', 
        'Kannur Airport Taxi', 
        'Coimbatore Airport Taxi', 
        'Available at all major cities in Kerala'
      ]}
      typeSpeed={40}
      backSpeed={50}
      loop
      className={`font-semibold mb-8 text-${fontColor} text-${fontSize}`}
      // No input element is needed; just use ReactTyped for displaying text
    />
  </div>
);

export default TypingComponent;
