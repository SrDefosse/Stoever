import React from 'react';
import WorldMap from "./WorldMap";

function DemoWorldMap() {
  // Coordenadas de los países
  const countries = [
    { name: 'Argentina', lat: -34.6037, lng: -58.3816 },
    { name: 'Japan', lat: 35.6895, lng: 139.6917 },
    { name: 'Brazil', lat: -23.5505, lng: -46.6333 },
    { name: 'Pakistan', lat: 24.8607, lng: 67.0011 },
    { name: 'Central America', lat: 15.7835, lng: -90.2308 },
    { name: 'China', lat: 39.9042, lng: 116.4074 },
    { name: 'Germany', lat: 52.52, lng: 13.4050 },
    { name: 'India', lat: 28.6139, lng: 77.2090 },
    { name: 'Italy', lat: 41.9028, lng: 12.4964 },
    { name: 'Spain', lat: 40.4168, lng: -3.7038 },
    { name: 'Taiwan', lat: 25.0329, lng: 121.5654 },
    { name: 'Thailand', lat: 13.7563, lng: 100.5018 },
    { name: 'Turkey', lat: 41.0082, lng: 28.9784 },
    { name: 'USA', lat: 40.7128, lng: -74.0060 },
    { name: 'Mexico', lat: 19.4326, lng: -99.1332 },
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

        <div className="w-full max-w-full sm:max-w-5xl overflow-hidden">
          <WorldMap
             dots={exampleDots}
           />
        </div>
      </main>
    </div>
  );
}

export default DemoWorldMap;