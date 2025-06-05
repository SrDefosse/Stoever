import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const Cards = () => {
  return (
    <section id="subsidiaries-section" className="w-full px-4 md:px-8 py-16 md:py-24 md:mt-0">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#011961] mb-12">
        Our Subsidiaries
      </h2>
      <div className="mx-auto max-w-7xl grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <Card
          title="Stoever Construction"
          description="With over 25 years of experience, Stoever Construction is a manufacturer and applicator of an extensive range of paints and supplies for use in construction"
          href="/construction"
          bgUrl="/stoever-imgs/card1.webp"
          icon="/icons/construction_icon.webp"
        />      
        <Card
          title="Stoever Group"
          description="With over 70 years of experience in the chemical and leather tanning industry, Stoever Group holds presence in 15 countries worldwide."
          href="#whatwedo"
          bgUrl="/stoever-imgs/card2.webp"
          icon="/icons/group_icon.webp"
        />
        <Card
          title="Stoever Biosolutions for Leather"
          description="Specialized in the research, development, manufacturing and marketing of sustainable biochemicals for the tanning industry."
          href="/leather"
          bgUrl="/stoever-imgs/card3.webp"
          icon="/icons/biosolutions_icon.webp"
        />
      </div>
    </section>
  );
};

const Card = ({ bgUrl, title, href, icon, description }) => {
  const isScrollLink = href.startsWith('#');
  
  const cardClasses = "group relative flex overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer";
  
  const content = (
    <>
      {/* Fondo con efecto zoom */}
      <div 
        className="absolute inset-0 w-full h-full transition-transform duration-500 transform group-hover:scale-105"
        style={{
          backgroundImage: `url(${bgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      {/* Overlay con transición en color */}
      <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/60" />
      
      {/* Icono con pequeño escalado en hover */}
      {icon && (
        <div className="absolute top-4 left-4 z-10 transition-transform duration-300 transform group-hover:scale-110">
          <img
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
    </>
  );

  if (isScrollLink) {
    return (
      <a
        href={href}
        className={cardClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      to={href}
      className={cardClasses}
    >
      {content}
    </Link>
  );
};

export default Cards;

