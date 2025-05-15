import React from "react";
import AboutHero from "../../components/stoever/aboutHero";
import Navbar from "../../components/layout/Navbar";
import DoubleCards from "../../components/stoever/DoubleCards";
import MissionVision from "../../components/stoever/MissionVision";
import Footer from "../../components/layout/Footer";
import WhyChooseUs from "../../components/stoever/WhyChooseUs";
import SubsidiariesSection from "../../components/stoever/SubsidiariesSection";
import Divider from "../../components/ui/Divider";
import Certifications from "../../components/stoever/Certifications";
import Stats from "../../components/stoever/Stats";

const AboutUs = () => {
  return (
    <div className={`min-h-screen bg-white`}>
      <Navbar />
      <AboutHero />
      <div className="flex flex-col items-center justify-center pt-16">
      <DoubleCards />
      </div>
      <div className="flex flex-col items-center justify-center pt-16">
      <Stats />
      </div>
      <div className="flex flex-col items-center justify-center pt-16">
      <MissionVision />
      </div>
      <div className="flex flex-col items-center justify-center pt-16">
      <WhyChooseUs />
      </div>
      <div className="flex flex-col items-center justify-center pt-16">
      <Certifications />
      </div>
      <Divider />
      <div className="flex flex-col items-center justify-center pt-16">
      <SubsidiariesSection />
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
