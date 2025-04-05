import React from 'react';
import Image from 'next/image';

const AboutHeroLeather = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/aboutleather-bg.jpg"
          alt="Leather background"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 w-full h-full min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Our work is based around creating a value chain for <span className="text-[#66CC66]">sustainable </span> efficient <span className="text-[#66CC66]">leather </span> production based on the circular economy.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroLeather;
