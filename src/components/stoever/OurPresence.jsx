import React from 'react';


const OurPresence = () => {
  return (
    <div className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#011961]">Our Presence</h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          We currently hold presence in over 15 countries
        </p>
        <div className="max-w-7xl mx-auto">
          <img 
            src="/world-map.png"
            alt="World Map showing our global presence" 
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default OurPresence;

