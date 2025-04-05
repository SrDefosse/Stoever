import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [openItems, setOpenItems] = useState([]);

  const handleToggle = (index) => {
    setOpenItems((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const faqItems = [
    {
      question: "What services does Stoever offer?",
      answer: "Stoever specializes in comprehensive industrial solutions, including engineering services, consulting, industrial maintenance, and specialized equipment supply. Our approach covers everything from planning to implementation and project monitoring."
    },
    {
      question: "What is the average response time for service requests?",
      answer: "We are committed to responding to all service requests within the first 24 business hours. For emergency cases, we have an immediate response team available 24/7."
    },
    {
      question: "How can I request a quote for my projects?",
      answer: "You can request a quote through our online contact form, by sending an email to info@grupostoever.com, or by calling our offices directly. A specialized advisor will contact you to understand your specific needs."
    },
    {
      question: "In which geographical areas do you operate?",
      answer: "We currently operate throughout the Central American region, with strategically located main offices to ensure efficient coverage and optimal response times for all our clients."
    },
    {
      question: "Do you offer preventive maintenance services?",
      answer: "Yes, we offer comprehensive preventive maintenance programs customized to each client's needs. These include regular inspections, preventive diagnostics, and scheduled maintenance plans to optimize performance and extend equipment life."
    },
    {
      question: "What guarantees do you offer on your services and products?",
      answer: "All our services and products come with specific guarantees that vary according to the type of solution implemented. We work with the best brands in the market, and our work is backed by over 20 years of industry experience."
    }
  ];

  return (
    <div className="w-[70%] mx-auto px-4 mb-16 mt-24">
      <h2 className="text-4xl font-bold text-[#011961] mb-12 text-center">FAQ</h2>
      {faqItems.map((item, idx) => (
        <motion.div
          key={idx}
          className="border-t border-gray-300 py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.2 }}
        >
          <div 
            className="flex justify-between items-start cursor-pointer group"
            onClick={() => handleToggle(idx)}
          >
            <div className="flex-1">
              <h2 className="text-xl lg:text-2xl text-gray-800 font-light mb-4 group-hover:text-blue-500 transition-colors duration-200">
                {item.question}
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
                    <div className="pl-6 text-gray-600 text-base lg:text-lg">
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        {item.answer}
                      </motion.p>
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
              className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ rotate: openItems[idx] ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {openItems[idx] ? <FiMinus className="w-4 h-4" /> : <FiPlus className="w-4 h-4" />}
            </motion.button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FAQ;
