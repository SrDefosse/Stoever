import React from 'react';
import NavbarLeather from '../../components/layout/NavbarLeather';
import LeatherProductsHero from '../../components/leather/LeatherProductsHero';
import BioProducts from '../../components/leather/BioProducts';
import LeatherProductsCategories from '../../components/leather/LeatherProductsCategories';
import BeamHouse from '../../components/leather/BeamHouse';
import TechProposal from '../../components/leather/TechProposal';
import LeatherContact from '../../components/leather/LeatherContact';
import FooterLeather from '../../components/layout/FooterLeather';
import Certifications from '../../components/stoever/Certifications';

const ProductsPage = () => {
  return (
    <main className="min-h-screen">
      <div>
        <NavbarLeather />
      </div>
      <div>
        <LeatherProductsHero />
      </div>
      <div>
        <BioProducts />
      </div>
      <div>
        <LeatherProductsCategories />
      </div>
      <div>
        <BeamHouse />
      </div>
      <div>
        <TechProposal />
      </div>
      <div>
        <Certifications/>
      </div>
      <div>
        <LeatherContact/>
      </div>
      <div>
        <FooterLeather />
      </div>
    </main>
  );
};

export default ProductsPage;
