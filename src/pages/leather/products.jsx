import React from 'react';
import NavbarLeather from '@/components/layout/NavbarLeather';
import LeatherProductsHero from '@/components/leather/LeatherProductsHero';
import LeatherProductsCategories from '@/components/leather/LeatherProductsCategories';

const ProductsPage = () => {
  return (
    <main className="min-h-screen">
      <NavbarLeather />
      <LeatherProductsHero />
      <LeatherProductsCategories />
    </main>
  );
};

export default ProductsPage;
