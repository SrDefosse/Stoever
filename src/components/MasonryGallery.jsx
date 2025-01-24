import { motion } from 'framer-motion'

const MasonryGallery = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className={`relative overflow-hidden rounded-lg ${
            index % 3 === 0 ? 'row-span-2' : ''
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <motion.div
            className="group relative aspect-[4/3] overflow-hidden bg-gray-100"
            whileHover="hover"
          >
            <img
              src={image.url}
              alt={image.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              variants={{
                hover: { opacity: 1 }
              }}
            >
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-semibold text-white">
                  {image.title}
                </h3>
                {image.description && (
                  <p className="mt-2 text-sm text-white/90">
                    {image.description}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

export default MasonryGallery 