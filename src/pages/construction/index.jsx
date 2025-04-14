import React from "react";
import { font } from "@/fonts";
import FooterConstruction from '@/components/layout/FooterConstruction';
import HeroConstruction from '@/components/construction/HeroConstruction';
import NavbarConstruction from '@/components/layout/NavbarConstruction';
import ConstructionContact from '@/components/construction/ConstructionContact';

const ConstructionPage = () => {
  return (
    <div className={`min-h-screen bg-white ${font.className}`}>
        <NavbarConstruction />
        <div>
          <HeroConstruction />
          <ConstructionContact />
        </div>
      <FooterConstruction />
    </div>
  );
};

export default ConstructionPage; 