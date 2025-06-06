import React from 'react';
// import Image from 'next/image'; // Remove next/image
import BlueGlassButton from "../ui/BlueGlassButton";
import GreenGlassButton from "../ui/GreenGlassButton";

const HeroLeather = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src="/leather-imgs/hero-leather.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 w-full h-full min-h-screen flex items-center">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              <span className="text-[#66CC66]">Biosolutions</span> for the
              <span className="text-[#66CC66]"> leather </span>
               industry
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl">
              Discover our innovative approach to socially and environmentally sustainable leather manufacturing.
            </p>
            
            <div className="flex flex-row gap-4">
              <GreenGlassButton text="Explore Products" href="/leather/products" />
              <BlueGlassButton text="Our Technology" href="/leather/products#tech-proposal" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroLeather;

