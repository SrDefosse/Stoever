import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const TwoColumnLayout = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Título y descripción */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec odio ipsum.
        </p>
      </motion.div>

      {/* Primera fila: Card a la izquierda, textos a la derecha */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        {/* Card */}
        <motion.div
          className="bg-gray-900 text-white p-8 rounded-xl w-full md:w-1/2 min-h-[400px] flex flex-col justify-center text-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-4">Title</h3>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat ultrices mauris, sed commodo est tincidunt a.
          </p>
        </motion.div>

        {/* Lista de textos con íconos */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <ul className="space-y-6">
            <li className="flex items-start gap-3">
              <span className="text-2xl text-[#FFDD0A]">
                <FiCheck />
              </span>
              <div>
                <h4 className="text-lg font-semibold">Feature</h4>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl text-[#FFDD0A]">
                <FiCheck />
              </span>
              <div>
                <h4 className="text-lg font-semibold">Feature</h4>
                <p className="text-gray-600 text-sm">
                  Nulla facilisi. Donec dapibus nisl sed libero tincidunt, ac ultrices ex pulvinar.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl text-[#FFDD0A]">
                <FiCheck />
              </span>
              <div>
                <h4 className="text-lg font-semibold">Feature</h4>
                <p className="text-gray-600 text-sm">
                  In hac habitasse platea dictumst. Quisque nec ullamcorper urna, a bibendum diam.
                </p>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Segunda fila: Card a la derecha, textos a la izquierda */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8">
        {/* Card */}
        <motion.div
          className="bg-gray-900 text-white p-8 rounded-lg w-full md:w-1/2 min-h-[400px] flex flex-col justify-center text-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-4">Title</h3>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur feugiat urna. Maecenas venenatis scelerisque luctus.
          </p>
        </motion.div>

        {/* Lista de textos con íconos */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <ul className="space-y-6">
            <li className="flex items-start gap-3">
              <span className="text-2xl text-[#FFDD0A]">
                <FiCheck />
              </span>
              <div>
                <h4 className="text-lg font-semibold">Feature</h4>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum dui quis tellus ultrices.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl text-[#FFDD0A]">
                <FiCheck />
              </span>
              <div>
                <h4 className="text-lg font-semibold">Feature</h4>
                <p className="text-gray-600 text-sm">
                  Praesent tristique lacus et elit scelerisque, non interdum felis consequat.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl text-[#FFDD0A]">
                <FiCheck />
              </span>
              <div>
                <h4 className="text-lg font-semibold">Feature</h4>
                <p className="text-gray-600 text-sm">
                  Vivamus vehicula ultrices nulla, in ullamcorper diam consequat quis.
                </p>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default TwoColumnLayout;
