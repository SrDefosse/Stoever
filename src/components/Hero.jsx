import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import MaxWidthWrapper from "./MaxWidthWrapper";
import BlueButton from "./BlueButton";
import WhiteButton from "./WhiteButton";

// Definición de la paleta de colores (se mueve fuera del componente para optimizar)
const colors = {
  darkBlue: "#011961",
  brightBlue: "#007AFF",
  mediumBlue: "#0126A9",
  white: "#FFFFFF",
};

const HeroSection = ({ heroImage, videoUrl = "/hero_video.mp4" }) => {
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
          poster="/stoever_group_logo_white.png"
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
      <MaxWidthWrapper className="h-full py-16 md:py-0 mt-14 md:mt-0 flex flex-col md:flex-row items-center justify-center relative z-20">
        {/* Sección de texto */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0"
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
            Your Eco-Friendly Alternatives
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl mb-8 max-w-lg mx-auto md:mx-0"
            style={{ color: colors.white, opacity: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A family business with German roots, Stoever Group holds over 70 years of experience in the chemical/leather tanning industry.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <BlueButton text="Learn More" />

            <WhiteButton text="Contact Us" />
          </motion.div>
        </motion.div>

        {/* Sección de imagen con curvas decorativas */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            {/* Se ha removido el círculo difuminado que estaba detrás del logo */}
            <motion.div
              className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden"
              style={{
                backgroundColor: colors.mediumBlue,
                borderColor: colors.brightBlue,
                borderWidth: "2px",
                borderStyle: "solid",
              }}
              animate={{
                boxShadow: [
                  `0 0 20px rgba(0, 122, 255, 0.3)`,
                  `0 0 40px rgba(0, 122, 255, 0.5)`,
                  `0 0 20px rgba(0, 122, 255, 0.3)`,
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="w-full h-full relative overflow-hidden rounded-full">
                {heroImage ? (
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src={heroImage}
                      alt="Hero"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div
                    className="absolute inset-0 w-full h-full flex items-center justify-center"
                    style={{
                      background: `radial-gradient(circle, ${colors.brightBlue}, ${colors.mediumBlue})`,
                    }}
                  >
                    <img
                      src="/stoever_group_logo_white.png"
                      alt="Stoever Group"
                      className="w-3/4 h-3/4 object-contain"
                    />
                  </div>
                )}

                <motion.div
                  className="absolute top-4/5 left-1/5 w-4 sm:w-6 h-4 sm:h-6 rounded-full"
                  style={{ backgroundColor: colors.white, opacity: 0.6 }}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0.8, 0.6] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <motion.div
                  className="absolute bottom-1/5 right-1/5 w-3 sm:w-4 h-3 sm:h-4 rounded-full"
                  style={{ backgroundColor: colors.white, opacity: 0.6 }}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0.8, 0.6] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                />

                <motion.div
                  className="absolute bottom-0 left-0 w-full h-3/5"
                  style={{
                    background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23FFFFFF' fill-opacity='0.2' d='M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,181.3C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />

                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-20"
                  animate={{ opacity: [0.2, 0.3, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>
            </motion.div>

            {/* Elemento decorativo (solo se mantiene el de la esquina inferior izquierda) */}
            <motion.div
              className="absolute -bottom-2 -left-2 w-6 sm:w-8 h-6 sm:h-8 rounded-full"
              style={{ backgroundColor: colors.brightBlue, opacity: 0.7 }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 3.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HeroSection;
