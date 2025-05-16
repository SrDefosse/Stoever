import React from "react";
import YellowButton from "../ui/YellowButton";
import { FaTools, FaHardHat } from "react-icons/fa";

const ServicesCTA = () => {
  return (
    <section className="bg-[#3A3A3A] py-16 px-4 text-gray-300">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-4 text-4xl font-light text-white md:text-5xl">
          Our Services
        </h2>
        <p className="mb-12 max-w-4xl text-lg font-light">
          We provide a comprehensive range of services, from supplying specialized materials and expert application to providing dedicated technical assistance and supervision for all our products and services.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Column 1: Application and Maintenance */}
          <div className="relative border-gray-600 py-8 pl-8 md:border-l">
            <div className="mb-6 text-5xl text-yellow-400">
              {/* Icon Usage */}
              <FaTools strokeWidth={1} />
            </div>
            <h3 className="mb-4 text-3xl font-light text-white">
              Application and Maintenance
            </h3>
            <p className="mb-8 font-light">
              We supply specialized materials and applications.
            </p>
          </div>

          {/* Column 2: Work and Construction */}
          <div className="relative border-gray-600 py-8 pl-8 md:border-l">
            <div className="mb-6 text-5xl text-yellow-400">
              {/* Icon Usage */}
              <FaHardHat strokeWidth={1} />
            </div>
            <h3 className="mb-4 text-3xl font-light text-white">
              Work and Construction
            </h3>
            <p className="mb-8 font-light">
              We provide expert technical advisory for every stage of your project, ensuring clarity and success.
            </p>            
          </div>
        </div>
        <div className='flex justify-center mt-12'>
            <YellowButton text="Learn More" href="/construction/productsandservices" />
          </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
