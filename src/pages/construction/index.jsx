import React from "react";
import FooterConstruction from '../../components/layout/FooterConstruction';
import HeroConstruction from '../../components/construction/HeroConstruction';
import CraftingYourVision from '../../components/construction/CraftingYourVision';
import NavbarConstruction from '../../components/layout/NavbarConstruction';
import ConstructionContact from '../../components/construction/ConstructionContact';
import ConstructionStats from '../../components/construction/ConstructionStats';
import ProductsCTA from '../../components/construction/ProductsCTA';
import ServicesCTA from '../../components/construction/ServicesCTA';
import WhiteDivider from '../../components/ui/WhiteDivider';

const ConstructionPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavbarConstruction />
      <div className="bg-[#3A3A3A]">
        <HeroConstruction />
        <WhiteDivider/>
        <CraftingYourVision />
        <WhiteDivider/>
        <ConstructionStats />
        <WhiteDivider/>
        <ProductsCTA />
        <WhiteDivider/>
        <ServicesCTA />
        <WhiteDivider/>
        <ConstructionContact />
      </div>
      <FooterConstruction />
    </div>
  );
};

export default ConstructionPage; 