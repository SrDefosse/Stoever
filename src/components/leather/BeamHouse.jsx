import React from 'react';
import { motion } from 'framer-motion';
import { GiDna2, GiRecycle, GiWaterDrop, GiPlantSeed } from 'react-icons/gi';

const BeamHouse = () => {
  const features = [
    {
      icon: <GiDna2 className="w-8 h-8" />,
      title: "Probiotic Technology",
      description: "Advanced biodegradable solutions"
    },
    {
      icon: <GiRecycle className="w-8 h-8" />,
      title: "Sustainable Process",
      description: "Reduced carbon footprint"
    },
    {
      icon: <GiWaterDrop className="w-8 h-8" />,
      title: "Water Treatment",
      description: "Simplified wastewater management"
    },
    {
      icon: <GiPlantSeed className="w-8 h-8" />,
      title: "Eco-Friendly",
      description: "Alternative to synthetic chemicals"
    }
  ];

  return (
    <div className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-gray-800 mb-6">
            Beamhouse Technology (By Proviera)
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
              We use probiotic technology to develop biodegradable and sustainable chemical products 
              for the leather industry. These products are an alternative to hydrocarbon-derived 
              auxiliaries and traditional synthetic chemical agents, offering benefits such as 
              carbon footprint reduction and improved leather quality.
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
              The result is a safer, more ecological and sustainable tanning process that not only 
              uses fewer resources, but also helps simplify wastewater treatment.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-6"
            >
              <div className="inline-flex items-center space-x-2 text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium uppercase tracking-wider">
                  Revolutionary Leather Technology
                </span>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-green-500 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-light text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>


      </div>
    </div>
  );
};

export default BeamHouse;
