import React from "react";
import YellowGlassButton from "../ui/YellowGlassButton"; // Assuming YellowGlassButton is in ../ui

const LetsWorkTogether = () => {
  const backgroundImageUrl = "/letsworktogether.jpg"; // Path relative to public folder

  return (
    <section 
      className="relative flex h-[80vh] min-h-[600px] items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }} // Use path from public folder
    >
      {/* Overlay Oscuro */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center text-center text-white p-4">
        <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
          Let's Work Together
        </h2>
        <YellowGlassButton text="Get in Touch" onClick={() => console.log("Button clicked!")} />
      </div>
    </section>
  );
};

export default LetsWorkTogether;
