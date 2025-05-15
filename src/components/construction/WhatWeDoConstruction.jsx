import React from 'react';
import { FiFileText } from 'react-icons/fi';
import { MdOutlineFactory } from 'react-icons/md';
import { FaPaintBrush } from 'react-icons/fa';
import MaxWidthWrapper from '../ui/MaxWidthWrapper';

const WhatWeDoConstruction = () => {
  return (
    <section className="py-16 md:py-16 lg:py-20 bg-[#3A3A3A]">
      <MaxWidthWrapper>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-8 md:mb-12">
          What We Do
        </h2>
        <div className="max-w-3xl mx-auto text-center text-gray-300 mb-8 md:mb-12 text-lg">
          <p className="mb-6">
            We are manufacturers and applicators of our extensive range of paints and coatings for construction use. We are committed to providing our clients with the best maintenance, and design services for residential and/or commercial properties.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
          {/* Card 1: Maintenance */}
          <div className="p-6 bg-neutral-500 rounded-lg shadow-md hover:shadow-lg hover:bg-neutral-600 transition-all duration-300">
            <div className="text-white mb-3 text-4xl inline-block">
              <FaPaintBrush />
            </div>
            <h3 className="text-xl font-semibold text-yellow-500 mb-2">Maintenance</h3>
            <p className="text-white">General upkeep and repairs.</p>
          </div>
          {/* Card 2: Remodeling */}
          <div className="p-6 bg-neutral-500 rounded-lg shadow-md hover:shadow-lg hover:bg-neutral-600 transition-all duration-300">
             <div className="text-white mb-3 text-4xl inline-block">
              <MdOutlineFactory />
            </div>
            <h3 className="text-xl font-semibold text-yellow-500 mb-2">Remodeling Industrial Areas</h3>
            <p className="text-white">Modernizing and adapting spaces.</p>
          </div>
          {/* Card 4: Execution */}
          <div className="p-6 bg-neutral-500 rounded-lg shadow-md hover:shadow-lg hover:bg-neutral-600 transition-all duration-300">
            <div className="text-white mb-3 text-4xl inline-block">
               <FiFileText />
            </div>
            <h3 className="text-xl font-semibold text-yellow-500 mb-2">Execution & Monitoring</h3>
            <p className="text-white">Overseeing project progress.</p>
          </div>
        </div>
      </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default WhatWeDoConstruction;
