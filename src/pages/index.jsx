import { font } from "@/fonts";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Cards from "@/components/Cards";
import ContentandCollage from "@/components/ContentandCollage";
import WhatWeDo from "@/components/WhatWeDo";
import OurPresence from "@/components/OurPresence";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";
import HomeContactUs from "@/components/HomeContactUs";

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
      <Divider />
      <div className="flex flex-col items-center justify-center">
        <ContentandCollage />
      </div>
      <div className="flex flex-col items-center justify-center">
        <WhatWeDo />
      </div>
      <div className="flex flex-col items-center justify-center">
        <OurPresence />
      </div>
      <Divider />
      <div className="flex flex-col items-center justify-center">
        <HomeContactUs/>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Footer />
      </div>
    </main>
  );
}
