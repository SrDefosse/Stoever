import React from "react";

function WireframeComponent() {
  return (
    <section className="relative max-w-6xl mx-auto">
      {/* Contenedor principal: en pantallas grandes mostramos dos columnas */}
      <div className="flex flex-col md:flex-row">
        
        {/* Sección Izquierda (texto / fondo) */}
        <div className="bg-gray-200 p-6 md:w-1/2 z-10 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            The Green Innovators of the Future
          </h2>
          <p className="mb-4">
            (Wireframe) Información breve sobre la empresa, su historia, etc.
          </p>
          <ul className="space-y-2">
            <li>70+ Years of experience</li>
            <li>160+ Employees</li>
            <li>2 Production Factories</li>
            <li>1 Main Branch</li>
          </ul>
        </div>

        {/* Sección Derecha (imagen / superposición) */}
        <div className="relative md:w-1/2">
          {/* Contenedor para simular la imagen */}
          <div
            className="
              bg-gray-300
              h-64
              md:h-full
              md:-mt-8      /* Empuja hacia arriba para el overlap */
              md:-ml-8      /* Empuja hacia la izquierda para el overlap */
              shadow-md
              rounded-lg
            "
          >
            {/* Aquí iría tu imagen o elemento gráfico */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WireframeComponent;
