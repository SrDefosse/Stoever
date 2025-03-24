import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from './Button';

const OurPhilosofy = () => {
  return (
    <section className="mt-16 relative min-h-[600px] w-full">
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
          We are a competitive business with creative, sustainable and innovative values held as the foremost of our business model. We aim to satisfy our clients’ necessities with products of high quality and international environmental standards. 
          </p>
          <Button>
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurPhilosofy;
