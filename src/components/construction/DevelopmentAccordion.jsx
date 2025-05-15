import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const DevelopmentAccordion = () => {
  // Start with the first item open, rest closed
  const [openItems, setOpenItems] = useState([true, false, false, false, false]);

  const handleToggle = (index) => {
    setOpenItems((prev) => {
      const newState = prev.map((item, idx) => idx === index ? !item : false);
      return newState;
    });
  };

  const developmentTypes = [
    {
      number: '01',
      title: 'High-Rise Apartment Solutions',
      content: 'Specialized product systems for multi-unit residential buildings, enhancing structural integrity, energy efficiency, and modern aesthetics in urban living spaces.',
    },
    {
      number: '02',
      title: 'Facility Products',
      content: 'Advanced material solutions for state-of-the-art facilities, ensuring compliance with stringent infrastructure standards and supporting advanced technology integration.',
    },
    {
      number: '03',
      title: 'Residential Project Supplies',
      content: 'A comprehensive range of products for residential projects, including single-family homes and townhouses, focusing on quality, durability, and ease of application.',
    },
    {
      number: '04',
      title: 'Industrial Application Systems',
      content: 'Robust product systems tailored for manufacturing, warehousing, and logistics facilities, designed for operational efficiency, scalability, and heavy-duty performance.',
    },
    {
        number: '05',
        title: 'Agro-Industrial Solutions',
        content: 'Specialized products and materials supporting agricultural processing and industrial activities, optimizing production flow and resource management in the agri-business sector.',
    },
  ];

  return (
    // Removed fixed width and centering, let the parent component handle layout
    <div className="w-full mt-6">
      {developmentTypes.map((item, idx) => (
        <motion.div
          key={idx}
          // Adjusted border style for integration
          className={`border-t ${idx === 0 ? 'border-t-0' : 'border-gray-600'} py-6`} // Use a darker border for the theme
          initial={{ opacity: 0 }} // Simplified initial animation
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: idx * 0.1 }} // Stagger animation
        >
          <div
            className="flex justify-between items-start cursor-pointer group"
            onClick={() => handleToggle(idx)}
          >
            {/* Title and Content Area */}
            <div className="flex-1 pr-4"> {/* Added padding-right */}
              <h3 className="text-xl lg:text-2xl text-white font-light mb-2 group-hover:text-yellow-500 transition-colors duration-200">
                <span className="font-normal mr-2 text-yellow-500">{item.number}</span> {/* Number styled differently */}
                {item.title}
              </h3>

              <AnimatePresence>
                {openItems[idx] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    {/* Content Styling */}
                    <div className="pl-[3rem] text-gray-300 text-base lg:text-lg mt-2"> {/* Indented content, adjusted text color */}
                       <p>{item.content}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Button */}
            <motion.button
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the outer div's onClick
                handleToggle(idx);
              }}
              className="bg-yellow-500 text-black rounded-full w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center flex-shrink-0 hover:bg-yellow-600 transition-colors duration-200" // Adjusted size and color
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ rotate: openItems[idx] ? 45 : 0 }} // Changed rotation effect slightly
              transition={{ duration: 0.2 }}
            >
              <FiPlus className={`w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-200 ${openItems[idx] ? 'rotate-90' : ''}`} /> {/* Plus always visible, rotates */}
            </motion.button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default DevelopmentAccordion;
