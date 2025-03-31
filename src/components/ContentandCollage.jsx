import { motion } from 'framer-motion';
import Image from 'next/image';
import BlueButton from './BlueButton';
import WhiteButton from './WhiteButton';

const ContentandCollage = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row items-stretch gap-8">
        {/* Bloque de texto (lado izquierdo) */}
        <motion.div
          className="md:w-1/2 flex flex-col justify-center min-h-[400px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Active in <span className="text-[#007AFF]">15 countries</span> worldwide
          </p>
          <p className="text-gray-600">
          Since our establishment in 1946, in León, Gto. México, we have maintained our compromise to develop chemical solutions that are innovative, creative and good for the environment. Today we are a proudly Mexican business with multiple important industry certifications and alliances.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <BlueButton text="Learn More" />
            <WhiteButton text="Contact Us" />
          </div>
        </motion.div>

        {/* Collage de imágenes (lado derecho) */}
        <motion.div
          className="md:w-1/2 flex flex-col min-h-[400px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Text above collage */}
          <p className="text-[#007AFF] mb-4">
            160 employees. 2 production factories.
          </p>
          
          {/* Collage images */}
          <div className="grid grid-cols-2 gap-4 flex-grow">
            {/* Columna izquierda del collage: dos imágenes apiladas */}
            <div className="grid grid-rows-2 gap-4">
              <div className="relative w-full h-full">
                <Image src="/collage1.jpg" alt="Image 1" fill className="object-cover rounded-lg" />
              </div>
              <div className="relative w-full h-full">
                <Image src="/collage2.jpg" alt="Image 2" fill className="object-cover rounded-lg" />
              </div>
            </div>
            {/* Columna derecha: una imagen que ocupa todo el alto */}
            <div className="relative w-full h-full">
              <Image src="/collage3.jpg" alt="Image 3" fill className="object-cover rounded-lg" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentandCollage;
