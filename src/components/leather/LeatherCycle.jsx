import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';

// --- Nuevo Componente CycleNode ---
// Usamos React.memo para optimizar si las props no cambian
const CycleNode = React.memo(({ imgSrc, altText, nodeText, imageSize, textSizeClass }) => (
  // Contenedor del nodo individual: centra imagen y texto verticalmente
  <div className="flex flex-col items-center text-center pointer-events-none w-full"> {/* w-full ayuda si el texto ocupa más de una línea */}
    <img
      src={imgSrc}
      alt={altText}
      style={{
        width: `${imageSize}px`,
        height: `${imageSize}px`,
        marginBottom: '4px' // Espacio fijo entre imagen y texto
      }}
      // Evita que las imágenes sean arrastrables
      draggable="false"
      onDragStart={(e) => e.preventDefault()}
    />
    {/* Texto debajo de la imagen */}
    <span className={`text-green-700 font-medium ${textSizeClass} leading-tight`}> {/* leading-tight para texto compacto */}
      {nodeText}
    </span>
  </div>
));
// Asignar un nombre para el DevTools de React
CycleNode.displayName = 'CycleNode';


// --- Componente Principal LeatherCycle ---
const LeatherCycle = () => {
  // Estado para dimensiones, inicializado en 0 para detectar la primera medición
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);

  // Efecto para medir el contenedor con ResizeObserver
  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      if (entries[0]) {
        const { width } = entries[0].contentRect;
        // Asegura tamaño mínimo y actualiza estado solo si cambia
        const size = Math.max(width, 280); // Min 280px
        setDimensions(prev => (prev.width === size ? prev : { width: size, height: size }));
      }
    });

    const currentRef = containerRef.current;
    if (currentRef) {
      // Medición inicial al montar
      const initialWidth = currentRef.offsetWidth;
      if (initialWidth > 0) {
         const initialSize = Math.max(initialWidth, 280);
         setDimensions({ width: initialSize, height: initialSize });
      }
      // Observar cambios
      resizeObserver.observe(currentRef);
    }

    // Limpieza al desmontar
    return () => {
      if (currentRef) {
        resizeObserver.unobserve(currentRef);
      }
      resizeObserver.disconnect();
    };
  }, []); // Ejecutar solo una vez

  // --- Configuración SVG (Fija, no depende del tamaño) ---
  const svgConfig = useMemo(() => {
    const viewBoxSize = 400;
    const center = viewBoxSize / 2;
    // Radio del círculo donde viajan las flechas (en coords SVG)
    const pathRadius = center * 0.80; // 160 unidades
    // Ángulo (grados) para acortar inicio/fin de flecha y crear espacio
    const pathAngleOffset = 15; // Ajusta para más/menos espacio

    // Función para obtener punto (x,y) en el círculo SVG
    const getSvgPoint = (angleDegrees) => {
      const angleRadians = (angleDegrees * Math.PI) / 180;
      const x = center + pathRadius * Math.cos(angleRadians);
      const y = center + pathRadius * Math.sin(angleRadians);
      return { x, y };
    };

    return { viewBoxSize, center, pathRadius, pathAngleOffset, getSvgPoint };
  }, []);

  // --- Configuración de Layout (Depende del tamaño y del SVG) ---
  const layoutConfig = useMemo(() => {
    // Espera a que se mida el contenedor
    if (dimensions.width === 0) {
      return { nodePositionRadius: 0, dynamicImageSize: 0, textSizeClass: 'text-xs' };
    }
    const size = dimensions.width;

    // *** Clave: Alinear radio de posicionamiento HTML con el radio SVG ***
    // Se calcula qué radio en píxeles corresponde al pathRadius del SVG
    const nodePositionRadius = (svgConfig.pathRadius / svgConfig.viewBoxSize) * size;
    // Ejemplo: (160 / 400) * size = 0.4 * size

    // Tamaño dinámico de imagen y texto
    const dynamicImageSize = Math.max(40, Math.min(size * 0.15, 80));
    let textSizeClass = 'text-xs';
    if (size > 450) textSizeClass = 'text-base';
    if (size > 600) textSizeClass = 'text-lg';

    return { nodePositionRadius, dynamicImageSize, textSizeClass };
  }, [dimensions, svgConfig]); // Recalcular si cambian dimensiones o config SVG

  // --- Variantes de Animación (Framer Motion) ---
  const arrowVariants = {
    animate: {
      pathLength: [0, 1],
      transition: { duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "loop", repeatDelay: 1 }
    }
  };

  // --- Datos de los Nodos ---
  const nodesData = [
    { id: 'source', img: '/cow.png', text: 'From Source', angle: -90 },
    { id: 'plant', img: '/leather.png', text: 'To Our Plant', angle: -18 },
    { id: 'leather', img: '/leather.png', text: 'To Leather', angle: 54 },
    { id: 'product', img: '/boot.png', text: 'To Product', angle: 126 },
    { id: 'nature', img: '/nature.png', text: 'To Nature', angle: 198 }
  ];
  const numNodes = nodesData.length;

  // --- Función para Estilo del Contenedor de Posicionamiento ---
  const getNodeWrapperStyle = (angleDegrees) => {
    if (layoutConfig.nodePositionRadius === 0) return { opacity: 0 }; // Ocultar hasta medir

    const angleRadians = (angleDegrees * Math.PI) / 180;
    const x = layoutConfig.nodePositionRadius * Math.cos(angleRadians);
    const y = layoutConfig.nodePositionRadius * Math.sin(angleRadians);

    return {
      position: 'absolute',
      top: '50%',
      left: '50%',
      // Ancho aproximado para centrar mejor el nodo (imagen+texto)
      width: `${layoutConfig.dynamicImageSize * 1.8}px`,
      // Centra el wrapper y luego lo mueve a su posición en el círculo
      transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
      opacity: 1, // Mostrar cuando esté posicionado
      transition: 'opacity 0.3s ease-in-out' // Transición suave
    };
  };

  // --- Renderizado del Componente ---
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-4 overflow-hidden relative">
      {/* Contenedor Principal Medible */}
      <div
        ref={containerRef}
        className="relative w-full max-w-[95vw] aspect-square mx-auto sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl"
      >
        {/* Renderizar sólo cuando las dimensiones estén listas */}
        {dimensions.width > 0 ? (
          <>
            {/* Nodos (Wrapper + Componente Hijo) */}
            {nodesData.map((node) => (
              // Div wrapper se encarga sólo de la posición absoluta
              <div key={node.id} style={getNodeWrapperStyle(node.angle)}>
                {/* Componente CycleNode renderiza el contenido */}
                <CycleNode
                  imgSrc={node.img}
                  altText={node.text}
                  nodeText={node.text}
                  imageSize={layoutConfig.dynamicImageSize}
                  textSizeClass={layoutConfig.textSizeClass}
                />
              </div>
            ))}

            {/* SVG con Flechas */}
            <svg
              className="absolute top-0 left-0 w-full h-full overflow-visible pointer-events-none"
              viewBox={`0 0 ${svgConfig.viewBoxSize} ${svgConfig.viewBoxSize}`}
            >
              {/* Definición de la punta de flecha */}
              <defs>
                <marker id="arrowhead" markerWidth="7" markerHeight="5" refX="5" refY="2.5" orient="auto-start-reverse" markerUnits="userSpaceOnUse">
                  <polygon points="0 0, 5 2.5, 0 5" fill="#22c55e" />
                </marker>
              </defs>
              {/* Paths de las Flechas */}
              {nodesData.map((node, index) => {
                const nextNodeIndex = (index + 1) % numNodes;
                // Calcular ángulos de inicio/fin acortados por el offset
                const arcStartAngle = node.angle + svgConfig.pathAngleOffset;
                const arcEndAngle = nodesData[nextNodeIndex].angle - svgConfig.pathAngleOffset;
                // Obtener puntos (x,y) en el círculo SVG
                const startPoint = svgConfig.getSvgPoint(arcStartAngle);
                const endPoint = svgConfig.getSvgPoint(arcEndAngle);
                // Crear el path del arco
                const d = `M ${startPoint.x},${startPoint.y} A ${svgConfig.pathRadius},${svgConfig.pathRadius} 0 0 1 ${endPoint.x},${endPoint.y}`;

                return (
                  <motion.path
                    key={`arrow-${index}`}
                    d={d} stroke="#22c55e" strokeWidth="2.5" fill="transparent"
                    initial={{ pathLength: 0 }} animate="animate" variants={arrowVariants}
                    markerEnd="url(#arrowhead)"
                  />
                );
              })}
            </svg>
          </>
        ) : (
          // Placeholder mientras se mide el tamaño inicial
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            Cargando...
          </div>
        )}
      </div>
      {/* Texto Adicional */}
      {dimensions.width > 0 && (
        <div className="mt-8 text-center">
          <p className="text-xl font-semibold text-green-700">
            40+ years in circular economy.
          </p>
        </div>
      )}
    </div>
  );
};

export default LeatherCycle;