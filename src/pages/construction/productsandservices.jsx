import React from "react";
import NavbarConstruction from '../../components/layout/NavbarConstruction';
import FooterConstruction from '../../components/layout/FooterConstruction';
import OurServices from '../../components/construction/OurServices';
import ProductsAndServicesHero from '../../components/construction/PSHero';
import OurProducts from '../../components/construction/OurProducts';
import WhiteDivider from '../../components/ui/WhiteDivider';
import HearFromYou from '../../components/construction/HearFromYou';

const ProductsAndServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
        <NavbarConstruction />
        <ProductsAndServicesHero />
        <div className="bg-[#3A3A3A]">
            <OurServices />
        </div>
        <div className="bg-[#3A3A3A]">
          <WhiteDivider />
        </div>
        <div className="bg-[#3A3A3A]">
            <OurProducts />
        </div>
        <div className="bg-[#3A3A3A]">
          <WhiteDivider />
        </div>
        <div className="bg-[#3A3A3A]">
          <HearFromYou />
        </div>
      <FooterConstruction />
    </div>
  );
};

export default ProductsAndServicesPage; 