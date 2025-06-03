import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GiMolecule, 
  GiArrowDunk,
  GiAbstract021,
  GiCrackedGlass,
  GiLeatherBoot,
  GiSpeedometer,
  GiPaintBucket,
  GiEarthAmerica,
  GiStrong,
} from 'react-icons/gi';

const TechProposal = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const descriptions = [
    {
      id: "01",
      title: "Retanning Agent",
      icon: <GiMolecule className="w-8 h-8" />,
      content: "Biocollagens and biopolymers used after retanning improve softness, fullness and absorption of tanning agents in leather.",
      gradient: "from-white to-gray-50",
      size: "large"
    },
    {
      id: "02",
      title: "Agent Penetration",
      icon: <GiArrowDunk className="w-8 h-8" />,
      content: "Provide depth and uniformity in leather dyeing, ensuring consistent properties.",
      gradient: "from-white to-gray-50",
      size: "large"
    },
    {
      id: "03",
      title: "Leather Flexibility",
      icon: <GiAbstract021 className="w-8 h-8" />,
      content: "Softness and malleability of leather, improved by Stoever agents such as syntans and fatliquors, which lubricate fibers to balance resistance and softness.",
      gradient: "from-white to-gray-50",
      size: "medium"
    },
    {
      id: "04",
      title: "Closed Grain",
      icon: <GiCrackedGlass className="w-8 h-8" />,
      content: "Smooth and compact leather surface with barely visible pores, achieved with our products that fill the grain layer, ideal for high-quality leathers.",
      gradient: "from-white to-gray-50",
      size: "medium"
    },
    {
      id: "05",
      title: "Leather Fullness",
      icon: <GiLeatherBoot className="w-8 h-8" />,
      content: "Thickness and firmness of leather, achieved with our biocollagens that fill the fiber matrix, maintaining flexibility.",
      gradient: "from-white to-gray-50",
      size: "medium"
    },
    {
      id: "06",
      title: "Process Efficiency",
      icon: <GiSpeedometer className="w-8 h-8" />,
      content: "Optimization of time, chemicals and energy in retanning, reducing waste and costs with effective agents.",
      gradient: "from-white to-gray-50",
      size: "medium"
    },
    {
      id: "07",
      title: "Improved Dye Distribution",
      icon: <GiPaintBucket className="w-8 h-8" />,
      content: "Uniform absorption of dyes thanks to Stoever agents in retanning, achieving vibrant and homogeneous colors.",
      gradient: "from-white to-gray-50",
      size: "small"
    },
    {
      id: "08",
      title: "Minimal Environmental Impact",
      icon: <GiEarthAmerica className="w-8 h-8" />,
      content: "Use of biocollagen biopolymer agents and Stoever oils are made with a circular economy process and are low toxicity to reduce pollution and comply with environmental regulations.",
      gradient: "from-white to-gray-50",
      size: "small"
    },
    {
      id: "09",
      title: "Mechanical Resistance",
      icon: <GiStrong className="w-8 h-8" />,
      content: "Leather's ability to resist traction, tearing or abrasion, reinforced by agents that strengthen the fibers.",
      gradient: "from-white to-gray-50",
      size: "small"
    }
  ];

  return (
    <div id="tech-proposal" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-regular mb-6 text-gray-800 leading-tight">
          Technical advantage of our biopolymers and biocollagen
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full"></div>
      </motion.div>
      
      <div className="space-y-8">
        {/* Primera fila - 2 cards grandes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[descriptions[0], descriptions[1]].map((item, idx) => (
            <motion.div
              key={item.id}
              className="group cursor-pointer h-64"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                delay: idx * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.02, y: -5 }}
              onHoverStart={() => setHoveredCard(idx)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <div className="relative h-full bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-green-500/10"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-green-500/5"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-green-500/5"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-500 font-light text-sm bg-green-50 px-2 py-1 rounded-full">{item.id}</span>
                    <div className="text-green-600">
                      {item.icon}
                    </div>
                  </div>

                  <h3 className="text-gray-800 font-light text-lg md:text-xl mb-4 leading-tight">
                    {item.title}
                  </h3>

                  <div className="mt-auto">
                    <p className="text-gray-600 font-light text-sm md:text-base leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-transparent rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === idx ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Segunda fila - 4 cards medianas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[descriptions[2], descriptions[3], descriptions[4], descriptions[5]].map((item, idx) => (
            <motion.div
              key={item.id}
              className="group cursor-pointer h-56"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                delay: (idx + 2) * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.02, y: -5 }}
              onHoverStart={() => setHoveredCard(idx + 2)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <div className="relative h-full bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-green-500/10"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-green-500/5"></div>
                </div>
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-500 font-light text-sm bg-green-50 px-2 py-1 rounded-full">{item.id}</span>
                    <div className="text-green-600">
                      {item.icon}
                    </div>
                  </div>

                  <h3 className="text-gray-800 font-light text-lg mb-3 leading-tight">
                    {item.title}
                  </h3>

                  <div className="mt-auto">
                    <p className="text-gray-600 font-light text-sm leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-transparent rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === (idx + 2) ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tercera fila - 3 cards pequeñas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[descriptions[6], descriptions[7], descriptions[8]].map((item, idx) => (
            <motion.div
              key={item.id}
              className="group cursor-pointer h-48"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                delay: (idx + 6) * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.02, y: -5 }}
              onHoverStart={() => setHoveredCard(idx + 6)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <div className="relative h-full bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-green-500/10"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-green-500/5"></div>
                </div>
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-500 font-light text-xs bg-green-50 px-2 py-1 rounded-full">{item.id}</span>
                    <div className="text-green-600">
                      {item.icon}
                    </div>
                  </div>

                  <h3 className="text-gray-800 font-light text-base mb-3 leading-tight">
                    {item.title}
                  </h3>

                  <div className="mt-auto">
                    <p className="text-gray-600 font-light text-xs leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-transparent rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === (idx + 6) ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Info adicional */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="text-center mt-12"
      >
        <p className="text-gray-600 font-light text-sm md:text-base">
          Innovative biopolymer technology for superior leather quality and environmental sustainability
        </p>
      </motion.div>
    </div>
  );
};

export default TechProposal;
