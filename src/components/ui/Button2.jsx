import React from "react";
import { motion } from "framer-motion";

const Button2 = ({ 
  children, 
  onClick, 
  className = "", 
  type = "button",
  disabled = false,
  borderColor = "#A0CFFF",
  textColor = "#2F2F2F",
  backgroundColor = "#A0CFFF"
}) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-10 py-3 rounded-full font-semibold transition-all ${className}`}
      style={{ 
        backgroundColor: backgroundColor, 
        color: textColor
      }}
      whileHover={{ scale: 1.05, backgroundColor: "#8BC1FF" }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default Button2;
