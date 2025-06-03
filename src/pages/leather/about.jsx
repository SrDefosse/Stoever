import React from "react";
import NavbarLeather from "../../components/layout/NavbarLeather";
import FooterLeather from "../../components/layout/FooterLeather";
import Divider from "../../components/ui/Divider";
import AboutHeroLeather from "../../components/leather/AboutHeroLeather";
import TimelineDemo from "../../components/leather/TimelineDemo";
import LeatherPhilosophy from "../../components/leather/LeatherPhilosophy";
import LeatherCTA from "../../components/leather/LeatherCTA";
import LeatherContact from "../../components/leather/LeatherContact";
import FullCycle from "../../components/leather/FullCycle"

const LeatherAbout = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavbarLeather />
      <AboutHeroLeather />
      <TimelineDemo />
      <LeatherPhilosophy />
      <FullCycle/>
      <LeatherCTA />
      <Divider />
      <LeatherContact/>
      <FooterLeather />
    </div>
  );
};

export default LeatherAbout; 