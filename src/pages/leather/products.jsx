import React from 'react';
import NavbarLeather from '../../components/layout/NavbarLeather';
import LeatherProductsHero from '../../components/leather/LeatherProductsHero';
import BioProducts from '../../components/leather/BioProducts';
import LeatherProductsCategories from '../../components/leather/LeatherProductsCategories';
import BeamHouse from '../../components/leather/BeamHouse';
import TechnologyIntro from '../../components/leather/TechnologyIntro';
import TechProposal from '../../components/leather/TechProposal';
import LeatherContact from '../../components/leather/LeatherContact';
import FooterLeather from '../../components/layout/FooterLeather';
const ProductsPage = () => {
  return (
    <main className="min-h-screen">
      <NavbarLeather />
      <LeatherProductsHero />
      <BioProducts />
      <LeatherProductsCategories />
      <BeamHouse />
      <TechnologyIntro />
      <TechProposal />
      <LeatherContact/>
      <FooterLeather />
    </main>
  );
};

export default ProductsPage;
