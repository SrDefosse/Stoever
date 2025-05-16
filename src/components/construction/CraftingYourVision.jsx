import React from 'react';
import YellowButton from '../ui/YellowButton';

const CraftingYourVision = () => {
  return (
    <section className="py-16 md:py-24 bg-[#3A3A3A] text-white">
      <div className="container mx-auto px-4 py-8 md:px-8 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl py-4 font-bold mb-6">
          Crafting Your Vision
        </h2>
        <p className="text-lg md:text-xl text-white mb-8">
          We aim to bring you materials of the highest quality in construction. At the same time we protect, preservate and optimize diverse work spaces while taking design, style and the necessities of our clients in mind.
        </p>
        <div className="flex justify-center">
          <YellowButton text="Learn More" href="/construction/about" />
        </div>
      </div>
    </section>
  );
};

export default CraftingYourVision;
