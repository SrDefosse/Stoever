import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const MoleculeShape = ({ className = "", delay = 0 }) => (
  <motion.div
    className={`absolute ${className}`}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: [0.2, 0.4, 0.2], scale: 1, rotate: 360 }}
    transition={{
      opacity: { repeat: Infinity, duration: 3, delay },
      scale: { duration: 1, delay },
      rotate: { duration: 20, repeat: Infinity, ease: "linear" }
    }}
  >
    <div className="relative">
      <div className="absolute -inset-8 rounded-full border-2 border-primary-DEFAULT/30" />
      <div className="absolute -inset-12 rounded-full border-2 border-secondary-DEFAULT/20" />
      <div className="absolute -inset-16 rounded-full border-2 border-primary-DEFAULT/10" />
      <div className="w-4 h-4 rounded-full bg-primary-DEFAULT/40" />
    </div>
  </motion.div>
)

const Hero = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Fondo con moléculas */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100">
        <MoleculeShape className="top-1/4 left-1/4" delay={0} />
        <MoleculeShape className="top-3/4 left-1/3" delay={0.5} />
        <MoleculeShape className="top-1/3 right-1/4" delay={1} />
        <MoleculeShape className="bottom-1/4 right-1/3" delay={1.5} />
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-DEFAULT/10 to-secondary-DEFAULT/10" />
        </motion.div>
      </div>

      {/* Contenido principal */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="relative h-full flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Texto */}
              <motion.div
                className="text-center lg:text-left"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <motion.div
                  className="inline-block"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <span className="bg-primary-DEFAULT/10 text-primary-DEFAULT px-4 py-2 rounded-full text-sm font-semibold">
                    Innovación en Bio-Colágeno
                  </span>
                </motion.div>
                <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-text-primary">
                  {slides[currentSlide].title}
                </h1>
                <motion.div
                    className="flex items-center space-x-2 mt-6 justify-center lg:justify-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <div className="h-px w-12 bg-primary-DEFAULT" />
                  <div className="h-px w-8 bg-secondary-DEFAULT" />
                  <div className="h-px w-4 bg-primary-DEFAULT" />
                </motion.div>
              </motion.div>
              <motion.p 
                  className="mt-6 text-xl text-text-secondary"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {slides[currentSlide].description}
              </motion.p>
              <motion.div 
                  className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <Link
                  to="/products"
                  className="group inline-flex items-center px-8 py-4 border-2 border-primary-DEFAULT text-base font-medium rounded-full bg-white text-primary-DEFAULT hover:bg-primary-DEFAULT hover:text-black transition-all duration-300"
                >
                  <span>Descubre más</span>
                  <motion.svg 
                    className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </motion.svg>
                </Link>
              </motion.div>
        </motion.div>

      {/* Imagen con overlay molecular */}
      <motion.div
        className="relative hidden lg:block"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-DEFAULT/20 to-transparent">
            <MoleculeShape className="top-1/4 left-1/4 scale-75" delay={0.8} />
            <MoleculeShape className="bottom-1/4 right-1/4 scale-75" delay={1.2} />
          </div>
        </div>
      </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Indicadores de slide */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`group relative ${
              currentSlide === index ? 'w-12' : 'w-3'
            } h-3 rounded-full transition-all duration-300`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-primary-DEFAULT"
              initial={false}
              animate={{
                opacity: currentSlide === index ? 1 : 0.3
              }}
            />
          </motion.button>
        ))}
      </div>
    </div>
  )
}

export default Hero 