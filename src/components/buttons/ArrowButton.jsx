import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ArrowButton = ({ to, children, className = "" }) => {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center px-8 py-4 border-2 border-primary-DEFAULT text-base font-medium rounded-full bg-white text-text-primary hover:bg-primary-DEFAULT transition-all duration-300 ${className}`}
    >
      <span>{children}</span>
      <motion.svg 
        className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path 
          fillRule="evenodd" 
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
          clipRule="evenodd" 
        />
      </motion.svg>
    </Link>
  )
}

export default ArrowButton 