import React from 'react';
// import Image from 'next/image'; // Remove next/image import
import BlueGlassButton from "../ui/BlueGlassButton";
import GreenGlassButton from "../ui/GreenGlassButton";

const LeatherProductsHero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Replace next/image with img */}
        <img
          src="/leather/products-hero-bg.webp" // Keep src 
          alt="Leather background" // Keep alt
          // fill // Removed fill prop
          className="absolute inset-0 w-full h-full object-cover brightness-75" // Added classes for positioning and cover
          // priority // Removed priority prop
          loading="eager" // Added loading="eager" as a replacement for priority
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 w-full h-full min-h-screen flex items-center">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl text-center mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Our Products<br />
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto">
              Discover our innovative approach to leather processing 
              with eco-friendly technologies and premium quality results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeatherProductsHero;

