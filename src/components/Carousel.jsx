import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const Carousel = ({ slides, autoPlayInterval = 5000, showControls = true, showIndicators = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    if (autoPlayInterval > 0) {
      const timer = setInterval(() => {
        setDirection(1)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
      }, autoPlayInterval)
      return () => clearInterval(timer)
    }
  }, [slides.length, autoPlayInterval])

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection
      if (newIndex < 0) newIndex = slides.length - 1
      if (newIndex >= slides.length) newIndex = 0
      return newIndex
    })
  }

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative aspect-[16/9]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1)
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1)
              }
            }}
            className="absolute inset-0"
          >
            <div className="relative h-full w-full">
              <img
                src={slides[currentIndex].image}
                alt={slides[currentIndex].title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    {slides[currentIndex].title}
                  </h2>
                  {slides[currentIndex].description && (
                    <p className="mt-2 text-white/90 text-base sm:text-lg">
                      {slides[currentIndex].description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {showControls && (
          <>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors duration-200"
              onClick={() => paginate(-1)}
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors duration-200"
              onClick={() => paginate(1)}
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {showIndicators && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white w-4'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Carousel 