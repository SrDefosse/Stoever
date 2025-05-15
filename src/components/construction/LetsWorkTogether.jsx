import React from "react";
import YellowGlassButton from "../ui/YellowGlassButton"; // Assuming YellowGlassButton is in ../ui

const LetsWorkTogether = () => {
  const backgroundImageUrl = "/construction/letsworktogether.webp"; // Path relative to public folder

  return (
    // Contenedor externo similar a LeatherCTA
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Contenedor interno similar a LeatherCTA */}
      <div className="w-[95%] md:w-[80%] h-[50vh] md:h-[85vh] relative rounded-xl shadow-2xl overflow-hidden">
        {/* Imagen de fondo */}
        <img 
          src={backgroundImageUrl} 
          alt="Construction site" // Cambia el alt text si es necesario
          className="w-full h-full object-cover"
        />
        
        {/* Superposición de contenido */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 bg-black/50">
          {/* Contenido original */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold text-center px-4">
            Let's Work Together
          </h2>
          <YellowGlassButton text="Get in Touch" onClick={() => console.log("Button clicked!")} />
        </div>
      </div>
    </div>
  );
};

export default LetsWorkTogether;
