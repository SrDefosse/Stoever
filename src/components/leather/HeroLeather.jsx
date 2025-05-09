import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';
import BlueGlassButton from "../ui/BlueGlassButton";
import GreenGlassButton from "../ui/GreenGlassButton";
import MaxWidthWrapper from "../ui/MaxWidthWrapper";

const HeroLeather = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/leather-bg.jpg"
          alt="Leather background"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 w-full h-full min-h-screen flex items-center">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Premium Leather <br />
              <span className="text-[#66CC66]">Sustainable Solutions</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl">
              Discover our innovative approach to leather processing 
              with eco-friendly technologies and premium quality results.
            </p>
            
            <motion.div
              className="flex flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <Link href="/leather/products">
                <GreenGlassButton text="Explore Products" />
              </Link>
              <Link href="/leather/products#technology-intro">
                <BlueGlassButton text="Our Technology" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroLeather;

