import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoChevronDownOutline } from 'react-icons/io5';

// Helper object for variant styles
const variantStyles = {
  blue: {
    buttonBase: 'bg-[#007AFF]/10 border-white/30 focus:ring-white/50 hover:bg-[#007AFF]/20',
    buttonShadow: 'shadow-[0_0_15px_rgba(0,122,255,0.2)] hover:shadow-[0_0_20px_rgba(0,122,255,0.3)]',
    dropdownBg: 'bg-[#007AFF]/90 border-white/30',
    optionHover: 'hover:bg-white/20',
    scrollbarThumb: 'scrollbar-thumb-white/30',
  },
  green: {
    buttonBase: 'bg-green-600/10 border-white/30 focus:ring-white/50 hover:bg-green-600/20',
    buttonShadow: 'shadow-[0_0_15px_rgba(22,163,74,0.2)] hover:shadow-[0_0_20px_rgba(22,163,74,0.3)]', // Green shadow
    dropdownBg: 'bg-green-700/90 border-white/30', // Darker green dropdown
    optionHover: 'hover:bg-white/20',
    scrollbarThumb: 'scrollbar-thumb-white/30',
  },
  yellow: {
    buttonBase: 'bg-yellow-400/10 border-yellow-300/50 focus:ring-yellow-400/50 hover:bg-yellow-400/20', // Yellow tones
    buttonShadow: 'shadow-[0_0_15px_rgba(250,204,21,0.2)] hover:shadow-[0_0_20px_rgba(250,204,21,0.3)]', // Yellow shadow
    dropdownBg: 'bg-yellow-600/90 border-yellow-300/50', // Yellow dropdown
    optionHover: 'hover:bg-yellow-400/30', // Yellow hover for options
    scrollbarThumb: 'scrollbar-thumb-yellow-300/50', // Yellow scrollbar thumb
  },
  default: { // Fallback/Original styles (using blue as default)
    buttonBase: 'bg-white/10 border-white/30 focus:ring-white/50 hover:bg-white/15',
    buttonShadow: 'shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]',
    dropdownBg: 'bg-[#007AFF]/90 backdrop-blur-xl border border-white/30', // Kept backdrop blur for default
    optionHover: 'hover:bg-white/20',
    scrollbarThumb: 'scrollbar-thumb-white/20',
  }
};

const CustomSelect = ({ options, value, onChange, placeholder, variant = 'default' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const styles = variantStyles[variant] || variantStyles.default;

  const dropdownVariants = {
    hidden: { 
      opacity: 0,
      y: -10,
      scale: 0.95,
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3 backdrop-blur-md rounded-lg text-white focus:outline-none focus:border-transparent transition-all duration-300 flex justify-between items-center ${styles.buttonBase} ${styles.buttonShadow}`}
      >
        <span className="block truncate">
          {value ? options.find(opt => opt.value === value)?.label : placeholder}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-white/80"
        >
          <IoChevronDownOutline size={20} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`absolute z-50 w-full mt-2 backdrop-blur-xl rounded-lg shadow-lg overflow-hidden ${styles.dropdownBg}`}
          >
            <motion.ul
              className={`py-1 max-h-60 overflow-auto scrollbar-thin ${styles.scrollbarThumb} scrollbar-track-transparent`}
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.05
                  }
                }
              }}
            >
              {options.map((option) => (
                <motion.li
                  key={option.value}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <button
                    type="button"
                    className={`w-full text-left px-4 py-2 text-white transition-colors duration-150 ${styles.optionHover}`}
                    onClick={() => {
                      onChange(option.value);
                      setIsOpen(false);
                    }}
                  >
                    {option.label}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomSelect; 