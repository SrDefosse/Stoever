import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMenu, FiX, FiHome, FiInfo, FiBox, FiTool, FiLayers, FiMail } from 'react-icons/fi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Inicio', path: '/', icon: <FiHome size={20} /> },
    { name: 'Sobre Nosotros', path: '/about', icon: <FiInfo size={20} /> },
    { name: 'Productos', path: '/products', icon: <FiBox size={20} /> },
    { name: 'Construcción', path: '/construction', icon: <FiTool size={20} /> },
    { name: 'División Piel', path: '/leather', icon: <FiLayers size={20} /> },
    { name: 'Contacto', path: '/contact', icon: <FiMail size={20} /> },
  ]

  return (
    <>
      {/* Botón móvil */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white shadow-md text-text-primary hover:text-primary md:hidden"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Overlay para móvil */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Navbar vertical */}
      <motion.nav
        className={`fixed left-0 top-0 h-full bg-white shadow-xl z-40 flex flex-col transition-all duration-300 w-64 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } ${isExpanded ? 'md:w-64' : 'md:w-20'}`}
        initial={false}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Logo y botón de toggle */}
        <div className="p-4 flex items-center justify-between">
          <Link to="/" className="flex-shrink-0 relative h-12 w-32 flex items-center">
            <img
              src="/stoevericon.png"
              alt="Grupo Stoever"
              className={`absolute transition-all duration-300 h-10 w-10 ${
                isExpanded ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
              }`}
            />
            <img
              src="/logo.png"
              alt="Grupo Stoever"
              className={`absolute transition-all duration-300 h-12 w-auto ${
                isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              }`}
            />
          </Link>
        </div>

        {/* Línea decorativa */}
        <div className="px-4">
          <div className="h-px bg-gradient-to-r from-primary to-secondary" />
        </div>

        {/* Links */}
        <div className="flex-1 flex flex-col justify-center space-y-2 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="relative group/link flex items-center p-3 rounded-lg transition-colors duration-200 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              <motion.div
                className={`absolute left-0 w-1 h-8 rounded-full transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'bg-primary'
                    : 'bg-transparent group-hover/link:bg-primary/30'
                }`}
                layoutId="navIndicator"
              />
              <div className="flex items-center min-w-[200px]">
                <span className={`text-xl ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-text-secondary group-hover/link:text-primary'
                }`}>
                  {link.icon}
                </span>
                <span
                  className={`ml-4 text-base whitespace-nowrap transition-all duration-300 ${
                    isExpanded ? 'opacity-100 translate-x-0' : 'md:opacity-0 md:-translate-x-4 opacity-100 translate-x-0'
                  } ${
                    location.pathname === link.path
                      ? 'text-primary font-medium'
                      : 'text-text-secondary group-hover/link:text-primary'
                  }`}
                >
                  {link.name}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer del navbar */}
        <div className="p-4">
          <div className={`text-sm text-text-secondary whitespace-nowrap transition-all duration-300 ${
            isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}>
            © {new Date().getFullYear()} Grupo Stoever
          </div>
        </div>
      </motion.nav>
    </>
  )
}

export default Navbar 