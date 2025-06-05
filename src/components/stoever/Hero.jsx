import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import MaxWidthWrapper from "../ui/MaxWidthWrapper";
import BlueGlassButton from "../ui/BlueGlassButton";
import WhiteGlassButton from "../ui/WhiteGlassButton";

// Definición de la paleta de colores (se mueve fuera del componente para optimizar)
const colors = {
  darkBlue: "#011961",
  brightBlue: "#007AFF",
  mediumBlue: "#0126A9",
  white: "#FFFFFF",
};

const HeroSection = ({ videoUrl = "/stoever-imgs/hero_video.mp4" }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const playVideo = async () => {
        try {
          await videoElement.play();
        } catch (error) {
          console.log("Error al reproducir el video:", error);
        }
      };

      playVideo();
      videoElement.addEventListener("loadeddata", playVideo);
      return () => videoElement.removeEventListener("loadeddata", playVideo);
    }
  }, []);

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center"
      style={{ backgroundColor: colors.darkBlue }}
    >
      {/* Video de fondo con overlay azul transparente */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute w-full h-full object-cover"
          style={{ opacity: 0.85 }}
        >
          <source src={videoUrl} type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundColor: colors.brightBlue,
            opacity: 0.1,
          }}
        ></div>
      </div>

      {/* Contenedor principal del hero */}
      <MaxWidthWrapper className="h-full py-16 md:py-0 mt-14 md:mt-0 flex items-center justify-center relative z-20">
        {/* Sección de texto */}
        <motion.div
          className="w-full text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ color: colors.white }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your <span className="text-[#007AFFff]">Eco-Friendly</span> Alternatives
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl mb-8 max-w-lg mx-auto"
            style={{ color: colors.white, opacity: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A family business with German roots, Stoever Group holds over 70 years of experience in the chemical/leather tanning industry.
          </motion.p>

          <motion.div
            className="flex flex-row justify-center gap-4 w-fit mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <BlueGlassButton text="Learn More" href="#subsidiaries-section"/>
            <WhiteGlassButton text="Contact Us" href="/contact" />
          </motion.div>
        </motion.div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HeroSection;

