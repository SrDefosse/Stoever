import React from 'react';
import Image from 'next/image';
import YellowGlassButton from "../ui/YellowGlassButton";
import WhiteGlassButton from "../ui/WhiteGlassButton";
import Link from 'next/link';

const HeroConstruction = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/construction.jpg" // Changed image
          alt="Construction background"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Content Container - Matching HeroLeather structure */}
      <div className="relative z-20 w-full h-full min-h-screen flex items-center">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Crafting the Future <br />
              <span className="text-yellow-400">Building Excellence</span> {/* Updated title and color */}
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl">
              From groundbreaking designs to resilient structures, 
              Stoever Construction builds the foundations for tomorrow's world with precision and expertise. {/* Updated text */}
            </p>
            
            <div className="flex flex-row gap-4">
              <Link href="/construction/about">
                <YellowGlassButton text="Learn More" /> {/* Changed button */}
              </Link>
              <Link href="/construction/productsandservices">
                <WhiteGlassButton text="Our Services" /> {/* Changed button */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroConstruction;
