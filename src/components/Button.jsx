import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const Button = ({ children, variant = 'primary', to, type = 'button', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 border border-gray-300'
  const variants = {
    primary: 'bg-white text-text-primary hover:bg-gray-50 hover:border-primary-DEFAULT',
    secondary: 'bg-white text-text-primary hover:bg-gray-50 hover:border-secondary-DEFAULT',
    outline: 'bg-white text-text-primary hover:bg-gray-50 hover:border-primary-DEFAULT',
    ghost: 'bg-white text-text-primary hover:bg-gray-50 hover:border-primary-DEFAULT'
  }

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={buttonClasses} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={buttonClasses} {...props}>
      {children}
    </button>
  )
}

export default Button 