import React from "react";
import { motion } from "framer-motion";

const Button = ({ 
  children, 
  onClick, 
  className = "", 
  type = "button",
  disabled = false 
}) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-10 py-3 rounded-full font-semibold text-white transition-all ${className}`}
      style={{ backgroundColor: "#1D4ED8" }}
      whileHover={{ scale: 1.05, backgroundColor: "#1E40AF" }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
