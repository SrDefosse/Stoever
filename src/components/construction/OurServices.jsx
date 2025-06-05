import React from 'react';
import DevelopmentAccordion from './DevelopmentAccordion';

const OurServices = () => {
  return (
    <section className="py-32 px-4 md:px-8 lg:px-16 bg-[#3A3A3A]">
      {/* Changed to 2 columns grid, adjusted gap and items alignment */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Column 1: Combined Text Content (takes 2 spans on medium, 1 on large) */}
        <div className="md:col-span-2 lg:col-span-1 space-y-12"> {/* Increased spacing between sections */}

          {/* Section 1.1: Introduction */}
          <div className="space-y-4"> {/* Removed padding-right */}
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 border-l-4 border-yellow-600 pl-3">Our Products and Services</h2>
            <p className="text-white leading-relaxed">
              We pride ourselves on being leaders in manufacturing highly specialized construction products. We offer comprehensive solutions that include not only innovative products but also their expert application, technical assistance, and on-site supervision to ensure optimal and lasting results.
            </p>
          </div>

          {/* Section 1.2: Vertical Development Details */}
          <div className="space-y-4"> {/* Removed padding-left */}
            <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4">Solutions with Innovative Coatings</h3>
            <p className="text-white leading-relaxed">
              Our products are designed to optimize development, providing materials and construction systems that improve efficiency and safety. We offer specialized technical assistance for the correct implementation of our solutions in your projects.
            </p>
            <DevelopmentAccordion />
          </div>

        </div>

        {/* Column 2: Image (takes 1 span on medium and large) */}
        <div className="md:col-span-1 lg:col-span-1 flex justify-center items-center">
          <div className="w-full max-w-xs lg:max-w-sm shadow-lg rounded-lg overflow-hidden"> {/* Increased max-width on large screens */}
            <img
              src="/construction-imgs/construction-services.webp"
              alt="Modern vertical construction project"
              className="w-full h-auto object-cover"
              style={{ aspectRatio: '9 / 16' }}
            />
          </div>
          {/* Potential aspect ratio plugin usage */}
        </div>

      </div>
    </section>
  );
};

export default OurServices;
