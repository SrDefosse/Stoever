import React from 'react';
import { motion } from 'framer-motion';
import LeatherCycle from './LeatherCycle';

const TechnologyIntro = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Title */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-light text-center py-16"
      >
        Circular Economy
      </motion.h2>

      {/* LeatherCycle Component */}
      <div className="w-full h-full">
        <LeatherCycle />
      </div>
    </div>
  );
};

export default TechnologyIntro;
