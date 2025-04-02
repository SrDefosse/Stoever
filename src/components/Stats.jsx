import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

// Componente Principal que organiza las estadísticas en un Grid
const CountUpStatsGrid = () => { // Renombrado para claridad
  return (
    // Contenedor principal con padding y ancho máximo ajustado
    <div className="mx-auto max-w-4xl px-4 py-20 md:py-24"> 

      {/* Contenedor Grid: 1 columna en móvil, 2 columnas desde 'sm' */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-12"> 
        {/* Renderiza 4 componentes Stat para el grid 2x2 */}
        <Stat
          num={70}
          suffix="+"
          subheading="Years of experience in the industry" // Ejemplo más específico
        />
        <Stat
          num={160}
          suffix="+"
          subheading="Qualified Employees" // Ejemplo más específico
        />
        <Stat
          num={1}
          // suffix="B+" // Quizás un número diferente aquí?
          suffix="+" // Ejemplo: Millones en lugar de Billones
          subheading="Main CompanyBranch" // Ejemplo más específico
        />
        {/* Cuarto Stat agregado para completar el grid 2x2 */}
        <Stat 
          num={2} 
          suffix="+" 
          subheading="Production Factories" // Ejemplo más específico
          decimals={0} // Asegurar que no tenga decimales si es necesario
        />
      </div>
    </div>
  );
};

// Componente Stat individual con UI rediseñada (Estilo Tarjeta)
const Stat = ({ num, suffix, decimals = 0, subheading }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // `once: true` para animar solo una vez, `margin` para activar un poco antes

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 2.5,
      delay: 0.1, // Pequeño delay
      ease: "easeOut", // Suavizado al final
      onUpdate(value) {
        if (!ref.current) return;
        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    // Contenedor de la tarjeta individual
    <div className="border-b border-gray-300 flex h-full flex-col items-center justify-center bg-white p-6 text-center"> 
      {/* Número animado y sufijo */}
      <p className="mb-3 text-5xl font-bold text-[#011961] md:text-6xl"> 
        {/* El span se llenará con el número animado */}
        <span ref={ref}>{isInView ? num.toFixed(decimals) : '0'}</span> 
        {suffix}
      </p>
      {/* Subtítulo descriptivo */}
      <p className="max-w-xs text-sm text-neutral-600">{subheading}</p> 
    </div>
  );
};


export default CountUpStatsGrid;