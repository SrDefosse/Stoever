import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppButton = () => {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.a
        href="https://wa.me/+525555555555"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block"
        whileHover="hover"
      >
        <div className="relative">
          {/* Outer ring for better visibility */}
          <div className="absolute -inset-1 bg-white rounded-full opacity-20 blur-sm"></div>
          {/* Main button */}
          <div className="relative bg-[#25D366] p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            <FaWhatsapp className="w-8 h-8 text-white" />
          </div>
        </div>
        
        {/* Tooltip */}
        <motion.div
          className="absolute bottom-full right-0 mb-2 w-auto"
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          variants={{
            hover: { opacity: 1, y: 0, scale: 1 }
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="bg-white px-4 py-2 rounded-lg shadow-soft">
            <p className="text-sm font-medium text-text-primary whitespace-nowrap">
              ¡Contáctanos por WhatsApp!
            </p>
            <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white transform rotate-45"></div>
          </div>
        </motion.div>
      </motion.a>
    </motion.div>
  )
}

export default WhatsAppButton 