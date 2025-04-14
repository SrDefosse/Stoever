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
          We offer a wide variety of services from work and construction to
          application and maintenance. In all our services and applied
          products, we guarantee highly trained personnel for supervision and
          technical assistance.
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
              All of our services range from complete facility inspections and
              design to construction.
            </p>
            {/* Button Usage */}
            <YellowButton text="Learn More" />
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
              We oversee the development and process of all construction
              projects we work on, always providing clarity to our clients
              throughout every stage of their project.
            </p>
            {/* Button Usage */}
            <YellowButton text="Learn More" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
