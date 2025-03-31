import React from "react";
import AboutHero from "../../components/aboutHero";
import Navbar from "../../components/Navbar";
import DoubleCards from "../../components/DoubleCards";
import MissionVision from "../../components/MissionVision";
import Footer from "../../components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <AboutHero />
      <div className="flex flex-col items-center justify-center pt-16">
         <DoubleCards />
      </div>
      <MissionVision />
      <div className="flex flex-col items-center justify-center pt-16">
        
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
