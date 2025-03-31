import React from "react";

function WireframeComponent() {
  return (
    <section className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0 mb-16">
      <section className="relative px-10 md:p-0 flex justify-center my-16">
        <div className="relative w-full max-w-[1400px]">
          <img 
            className="w-full h-[600px] object-cover rounded-2xl"
            src="/green_innovators.jpg"
            alt="Green Innovators"
          />
          <div className="content bg-[#007AFFff] p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-48 left-5 rounded-2xl shadow-lg">
            <div className="flex justify-between font-bold text-sm text-white">
              <p>About Us</p>
              <p className="text-white">Since 1946</p>
            </div>
            <h2 className="text-3xl font-semibold mt-4 md:mt-10 text-white">
              The Green Innovators of the Future
            </h2>
            <p className="my-3 text-justify font-medium text-white leading-relaxed">
              First established in 1946 by a German family in León, Gto. México.
              We are now a large business holding 160 employees, 2 production factories,
              multiple certifications in the leather tanning solution research industry,
              multiple alliances with industry peers and presence in 15 countries.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-4">
              <div className="text-center">
                <p className="text-2xl font-bold mb-1 text-white">70+</p>
                <p className="text-sm uppercase tracking-wide text-white">Years of Experience</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold mb-1 text-white">160+</p>
                <p className="text-sm uppercase tracking-wide text-white">Employees</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold mb-1 text-white">1</p>
                <p className="text-sm uppercase tracking-wide text-white">Main Branch</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold mb-1 text-white">2</p>
                <p className="text-sm uppercase tracking-wide text-white">Production Factories</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default WireframeComponent;
