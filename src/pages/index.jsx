import { font } from "@/fonts";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Cards from "@/components/Cards";
import ContentandCollage from "@/components/ContentandCollage";
import WhatWeDo from "@/components/WhatWeDo";
import OurPhilosophy from "@/components/OurPhilosophy";
import Footer from "@/components/Footer";

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
        <OurPhilosophy />
      </div>
      <div className="flex flex-col items-center justify-center">
        <Footer />
      </div>
    </main>
  );
}
