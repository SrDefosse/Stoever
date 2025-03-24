import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const OurPhilosofy = () => {
  return (
    <section className="relative min-h-[600px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image 
            src="/philosophy-bg.png" 
            alt="Our Philosophy Background"
            fill
            style={{ objectFit: 'contain' }}
            className="brightness-50 opacity-40"
            priority
          />
        </div>
      </div>
      
      {/* Content positioned bottom left */}
      <div className="absolute bottom-12 left-12 z-10 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#011961]">
            Our Philosophy
          </h2>
          <p className="text-lg md:text-xl text-black">
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
