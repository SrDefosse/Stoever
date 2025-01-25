import React from 'react'
import { motion } from 'framer-motion'

const IconButton = ({ 
  children, 
  icon,
  variant = 'primary',
  className = '',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center p-3 rounded-lg font-medium transition-all duration-200 border relative'
  
  const variants = {
    primary: 'bg-white text-text-primary hover:bg-primary border-primary shadow-sm',
    secondary: 'bg-white text-text-primary hover:bg-sky-300 border-secondary shadow-sm',
    ghost: 'bg-transparent text-text-primary hover:bg-gray-50 border-transparent'
  }

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <button 
        className={buttonClasses}
        {...props}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </button>
    </motion.div>
  )
}

export default IconButton 