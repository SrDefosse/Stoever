import React from "react";
import AboutHero from "../../components/aboutHero";
import Navbar from "../../components/Navbar";
import DoubleCards from "../../components/DoubleCards";
import WhyChooseUs from "../../components/whyChooseUs";
import Certifications from "../../components/Certifications";
import Footer from "../../components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <AboutHero />
      <div className="flex flex-col items-center justify-center pt-16">
         <DoubleCards />
      </div>
      <WhyChooseUs />
      <div className="flex flex-col items-center justify-center pt-16">
        <Certifications />
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
