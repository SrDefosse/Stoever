import React from "react";
import AboutHero from "../../components/aboutHero";
import Navbar from "../../components/Navbar";
import DoubleCards from "../../components/DoubleCards";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <AboutHero />
      <div className="flex flex-col items-center justify-center pt-16">
         <DoubleCards />
      </div>
    </div>
  );
};

export default AboutUs;
