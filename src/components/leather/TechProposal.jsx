import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GiMolecule, 
  GiOilDrum, 
  GiAtom, 
  GiArrowDunk,
  GiAbstract021,
  GiCrackedGlass,
  GiLeatherBoot,
  GiSpeedometer,
  GiFeather,
  GiPaintBucket,
  GiEarthAmerica,
  GiStrong,
  GiPuzzle
} from 'react-icons/gi';

const TechProposal = () => {
  const [openDescriptions, setOpenDescriptions] = useState([]);

  const handleToggle = (index) => {
    setOpenDescriptions((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const descriptions = [
    {
      id: "01",
      title: "Retanning Agents",
      icon: <GiMolecule className="w-6 h-6" />,
      content: "We utilize a zinc mixture instead of vegetable tannins."
    },
    {
      id: "02",
      title: "Particle Size",
      icon: <GiAtom className="w-6 h-6" />,
      content: "Nanoparticles allow for more uniform penetration and distribution."
    },
    {
      id: "03",
      title: "Agent Penetration",
      icon: <GiArrowDunk className="w-6 h-6" />,
      content: "Improved penetration due to the rapid dissociation of zinc in an acidic medium."
    },
    {
      id: "04",
      title: "Leather Flexibility",
      icon: <GiAbstract021 className="w-6 h-6" />,
      content: "The mechanics of leather are superior due to flexible ionic bonds and better lubricant distribution."
    },
    {
      id: "05",
      title: "Closed Grain",
      icon: <GiCrackedGlass className="w-6 h-6" />,
      content: "Adhesion and cohesion of the leather fibers is improved due to zinc bonding."
    },
    {
      id: "06",
      title: "Leather Fullness",
      icon: <GiLeatherBoot className="w-6 h-6" />,
      content: "Greater flexibility and fracture resistance."
    },
    {
      id: "07",
      title: "Process Efficiency",
      icon: <GiSpeedometer className="w-6 h-6" />,
      content: "The rapid dissociation of zinc in acid makes the process more efficient."
    },
    {
      id: "08",
      title: "Lightweight & Odor Free",
      icon: <GiFeather className="w-6 h-6" />,
      content: "Due to particle size and low addition."
    },
    {
      id: "09",
      title: "Improved Dye Distribution",
      icon: <GiPaintBucket className="w-6 h-6" />,
      content: "By providing more chemical bonds, the distribution of dyes is more thorough."
    },
    {
      id: "10",
      title: "Minimal Environmental Impact",
      icon: <GiEarthAmerica className="w-6 h-6" />,
      content: "The minimal use of zinc minimizes impact on the environment."
    },
    {
      id: "11",
      title: "Mechanical Resistance",
      icon: <GiStrong className="w-6 h-6" />,
      content: "Resistance to traction and abrasion is improved due to strong and flexible zinc bonds."
    },
    {
      id: "12",
      title: "Homogeneity of the Product",
      icon: <GiPuzzle className="w-6 h-6" />,
      content: "The uniform distribution of agents results in a more homogeneous leather"
    }
  ];

  return (
    <div id="tech-proposal" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl md:text-5xl text-center mb-16">Technical advantage of our biopolymers and biocollagen</h2>
      
      <div className="space-y-4">
        {descriptions.map((item, idx) => (
          <motion.div
            key={idx}
            className="border-t border-gray-200 py-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <div 
              className="flex items-center justify-between cursor-pointer group"
              onClick={() => handleToggle(idx)}
            >
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 font-light text-lg md:text-xl">{item.id}</span>
                <span className="text-xl md:text-2xl">{item.icon}</span>
                <h3 className="text-xl md:text-2xl font-light group-hover:text-green-500 transition-colors duration-200">
                  {item.title}
                </h3>
              </div>

              <motion.button
                className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ rotate: openDescriptions[idx] ? 180 : 0 }}
              >
                {openDescriptions[idx] ? <FiMinus className="w-5 h-5" /> : <FiPlus className="w-5 h-5" />}
              </motion.button>
            </div>

            <AnimatePresence>
              {openDescriptions[idx] && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pl-12 pt-4">
                    <motion.p
                      className="text-gray-600 font-light text-lg md:text-xl"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {item.content}
                    </motion.p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechProposal;
