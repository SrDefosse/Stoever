import React from "react";

const DoubleCards = () => {
  return (
    // Contenedor principal con padding base y padding mayor en pantallas medianas+
    <section className="container mx-auto p-4 sm:p-10 md:py-20 mb-16">
      {/* Sección interna para centrar y añadir margen vertical */}
      <section className="relative flex justify-center my-8 md:my-16">
        {/* Contenedor relativo para la imagen y el texto, con ancho máximo */}
        <div className="relative w-full max-w-[1400px]">
          {/* Imagen con altura responsiva y margen inferior para móviles/tabletas */}
          <img
            className="w-full h-64 sm:h-80 md:h-[500px] lg:h-[600px] object-cover rounded-2xl mb-6 lg:mb-0 shadow-md" // Añadido shadow-md para un poco de profundidad
            src="/green_innovators.jpg"
            alt="Green Innovators"
          />
          {/* Caja de contenido */}
          <div
            // Clases base para móvil (apilado, padding, fondo, etc.)
            className="content bg-[#007AFFff] p-6 rounded-2xl shadow-lg w-full text-white
                       lg:absolute lg:top-48 lg:left-5 lg:max-w-lg lg:p-12" // Clases para pantallas grandes (posición absoluta, padding mayor)
          >
            {/* Sección "About Us" */}
            <div className="flex justify-between font-bold text-sm">
              <p>Since 1946</p>
            </div>

            {/* Título con tamaño responsivo */}
            <h2 className="text-2xl sm:text-3xl font-semibold mt-4 md:mt-6 lg:mt-8"> {/* Ajustado margen superior */}
              The Green Innovators of the Future
            </h2>

            {/* Párrafo con alineación responsiva */}
            <p className="my-4 text-left sm:text-justify font-medium leading-relaxed"> {/* Ajustado margen y alineación */}
              First established in 1946 by a German family in León, Gto. México.
              We are now a large business holding 160 employees, 2 production factories,
              multiple certifications in the leather tanning solution research industry,
              multiple alliances with industry peers and presence in 15 countries.
            </p>

            {/* Grid de estadísticas (mantiene 2 columnas, generalmente adecuado para móviles) */}
            <div className="grid grid-cols-2 gap-6 mt-6 md:mt-8"> {/* Ajustado margen superior */}
              <div className="text-center">
                <p className="text-2xl font-bold mb-1">70+</p>
                <p className="text-xs sm:text-sm uppercase tracking-wide">Years of Experience</p> {/* Tamaño de texto ligeramente ajustado */}
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold mb-1">160+</p>
                <p className="text-xs sm:text-sm uppercase tracking-wide">Employees</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold mb-1">1</p>
                <p className="text-xs sm:text-sm uppercase tracking-wide">Main Branch</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold mb-1">2</p>
                <p className="text-xs sm:text-sm uppercase tracking-wide">Production Factories</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default DoubleCards;