import React from 'react';
// import Image from 'next/image'; // Remove next/image
import YellowGlassButton from "../ui/YellowGlassButton";
import WhiteGlassButton from "../ui/WhiteGlassButton";
import MaxWidthWrapper from '../ui/MaxWidthWrapper';

const HeroConstruction = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Replace next/image with img */}
        <img
          src="/construction/construction_hero.webp" 
          alt="Construction background"
          className="absolute inset-0 w-full h-full object-cover brightness-75" 
          loading="eager" 
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Content Container - Matching HeroLeather structure */}
      <div className="relative z-20 w-full h-full min-h-screen flex items-center">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Equipping the Future <br />
              <span className="text-yellow-400">Excellence in Construction Products</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl">
              From innovative materials to specialized solutions, 
              Stoever provides the essential products to build tomorrow's world with quality and confidence.
            </p>
            
            <div className="flex flex-row gap-4">
              <YellowGlassButton text="Learn More" href="/construction/about" /> 
              <WhiteGlassButton text="Our Services" href="/construction/services" /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroConstruction;
