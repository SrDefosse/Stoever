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
        {
          name: "Quistopal Bio"
        },
        {
          name: "Biostogreen"
        },
        {
          name: "Soak GM"
        },
        {
          name: "Enzyme LP"
        },
        {
          name: "Relax BTN"
        }
      ]
    },
    {
      id: "02",
      name: "Tanning",
      icon: <GiSpray className="w-6 h-6" />,
      products: [
        {
          name: "Cal TR"
        },
        {
          name: "Zyme RDT"
        },
        {
          name: "Zecotan B"
        },
        {
          name: "Biopolimer"
        },
        {
          name: "Biocollagen"
        },
        {
          name: "Quistomax DIJ"
        }
      ]
    },
    {
      id: "03",
      name: "Re-tanning",
      icon: <GiRecycle className="w-6 h-6" />,
      products: [
        {
          name: "Syntanil 60"
        },
        {
          name: "Supra 4"
        },
        {
          name: "Supra 5"
        },
        {
          name: "Syntan N"
        },
        {
          name: "Syntan AC"
        },
        {
          name: "Syntan B"
        },
        {
          name: "Syntan R77"
        },
        {
          name: "Quistoplast DDM"
        },
        {
          name: "Quistoplast D-E"
        },
        {
          name: "Quistoplast STS"
        },
        {
          name: "Biosyntan CLF"
        },
        {
          name: "Biosyntan ECO M"
        },
        {
          name: "Biosyntan ECO D"
        },
        {
          name: "Biosyntan SYA"
        },
        {
          name: "Biosyntan SCK"
        }
      ]
    },
    {
      id: "04",
      name: "Anilines",
      icon: <GiChemicalDrop className="w-6 h-6" />,
      products: [
        {
          name: "Industrial Colorants"
        }
      ]
    },
    {
      id: "05",
      name: "Fatliquoring",
      icon: <GiOilDrum className="w-6 h-6" />,
      products: [
        {
          name: "Quistosan R10"
        },
        {
          name: "Quistosan B8"
        },
        {
          name: "Quistosan R55"
        },
        {
          name: "Quistosan SP"
        },
        {
          name: "Quistosan Dermagras"
        },
        {
          name: "Base BB"
        },
        {
          name: "Quistomax L1"
        },
        {
          name: "Quistomax DIJ"
        },
        {
          name: "Quistomax MP"
        },
        {
          name: "Bioil RW"
        },
        {
          name: "Bioil MP"
        }
      ]
    }
  ];

  return (
    <div id="products" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <h2 className="text-2xl md:text-3xl font-light text-center mb-16 max-w-4xl mx-auto leading-relaxed">
          Our process preserves the distinctive naturalness of genuine leather through the synergy between fiber structure, 
          biopolymers, tanning agents, and synthetic products. This combination achieves optimal adherence and fullness, 
          maximizing material utilization while reducing the environmental impact of the tanning process.
        </h2>
      
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
                <h3 className="text-xl md:text-2xl font-light group-hover:text-green-500 transition-colors duration-200">
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
                  <div className="pl-12 pt-4 space-y-6">
                    {category.products.map((product, productIdx) => (
                      <motion.div
                        key={productIdx}
                        className="border-l-2 border-green-200 pl-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: productIdx * 0.1 }}
                      >
                        <h4 className="text-lg md:text-xl font-medium text-gray-800 mb-2">
                          {product.name}
                        </h4>
                        {product.description && (
                          <p className="text-gray-600 font-light text-base md:text-lg leading-relaxed">
                            {product.description}
                          </p>
                        )}
                      </motion.div>
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
