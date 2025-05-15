import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const MissionVision = () => {
  const [openItems, setOpenItems] = useState([true, false, false]);

  const handleToggle = (index) => {
    setOpenItems((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const items = [
    {
      number: '01',
      title: 'Mission',
      content: [
        'Manufacture ecological chemicals',
        'Serve diverse industries',
        'Committed personnel',
        'Innovation & values',
        'Satisfy stakeholders',
        'Maximize profitability',
      ],
    },
    {
      number: '02',
      title: 'Vision',
      content: [
        'First market choice',
        'Exceed client expectations',
        'Quality products',
        'Exemplary service',
        'Ecological responsibility',
        'Cutting-edge technology',
        'Pioneering collagen tanning',
      ],
    },
    {
      number: '03',
      title: 'Values',
      content: [
        'Optimal sustainable processes',
        'Employ innovation',
        'Develop opportunities',
        'Ensure future stability',
      ],
    },
  ];

  return (
    <div className="w-[70%] mx-auto px-4">
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          className="border-t border-gray-300 py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.2 }}
        >
          <div 
            className="flex justify-between items-start cursor-pointer group"
            onClick={() => handleToggle(idx)}
          >
            <div className="flex-1">
              <h2 className="text-2xl lg:text-4xl text-gray-800 font-light mb-4 group-hover:text-blue-500 transition-colors duration-200">
                <span className="font-normal mr-2">{item.number}</span>
                {item.title}
              </h2>

              <AnimatePresence>
                {openItems[idx] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pl-6 text-gray-600 space-y-2 text-base lg:text-lg">
                      {item.content.map((line, lineIdx) => (
                        <motion.p
                          key={lineIdx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: lineIdx * 0.1 }}
                        >
                          {line}
                        </motion.p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                handleToggle(idx);
              }}
              className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ rotate: openItems[idx] ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {openItems[idx] ? <FiMinus className="w-5 h-5" /> : <FiPlus className="w-5 h-5" />}
            </motion.button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default MissionVision; 
