// src/components/WorldMap.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import DottedMap from "dotted-map";

// Generate the SVG base ONCE at the module level
const map = new DottedMap({ height: 100, grid: "diagonal" });
const svgMap = map.getSVG({
  radius: 0.22,
  color: "#0ea5e9",
  shape: "circle",
  backgroundColor: "white",
});

function WorldMap({
  dots = [],
}) {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const projectPoint = (lat, lng) => {
    const mapWidth = 800;
    const mapHeight = 400;
    const x = (lng + 180) * (mapWidth / 360);
    const y = ((-1 * lat) + 90) * (mapHeight / 180);
    return { x, y };
  };

  return (
    <div ref={containerRef} className="w-full h-full min-h-[25vh] sm:min-h-[40vh] md:min-h-[70vh] flex items-center justify-center py-2 pb-0">
      <div className="w-full max-w-[98vw] sm:w-[90vw] sm:max-w-[1400px] aspect-[2/1] sm:aspect-[2/1] relative flex items-center justify-center overflow-hidden">
        {/* Render SVG base as background only once */}
        <div
          className="h-full w-full absolute inset-0 pointer-events-none select-none"
          style={{ zIndex: 1 }}
          dangerouslySetInnerHTML={{ __html: svgMap }}
          aria-hidden="true"
        />
        {/* Overlay for lines and points */}
        <svg
          ref={svgRef}
          viewBox="0 0 800 400"
          className="w-full h-full absolute inset-0 pointer-events-none select-none"
          style={{ zIndex: 2, maxHeight: '60vw', minHeight: '180px' }}
        >
          {/* Removed gradient for the lines */}
          <defs>
            {/* <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
              <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient> */}
          </defs>

          {/* Removed group for curved lines */}
          {/* <g>
            {dots.map((dot, i) => {
              const startPoint = projectPoint(dot.start.lat, dot.start.lng);
              const endPoint = projectPoint(dot.end.lat, dot.end.lng);
              return (
                <motion.path
                  key={`path-${i}`}
                  d={createCurvedPath(startPoint, endPoint)}
                  fill="none"
                  stroke="url(#path-gradient)"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                  transition={{ duration: 1, delay: 0.3 * i, ease: "easeOut" }}
                />
              );
            })}
          </g> */}

          {/* Grupo para los puntos y animaciones */}
          <g>
            {dots.map((dot, i) => {
              const startCoords = projectPoint(dot.start.lat, dot.start.lng);
              const endCoords = projectPoint(dot.end.lat, dot.end.lng);
              return (
                <React.Fragment key={`points-group-${i}`}>
                  {/* Punto de inicio */}
                  <g key={`start-${i}`}>
                    <circle
                      cx={startCoords.x}
                      cy={startCoords.y}
                      r="3"
                      fill="#0ea5e9" // Using a default color or you might want to make this a prop
                    />
                    {isInView && (
                      <circle
                        cx={startCoords.x}
                        cy={startCoords.y}
                        r="3"
                        fill="#0ea5e9" // Using a default color
                        opacity="0.6"
                      >
                        <animate attributeName="r" from="3" to="10" dur="1.5s" begin={`${0.3 * i}s`} repeatCount="indefinite" />
                        <animate attributeName="opacity" from="0.6" to="0" dur="1.5s" begin={`${0.3 * i}s`} repeatCount="indefinite" />
                      </circle>
                    )}
                  </g>
                  {/* Punto final */}
                  <g key={`end-${i}`}>
                    <circle
                      cx={endCoords.x}
                      cy={endCoords.y}
                      r="3"
                      fill="#0ea5e9" // Using a default color
                    />
                    {isInView && (
                      <circle
                        cx={endCoords.x}
                        cy={endCoords.y}
                        r="3"
                        fill="#0ea5e9" // Using a default color
                        opacity="0.6"
                      >
                        <animate attributeName="r" from="3" to="10" dur="1.5s" begin={`${0.3 * i + 0.5}s`} repeatCount="indefinite" />
                        <animate attributeName="opacity" from="0.6" to="0" dur="1.5s" begin={`${0.3 * i + 0.5}s`} repeatCount="indefinite" />
                      </circle>
                    )}
                  </g>
                </React.Fragment>
              );
            })}
          </g>
        </svg>
      </div>
    </div>
  );
}

export default WorldMap;