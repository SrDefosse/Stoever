import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const WhatWeDo = () => {
  return (
    <section className="relative w-screen min-h-[500px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image 
          src="/what-we-do-bg.jpg" 
          alt="What We Do Background"
          fill
          className="object-cover brightness-75"
          priority
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What We Do</h2>
          <p className="text-lg md:text-xl mb-8">
          Stoever is specialized in the research, development, fabrication and commercialization of cutting-edge biochemical products in many industries, such as the tanning industry, agro-industrial and construction that are aimed to be environmentally friendly 
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
