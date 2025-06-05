import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

// Componente Principal que organiza las estadísticas en un Grid
const CountUpStatsGrid = () => { // Renombrado para claridad
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 md:py-24">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Image - Left Column */}
        <div className="relative h-full min-h-[400px] overflow-hidden rounded-2xl">
          <img  
            src="/leather-imgs/leather-stats.webp"
            alt="Stoever manufacturing process"
            className="h-full w-full object-cover"
          />
        </div>
        {/* Stats Grid - Left Column */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-12">
          <Stat
            num={70}
            suffix="+"
            subheading="Years of experience in the industry"
          />
          <Stat
            num={160}
            suffix="+"
            subheading="Qualified Employees"
          />
          <Stat
            num={1}
            suffix="+"
            subheading="Main CompanyBranch"
          />
          <Stat 
            num={2} 
            suffix="+" 
            subheading="Production Factories"
            decimals={0}
          />
        </div>     
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
      <p className="mb-3 text-5xl font-bold text-green-700 md:text-6xl"> 
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
