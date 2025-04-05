import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { GiWaterDrop, GiSpray, GiRecycle, GiChemicalDrop, GiOilDrum } from 'react-icons/gi';

const LeatherProductsCategories = () => {
  const [openCategories, setOpenCategories] = useState([]);

  const handleToggle = (index) => {
    setOpenCategories((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const categories = [
    {
      id: "01",
      name: "Soaking",
      icon: <GiWaterDrop className="w-6 h-6" />,
      products: [
        "PROSOAK: Surfactant-free moisturizing probiotic",
        "PROSPEED: Surfactant-free moisturizing probiotic with accelerating effect",
        "PRODEGRATE: Surfactant-free probiotic with degreasing effect",
        "PRODEGRATE PLUS: Fermentation biochemicals with long-chain alcohol emulsifier",
        "OIL TG: Blend of organic acids and low molecular weight salts"
      ]
    },
    {
      id: "02",
      name: "Tanning",
      icon: <GiSpray className="w-6 h-6" />,
      products: [
        "ZEOTAN B: Pre-tanner for wet-white leather"
      ]
    },
    {
      id: "03",
      name: "Re-tanning",
      icon: <GiRecycle className="w-6 h-6" />,
      products: [
        "ZEOTAN C: Retanning agent for all types of leather",
        "CCL: Biopolymer for wet-white tanning",
        "WB: Biopolymer for all types of leather",
        "WW: Biopolymer for wet-white tanning"
      ]
    },
    {
      id: "04",
      name: "Anilines",
      icon: <GiChemicalDrop className="w-6 h-6" />,
      products: [
        "Industrial colorants for leather"
      ]
    },
    {
      id: "05",
      name: "Greasing",
      icon: <GiOilDrum className="w-6 h-6" />,
      products: [
        "STOIL 912-D",
        "STOIL E-70",
        "STOIL HK",
        "STOIL HW",
        "STOIL LT-N"
      ]
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl md:text-5xl font-light text-center mb-16">Products by Category</h2>
      
      <div className="space-y-4">
        {categories.map((category, idx) => (
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
                <span className="text-gray-400 font-light text-lg md:text-xl">{category.id}</span>
                <span className="text-xl md:text-2xl">{category.icon}</span>
                <h3 className="text-xl md:text-2xl font-light group-hover:text-blue-500 transition-colors duration-200">
                  {category.name}
                </h3>
              </div>

              <motion.button
                className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ rotate: openCategories[idx] ? 180 : 0 }}
              >
                {openCategories[idx] ? <FiMinus className="w-5 h-5" /> : <FiPlus className="w-5 h-5" />}
              </motion.button>
            </div>

            <AnimatePresence>
              {openCategories[idx] && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pl-12 pt-4 space-y-3">
                    {category.products.map((product, productIdx) => (
                      <motion.p
                        key={productIdx}
                        className="text-gray-600 font-light text-lg md:text-xl"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: productIdx * 0.1 }}
                      >
                        {product}
                      </motion.p>
                    ))}
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

export default LeatherProductsCategories;
