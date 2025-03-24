import { font } from "@/fonts";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Cards from "@/components/Cards";
import TwoColumnLayout from "@/components/TwoColumnLayout";
import ContentandCollage from "@/components/ContentandCollage";
import DoubleCards from "@/components/DoubleCards";
import WhatWeDo from "@/components/WhatWeDo";
import OurPhilosofy from "@/components/OurPhilosofy";


export default function Home() {
  return (
    <main className={`${font.className} overflow-hidden`}>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <Hero />
      </div>
      <div className="flex flex-col items-center justify-center">
        <Cards />
      </div>
      <div className="flex flex-col items-center justify-center">
        <ContentandCollage />
      </div>
      <div className="flex flex-col items-center justify-center">
        <WhatWeDo />
      </div>
      <div className="flex flex-col items-center justify-center">
        <OurPhilosofy />
      </div>
      <div className="flex flex-col items-center justify-center">
        <DoubleCards />
      </div>
      <div className="flex flex-col items-center justify-center">
        <TwoColumnLayout />
      </div>
    </main>
  );
}
