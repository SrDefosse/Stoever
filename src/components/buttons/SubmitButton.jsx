import React from 'react'
import { motion } from 'framer-motion'

const SubmitButton = ({ 
  children, 
  isLoading = false,
  className = '',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 border relative'
  const buttonStyles = `${baseStyles} bg-primary text-text-primary hover:bg-primary-600 border-primary shadow-sm ${className} ${isLoading ? 'cursor-not-allowed opacity-75' : ''}`

  const loadingSpinner = (
    <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  )

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <button 
        type="submit"
        className={buttonStyles}
        disabled={isLoading}
        {...props}
      >
        {isLoading && loadingSpinner}
        {children}
      </button>
    </motion.div>
  )
}

export default SubmitButton 