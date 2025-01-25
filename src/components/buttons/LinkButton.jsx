import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const LinkButton = ({ 
  children, 
  to, 
  variant = 'primary',
  className = '',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 border relative'
  
  const variants = {
    primary: 'bg-white text-text-primary hover:bg-primary border-primary shadow-sm',
    secondary: 'bg-white text-text-primary hover:bg-secondary border-secondary shadow-sm',
    outline: 'bg-transparent text-text-primary hover:bg-gray-50 border-gray-300 hover:border-primary'
  }

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link 
        to={to} 
        className={buttonClasses} 
        {...props}
      >
        {children}
      </Link>
    </motion.div>
  )
}

export default LinkButton 