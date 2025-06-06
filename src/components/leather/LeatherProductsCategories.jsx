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
          name: "Quistopal Bio",
          description: "Moisturizer with detergent power, free of nonyl phenol (NP, NPEO) and restricted substances. Ideal for wetting and washing of wet-blue and wet-white leather."
        },
        {
          name: "Biostogreen",
          description: "Fermentation biochemicals with probiotics combined with long-chain alcohol emulsifier."
        },
        {
          name: "Soak GM",
          description: "Amine blend auxiliary for unhairing suitable for clean and ecological processes. Excellent detergency powers, grease and dirt dispersion."
        },
        {
          name: "Enzyme LP",
          description: "Protease enzyme auxiliary with depilation action. Good opening of hair follicles obtaining good grain or pore of the leather."
        },
        {
          name: "Relax BTN",
          description: "Auxiliary for reducer-free unhairing, excellent regulator of fiber swelling, improving distension of natural leather wrinkles."
        }
      ]
    },
    {
      id: "02",
      name: "Tanning",
      icon: <GiSpray className="w-6 h-6" />,
      products: [
        {
          name: "Cal TR",
          description: "Blend of organic acids and low molecular weight salts with good penetration."
        },
        {
          name: "Zyme RDT",
          description: "Special enzyme for leathers where good softness is required, cleaning of follicles, keratin residues without damaging the grain of the leather."
        }
      ]
    },
    {
      id: "03",
      name: "Re-tanning",
      icon: <GiRecycle className="w-6 h-6" />,
      products: [
        {
          name: "Syntanil 60",
          description: "Neutralizing synthetic used in the uniform neutralization of chrome-tanned leather, allowing to obtain soft leathers with firm grain."
        },
        {
          name: "Supra 4",
          description: "Neutral naphthalenesulfonic employed for the re-tanning of chrome leathers, dye penetration auxiliary and as an ideal dispersant for vegetable extracts."
        },
        {
          name: "Supra 5",
          description: "Neutral naphthalenic employed for the re-tanning of chrome leathers, dye penetration auxiliary."
        },
        {
          name: "Syntan N",
          description: "Naphthalenesulfonic synthetic employed as dye equalizer and lightener in dyeing."
        },
        {
          name: "Syntan AC",
          description: "Acrylic re-tanning agent that provides excellent fullness to loose parts of leathers."
        },
        {
          name: "Syntan B",
          description: "Balance of vegetable tannins and synthetic dispersant re-tanning agents. Has low level of astringency, recommended for re-tanning of chrome leathers."
        },
        {
          name: "Syntan R77",
          description: "Melamine-based product employed for re-tanning of chrome leathers, reinforces the fibrous structure with good fullness, provides plumpness and firmness of grain."
        },
        {
          name: "Quistoplast DDM",
          description: "Synthetic Dicyandiamide re-tanning agent designed for obtaining excellent quality leathers."
        },
        {
          name: "Quistoplast D-E",
          description: "Dicyandiamide-Melamine resin-based product with low formaldehyde. Designed for manufacturing high-end leathers."
        },
        {
          name: "Quistoplast STS",
          description: "Polymeric re-tanning agent that provides excellent fullness and pleasant touch in contact with leather. Suitable for obtaining all types of leathers requiring firm grain and great softness, without affecting breaks."
        },
        {
          name: "Biosyntan CLF",
          description: "Medium-high molecular weight acrylic-maleic copolymer that forms a film of medium hardness and low elasticity capable of providing high filling power to leather fibers."
        },
        {
          name: "Stoevertan ECO M",
          description: "Highly concentrated Melamine-based resin that provides plumpness, rubbery touch and firm grain."
        },
        {
          name: "Stoevertan ECO D",
          description: "Dicyandiamide-based polymer with specific filling action for the empty and spongy area of hides, improving fiber density."
        },
        {
          name: "Stoevertan SYA",
          description: "Sulfone-based polymer. Replacement polymer with good tanning power that gives plumpness, roundness and firm grain to the leather."
        },
        {
          name: "Stoevertan SCK",
          description: "Phenyl Phenol Sulfone-based Syntan. Synthetic with good tanning power. Provides good plumpness, roundness, firm grain and closed pore to hides."
        }
      ]
    },
    {
      id: "04",
      name: "Anilines",
      icon: <GiChemicalDrop className="w-6 h-6" />,
      products: [
        {
          name: "Black 5TN Plus"
        },
        {
          name: "Black NTI 130%"
        },
        {
          name: "Black SR 140%"
        },
        {
          name: "Black 12B"
        },
        {
          name: "Grey R"
        },
        {
          name: "Grey V"
        },
        {
          name: "Grey MCGB"
        },
        {
          name: "Brown TDM"
        },
        {
          name: "Brown TMPV"
        },
        {
          name: "Brown LGN"
        },
        {
          name: "Brown EHI 130%"
        },
        {
          name: "Brown IGC 150%"
        },
        {
          name: "Brown BHR"
        },
        {
          name: "Brown MF"
        },
        {
          name: "Brown G"
        },
        {
          name: "Beige ZLF"
        },
        {
          name: "Havane RI"
        },
        {
          name: "Green BN"
        },
        {
          name: "Green V"
        },
        {
          name: "Green SI"
        },
        {
          name: "Green NG"
        },
        {
          name: "Olive SG"
        },
        {
          name: "Olive N"
        },
        {
          name: "Yellow ENG"
        },
        {
          name: "Yellow G"
        },
        {
          name: "Yellow R 200%"
        },
        {
          name: "Blue 2J"
        },
        {
          name: "Blue 2G 250%"
        },
        {
          name: "Blue 5R"
        },
        {
          name: "Blue 6B"
        },
        {
          name: "Blue BRA2"
        },
        {
          name: "Blue BR"
        },
        {
          name: "Turquoise GL"
        },
        {
          name: "Red SBG"
        },
        {
          name: "Red CI 180%"
        },
        {
          name: "Red F3B"
        },
        {
          name: "Red 3BW"
        },
        {
          name: "Orange GS 150%"
        },
        {
          name: "Orange GC"
        },
        {
          name: "Orange R 115%"
        },
        {
          name: "Fucsia B"
        },
        {
          name: "Violet S4B"
        },
        {
          name: "Violet 5BL"
        },
        {
          name: "Bordeaux SB 140%"
        },
        {
          name: "Bordeaux V"
        }
      ]
    },
    {
      id: "05",
      name: "Fatliquoring",
      icon: <GiOilDrum className="w-6 h-6" />,
      products: [
        {
          name: "Quistosan R10",
          description: "Blend of synthetic and marine sulfited oil, recommended for fatliquoring of economical hides, cutting flesh and cattle and pig linings."
        },
        {
          name: "Quistosan B8",
          description: "Sulfited oil with excellent penetration that provides a soft and fresh touch."
        },
        {
          name: "Quistosan R55",
          description: "Natural sulfited oil. Excellent softness inside the leather."
        },
        {
          name: "Quistosan SP",
          description: "Universal anionic sulfonated oil for full grain and corrected grain leathers."
        },
        {
          name: "Base BB",
          description: "Natural synthetic sulfited oil with excellent penetration."
        },
        {
          name: "Quistomax L1",
          description: "Anionic phospholipid-based emulsion."
        },
        {
          name: "Quistomax LM",
          description: "Combination of natural phospholipids with refined hydrocarbons in emulsion."
        },
        {
          name: "Quistomax DIJ",
          description: "Synthetic fatliquor. Due to its chemical nature, it is mainly used as a penetration auxiliary in any fatliquoring composition. It can be used in both tanning and re-tanning baths. As a penetration and fatliquor distribution component, it provides excellent softness and good surface touch. Good stability to electrolytes. Can be used in chrome tanning and pickling."
        },
        {
          name: "Bioil RW",
          description: "Blend of sulfonated oils with auxiliaries, good light fastness properties, excellent lubrication power."
        },
        {
          name: "Bioil MP",
          description: "Universal anionic oil for articles where medium softness, fullness and firm grain are required."
        },
        {
          name: "Quistosan S-50",
          description: "Universal anionic oil for full grain and corrected leathers."
        }
      ]
    }
  ];

  return (
    <div id="products" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Title Section */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-regular text-gray-800 mb-8">
          Our Technology
        </h1>
      </div>

      {/* Description Section with Green Strip */}
      <div className="relative mb-16">
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-green-400 to-green-600"></div>
        <div className="bg-gradient-to-r from-green-50 to-transparent pl-8 pr-4 py-8 rounded-r-lg">
          <p className="text-xl md:text-2xl font-light text-gray-700 leading-relaxed max-w-4xl">
            Our process preserves the distinctive naturalness of genuine leather through the synergy between fiber structure, 
            biopolymers, tanning agents, and synthetic products. This combination achieves optimal adherence and fullness, 
            maximizing material utilization while reducing the environmental impact of the tanning process.
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
