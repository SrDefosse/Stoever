import React from 'react';
import { motion } from 'framer-motion';

const WhatWeDo = () => {
  return (
    <section id="whatwedo" className="relative w-full max-w-7xl mx-auto min-h-[700px] flex items-center overflow-hidden my-20 rounded-3xl px-4 md:px-8">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0 rounded-3xl px-4 md:px-8 pointer-events-none">
        <img 
          src="/stoever/what-we-do-bg.webp"
          alt="What We Do Background"
          className="w-full h-full object-cover brightness-75 rounded-3xl"
          loading="lazy"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32 text-white flex justify-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl text-right"
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

