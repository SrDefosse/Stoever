import React from "react";
import AboutHero from "../../components/aboutHero";
import OurPhilosofy from "../../components/OurPhilosofy";
import WhatWeDo from "../../components/WhatWeDo";
import Navbar from "../../components/Navbar";
import DoubleCards from "../../components/DoubleCards";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <AboutHero />
      <div className="pt-16">
         <DoubleCards />
        <OurPhilosofy />
        <WhatWeDo />
      </div>
    </div>
  );
};

export default AboutUs;
