import React from "react";
import AboutHero from "../../components/aboutHero";
import Navbar from "../../components/Navbar";
import DoubleCards from "../../components/DoubleCards";
import MissionVision from "../../components/MissionVision";
import Footer from "../../components/Footer";
import WhyChooseUs from "../../components/WhyChooseUs";
import SubsidiariesSection from "../../components/SubsidiariesSection";
import Divider from "@/components/Divider";
import Certifications from "@/components/Certifications";
import Stats from "@/components/Stats";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
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
