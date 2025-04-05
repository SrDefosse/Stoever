import React from "react";
import { font } from "@/fonts";
import FooterConstruction from '@/components/layout/FooterConstruction';

const ConstructionPage = () => {
  return (
    <div className={`min-h-screen bg-white ${font.className}`}>
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1>Construction</h1>
          {/* Aquí irá el contenido específico de la página */}
        </div>
      </main>
      <FooterConstruction />
    </div>
  );
};

export default ConstructionPage; 