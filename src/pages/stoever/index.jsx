// import { font } from "@/fonts";
import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/stoever/Hero";
import Cards from "../../components/stoever/Cards";
import WhatWeDo from "../../components/stoever/WhatWeDo";
import Footer from "../../components/layout/Footer";
import Divider from "../../components/ui/Divider";
import ContactUs from "../../components/stoever/ContactUs";
import DemoWorldMap from "../../components/stoever/DemoWorldMap";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <Hero />
      </div>
      <div className="flex flex-col items-center justify-center">
        <Cards />
      </div>
      <Divider />
      <div className="flex flex-col items-center justify-center">
        <WhatWeDo />
      </div>
      <div className="flex flex-col items-center justify-center">
        <DemoWorldMap/>
      </div>
      <Divider />
      <div className="flex flex-col items-center justify-center">
        <ContactUs/>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Footer />
      </div>
    </main>
  );
}
