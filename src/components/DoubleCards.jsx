import React from "react";

function WireframeComponent() {
  return (
    <section className="relative max-w-7xl mx-auto p-4 min-h-[700px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-0">
        {/* Card Izquierdo (Texto) */}
        <div className="bg-[#007AFF] text-white p-8 rounded-xl z-10 md:w-1/2 min-h-[500px] md:mr-[-100px]">
          <h2 className="text-3xl font-bold mb-4">
            The Green Innovators of the Future
          </h2>
          <p className="mb-4">(Wireframe) Breve descripción de la empresa.</p>
          <ul className="space-y-2">
            <li>70+ Years of experience</li>
            <li>160+ Employees</li>
            <li>2 Production Factories</li>
            <li>1 Main Branch</li>
          </ul>
        </div>

        {/* Card Derecho (Imagen) */}
        <div className="relative md:w-1/2 min-h-[600px]">
          <img
            src="/green_innovators.jpg"
            alt="Descripción de la imagen"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default WireframeComponent;
