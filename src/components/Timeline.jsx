import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const TimelineItem = ({ year, title, description, index, isLast }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-center`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      {/* Línea y punto */}
      <div className="relative flex-grow-0 flex-shrink-0 w-24 md:w-1/2 flex justify-center">
        <div className="h-full w-px bg-primary-light absolute top-0 bottom-0" />
        <div className="w-6 h-6 bg-primary-DEFAULT rounded-full shadow-md relative z-10" />
        {!isLast && <div className="h-full w-px bg-primary-light absolute top-6 bottom-0" />}
      </div>

      {/* Contenido */}
      <div className={`flex-grow-0 flex-shrink-0 w-full md:w-1/2 px-4 py-6 ${
        isEven ? 'md:pr-12' : 'md:pl-12'
      }`}>
        <div className="bg-white rounded-xl shadow-soft p-6">
          <motion.span
            className="font-bold text-primary-DEFAULT text-lg mb-1 block"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
          >
            {year}
          </motion.span>
          <motion.h3
            className="font-semibold text-xl mb-2 text-text-primary"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          >
            {title}
          </motion.h3>
          <motion.p
            className="text-text-secondary leading-relaxed"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}

const Timeline = ({ events }) => {
  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="relative py-10">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-primary-light" />
        {events.map((event, index) => (
          <TimelineItem
            key={index}
            {...event}
            index={index}
            isLast={index === events.length - 1}
          />
        ))}
      </div>
    </div>
  )
}

export default Timeline 