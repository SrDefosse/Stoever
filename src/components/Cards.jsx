import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

const Cards = () => {
  return (
    <section className="w-full bg-slate-50 px-4 md:px-8 py-16 md:py-24 md:mt-0">
      <div className="mx-auto max-w-7xl grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          title="Stoever Construction"
          description="With over 25 years of experience, Stoever Construction is a manufacturer and applicator of our extensive range of paints and supplies for use in construction"
          href="#"
          bgUrl="/construction.jpg"
          icon="/construction_icon.png"
        />      
        <Card
          title="Stoever Group"
          description="With over 70 years of experience in the chemical and leather tanning industry, Stoever Group holds presence in 15 countries worldwide. "
          href="#"
          bgUrl="/enterprise.jpg"
          icon="/group_icon.png"
        />
        <Card
          title="Stoever Biosolutions for Leather"
          description="Specialized in the research, development, manufacturing and marketing of biochemicals for the tanning industry; Stoever Biosolutions for Leather is compromised with environmentally friendly solutions."
          href="#"
          bgUrl="/leather.jpg"
          icon="/biosolutions_icon.png"
        />
      </div>
    </section>
  );
};

const Card = ({ bgUrl, title, href, icon, description }) => {
  return (
    <a
      href={href}
      className="group relative flex overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${bgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div className="absolute inset-0 bg-black/60" />
      
      {icon && (
        <div className="absolute top-4 left-4 z-10">
          <Image
            src={icon}
            alt={`${title} icon`}
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
      )}
      
      <div className={`relative z-10 flex flex-col p-6 ${icon ? 'pt-16' : ''} aspect-[3/4]`}>
        <h3 className="text-xl font-medium text-white">{title}</h3>
        <div className="mt-auto flex flex-col gap-4">
          <p className="text-gray-200 text-sm">{description}</p>
          <div className="flex items-center text-white">
            <span className="text-sm font-medium">Learn more</span>
            <FiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </a>
  );
};

export default Cards;