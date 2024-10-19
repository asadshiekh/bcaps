import React from 'react'
import { BsBuildings } from "react-icons/bs";
const FeatureBox = ({icon,title,des}) => {
  return (
    <div className="feature-box flex">
        <div className="mr-3">
            <BsBuildings className="text-[#ed2124] text-3xl"/>
            <icon className="text-[#ed2124] text-3xl"/>
        </div>
        <div>
            <h4 className="text-xl font-medium mb-2">{title}</h4>
            <p className="text-gray-500">{des}</p>
        </div>
    </div>
  )
}

export default FeatureBox