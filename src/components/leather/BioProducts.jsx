import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { GiDna2, GiMolecule } from 'react-icons/gi';

const BioProducts = () => {
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
      name: "BioPolymers",
      icon: <GiMolecule className="w-6 h-6" />,
      products: [
        {
          name: "Biopolimer WB",
          description: "A sustainable and ecological biopolymer developed by Stoever. Used in all types of leather, providing stability and acid resistance. Especially effective in selective filling of empty areas, offering roundness and fullness without compromising leather softness."
        },
        {
          name: "Syntan OS",
          description: "Synthetic tanning agent based on phenol and naphthalene condensation. Presented as a light yellow powder with pH 3.8 to 4.0. Versatile and used as a substitute for vegetable tanning, providing good light and heat resistance. Suitable for chrome-free leather production."
        },
        {
          name: "Stogen 75",
          description: "Collagen biopolymer with excellent stability and good acid resistance. Recommended for chrome-tanned, chrome-free, wet-white and vegetable leathers. Provides high fullness and roundness, especially in empty areas, thanks to its selective filling power. Ideal for nappa and automotive upholstery, maintaining leather softness."
        },
        {
          name: "Syntan VG M2",
          description: "Synthetic agent for leather retanning. Used in combined processes with other products like Biopolimer WB and Syntan WW. Employed in applications where improving grain fullness and uniformity is required."
        },
        {
          name: "Syntan WW",
          description: "Collagen-based biopolymer, ideal for chrome-tanned, chrome-free, wet-white and vegetable leathers. Offers good acid stability and selective filling power. Improves leather roundness and body, generating fine grain, ideal for light colors without compromising softness."
        }
      ]
    },
    {
      id: "02",
      name: "BioCollagen",
      icon: <GiDna2 className="w-6 h-6" />,
      products: [
        {
          name: "Syntan CCL",
          description: "A collagen-based synthetic tanning agent developed by Stoever. Used in chrome, chrome-free, wet-white and vegetable leather tanning and retanning processes. Provides high fullness and roundness, especially in empty areas, due to its selective filling power and sponginess. Ideal for nappa and automotive upholstery, offering excellent fullness without reducing leather softness."
        },
        {
          name: "Biocollagen CCL 4",
          description: "A collagen biopolymer designed for leather retanning. Commonly used in combined processes with other products like Syntan CCL. Employed in applications where improving grain fullness and uniformity is required."
        },
        {
          name: "Protein FC",
          description: "A protein agent used in the leather tanning industry. Used in combination with other products in tanning and retanning processes. Employed in applications where improving grain fullness and uniformity is required."
        }
      ]
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Title Section */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-regular text-gray-800 mb-8">
          Our Specialties
        </h1>
      </div>

      {/* Description Section with Green Strip */}
      <div className="relative mb-16">
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-green-400 to-green-600"></div>
        <div className="bg-gradient-to-r from-green-50 to-transparent pl-8 pr-4 py-8 rounded-r-lg">
          <p className="text-xl md:text-2xl font-light text-gray-700 leading-relaxed max-w-4xl">
            Our innovative biopolymers and biocollagen solutions represent the cutting edge of sustainable leather technology, 
            delivering exceptional performance while maintaining environmental responsibility and leather quality.
          </p>
        </div>
      </div>
      
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
                        <p className="text-gray-600 font-light text-base md:text-lg leading-relaxed">
                          {product.description}
                        </p>
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

export default BioProducts;
