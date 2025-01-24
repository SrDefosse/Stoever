import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

const AccordionItem = ({ title, content, isOpen, onToggle, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="overflow-hidden rounded-2xl bg-white shadow-soft"
    >
      <motion.button
        className="flex w-full items-center justify-between px-6 py-4 text-left transition-all duration-300 hover:bg-gray-50 group"
        onClick={onToggle}
        whileHover={{ scale: 0.995 }}
        whileTap={{ scale: 0.99 }}
      >
        <span className="text-lg font-semibold text-text-primary flex items-center gap-2">
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-primary-DEFAULT"
          >
            <FiChevronDown size={24} />
          </motion.span>
          {title}
        </span>
        <motion.div
          className="text-sm text-text-secondary group-hover:text-primary-DEFAULT transition-colors duration-300"
        >
          {isOpen ? 'Cerrar' : 'Ver detalles'}
        </motion.div>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="border-t border-gray-100 px-6 py-4">
              <div className="space-y-6">
                {Array.isArray(content) ? (
                  content.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="rounded-lg bg-gray-50 overflow-hidden"
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <motion.img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h4 className="text-lg font-semibold text-white">
                              {item.title}
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="prose prose-sm max-w-none">
                          {item.description.split('\n').map((line, lineIdx) => (
                            <p key={lineIdx} className="text-text-secondary">
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <p className="text-text-secondary">{content}</p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
          index={index}
        />
      ))}
    </div>
  )
}

export default Accordion 