import React from 'react';
import WorldMap from "./WorldMap";

function DemoWorldMap() {
  // Coordenadas de los países
  const countries = [
    { name: 'Mexico', lat: 13.4326, lng: -103.1332 },
    { name: 'China', lat: 39.9042, lng: 116.4074 },
    { name: 'India', lat: 28.6139, lng: 77.2090 },
    { name: 'Japan', lat: 28.6895, lng: 139.6917 },
    { name: 'Italy', lat: 41.9028, lng: 12.4964 },
    { name: 'Spain', lat: 32.4168, lng: -3.7038 },
    { name: 'Poland', lat: 52.2297, lng: 21.0122 },
    { name: 'Portugal', lat: 32.7223, lng: -8.1393 },
    { name: 'El Salvador', lat: 3.6929, lng: -89.2182 },
    { name: 'Colombia', lat: -9.7110, lng: -74.0721 },
    { name: 'United States', lat: 29.7128, lng: -90.0060 },
    { name: 'Thailand', lat: 13.7563, lng: 100.5018 },
    { name: 'Germany', lat: 52.52, lng: 13.4050 },
    { name: 'Ethiopia', lat: 0.1450, lng: 38.4897 },
    { name: 'Pakistan', lat: 24.8607, lng: 67.0011 },
  ];

  // Generar conexiones entre pares aleatorios de países
  function getRandomPairs(arr) {
    const pairs = [];
    const used = new Set();
    for (let i = 0; i < arr.length; i++) {
      let j = i;
      // Buscar un índice diferente que no haya sido usado como destino
      while (j === i || used.has(j)) {
        j = Math.floor(Math.random() * arr.length);
      }
      used.add(j);
      pairs.push({ start: arr[i], end: arr[j] });
    }
    return pairs;
  }

  const exampleDots = getRandomPairs(countries);

  return (
    <div>
      <main className="flex min-h-[60vh] sm:min-h-screen flex-col items-center justify-center p-2 sm:p-4 md:p-24 bg-white transition-colors duration-300">
        <h1 className="text-xl sm:text-3xl font-bold mb-2 sm:mb-6 text-[#011961] text-center">
          Stoever has presence worldwide
        </h1>

        <div className="w-full max-w-full sm:max-w-3xl overflow-hidden">
          <WorldMap
             dots={exampleDots}
           />
        </div>

        {/* Lista de países con presencia */}
        <div className="w-full max-w-4xl mt-4 sm:mt-6">          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-2">
            {countries.map((country, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-[#011961] rounded-full px-3 py-1 sm:px-4 sm:py-2 shadow-lg"
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-[#011961] rounded-full"></div>
                  <p className="text-xs sm:text-sm font-medium text-[#011961] whitespace-nowrap">
                    {country.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-4">
            <p className="text-xs text-gray-600 italic">
              Global reach, local expertise
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DemoWorldMap;