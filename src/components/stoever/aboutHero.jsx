import React from "react";
import { motion } from "framer-motion";
import MaxWidthWrapper from "../ui/MaxWidthWrapper";

const AboutHero = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/stoever-imgs/about-bg.webp"
          alt="Stoever sustainable construction"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-blue-800/10"></div>
      </div>

      {/* Content */}
      <MaxWidthWrapper className="relative z-10 flex flex-col items-center justify-center text-white">
        {/* Main Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our history and philosophy
        </motion.h1>
      </MaxWidthWrapper>
    </div>
  );
};

export default AboutHero;

