import React from 'react';
import LeatherCycle from './LeatherCycle';

const FullCycle = () => {
  return (
    <div className="w-full">
      {/* Texto "circular economy" arriba del componente */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-regular text-green-700">
          Circular Economy
        </h2>
      </div>
      
      {/* Componente LeatherCycle */}
      <LeatherCycle />
    </div>
  );
};

export default FullCycle;
