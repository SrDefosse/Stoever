import React from 'react';
import MaxWidthWrapper from "../ui/MaxWidthWrapper";
const WhyChooseUs = () => {
  return (
    <MaxWidthWrapper>
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
        {/* Columna 1: Título */}
        <div>
          <h2 className="text-6xl font-bold text-[#001845]">
            Why Choose Us?
          </h2>
        </div>

        {/* Columna 2 */}
        <div className="flex items-center">
          {/* Línea vertical más alta que el texto */}
          <div className="mr-6 flex-shrink-0">
            <div className="w-0.5 bg-gray-300" style={{ height: '280px' }}></div>
          </div>
          <p className="text-5xl font-light text-gray-800">
            Innovative Research &amp; Cutting-Edge Technology
          </p>
        </div>

        {/* Columna 3 */}
        <div className="flex items-center">
          <div className="mr-6 flex-shrink-0">
            <div className="w-0.5 bg-gray-300" style={{ height: '280px' }}></div>
          </div>
          <p className="text-5xl font-light text-gray-800">
            800 Tons of Production Capacity per Month
          </p>
        </div>

        {/* Columna 4 */}
        <div className="flex items-center">
          <div className="mr-6 flex-shrink-0">
            <div className="w-0.5 bg-gray-300" style={{ height: '280px' }}></div>
          </div>
          <p className="text-5xl font-light text-gray-800">
            Sustainable Alternatives for Various Industries
          </p>
        </div>
      </div>
    </section>
    </MaxWidthWrapper>
  );
};

export default WhyChooseUs;

