import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const OurPhilosofy = () => {
  return (
    <section className="relative min-h-[500px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image 
          src="/philosophy-bg.jpg" 
          alt="Our Philosophy Background"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Philosophy</h2>
          <p className="text-lg md:text-xl mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurPhilosofy;
