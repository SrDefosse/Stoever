import React from 'react';

const AboutHeroConstruction = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <video
          src="/aboutconstruction-hero.mp4" // Placeholder image, replace with actual path
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          controls={false}
          className="object-cover w-full h-full brightness-75 pointer-events-none"
          priority
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 w-full h-full min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            We build the <span className="text-[#FFDD0A]">Future</span> with <span className="text-[#FFDD0A]">You</span> In Mind.
            </h1>
            {/* You can add more text or elements here if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroConstruction;
