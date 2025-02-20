import React, { useEffect, useRef, useState } from "react";
import image1 from "../images/image3.jpg"
import image2 from '../images/fimage2.jpg'
import image3 from '../images/fimage3.jpg'
import image4 from '../images/fimage5.jpg'
import image5 from '../images/fimage6.jpg'
import image6 from '../images/fimage9.jpg'
const images = [
  image2,image3,image4,image6,image5
];


const Runfile = () => {
    return (
      <div className="w-full overflow-hidden bg-gray-100 py-4">
        <div className="relative flex w-full">
          {/* Moving images */}
          <div className="flex space-x-4 animate-marquee">
            {[...images, ...images].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index}`}
                className="w-[400px] h-[220px] object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Runfile;



