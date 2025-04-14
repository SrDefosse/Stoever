import React from 'react';
import NavbarLeather from '@/components/layout/NavbarLeather';
import LeatherProductsHero from '@/components/leather/LeatherProductsHero';
import LeatherProductsCategories from '@/components/leather/LeatherProductsCategories';
import TechnologyIntro from '@/components/leather/TechnologyIntro';
import TechProposal from '@/components/leather/TechProposal';
import LeatherContact from '@/components/leather/LeatherContact';

const ProductsPage = () => {
  return (
    <main className="min-h-screen">
      <NavbarLeather />
      <LeatherProductsHero />
      <LeatherProductsCategories />
      <TechnologyIntro />
      <TechProposal />
      <LeatherContact/>
    </main>
  );
};

export default ProductsPage;
