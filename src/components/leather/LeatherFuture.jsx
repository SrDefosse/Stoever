import React from "react";
import GreenButton from "../ui/GreenButton";

const LeatherFuture = () => {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-20">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        {/* Left Column */}
        <div className="flex items-center">
          <h2 className="text-4xl font-bold text-green-700 md:text-5xl lg:text-6xl">
            Shaping the Future of Sustainable Leather
          </h2>
        </div>
        
        {/* Right Column */}
        <div className="flex flex-col gap-6">
          <p className="text-lg text-neutral-600">
            We specialize in the research, development, manufacturing, and marketing of sustainable biochemicals for the tanning industry. We aim to innovate and go one step further into green technology.
          </p>
          <div className="flex">
            <GreenButton text="Learn More" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeatherFuture;

