import React from 'react';
import AboutHeroConstruction from '../../components/construction/AboutHeroConstruction';
import NavbarConstruction from '../../components/layout/NavbarConstruction';
import FooterConstruction from '../../components/layout/FooterConstruction';
import MissionVisionConstruction from '../../components/construction/MissionVissionConstruction';
import AboutDescription from '../../components/construction/AboutDescription';
import WhatWeDoConstruction from '../../components/construction/WhatWeDoConstruction';
import LetsWorkTogether from '../../components/construction/LetsWorkTogether';

const ConstructionAboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
    <NavbarConstruction/>
    <div className="bg-[#3A3A3A]">
      <AboutHeroConstruction />
      <AboutDescription/>
      <MissionVisionConstruction/>
      <WhatWeDoConstruction/>
      <LetsWorkTogether/>
      <FooterConstruction/>
    </div>
    </div>
  );
};

export default ConstructionAboutPage;
