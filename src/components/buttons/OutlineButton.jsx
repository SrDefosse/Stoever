import React from 'react'
import { motion } from 'framer-motion'

const OutlineButton = ({ 
  children, 
  color = 'primary',
  className = '',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 border-2 relative'
  
  const colors = {
    primary: 'border-primary text-text-primary hover:bg-primary',
    secondary: 'border-secondary text-text-primary hover:bg-secondary',
    white: 'border-white text-text-primary hover:bg-white'
  }

  const buttonClasses = `${baseStyles} ${colors[color]} ${className}`

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <button 
        className={buttonClasses}
        {...props}
      >
        {children}
      </button>
    </motion.div>
  )
}

export default OutlineButton 