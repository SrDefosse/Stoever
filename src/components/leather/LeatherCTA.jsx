import React from 'react';
import GreenGlassButton from '../ui/GreenGlassButton';

const LeatherCTA = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="w-[95%] md:w-[80%] h-[50vh] md:h-[85vh] relative rounded-xl shadow-2xl overflow-hidden">
        {/* Image Background */}
        <img 
          src="/leather/leather-cta-bg.webp" 
          alt="Leather craftsmanship" 
          className="w-full h-full object-cover"
        />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 bg-black/30">
          <h2 className="text-3xl md:text-4xl lg:text-6xl text-white font-bold text-center px-4">
            Contact us
          </h2>
          <GreenGlassButton text="Get in touch" />
        </div>
      </div>
    </div>
  );
};

export default LeatherCTA;
