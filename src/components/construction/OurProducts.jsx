import React, { useState, useEffect } from "react";
// import Image from "next/image"; // Remove next/image

const productsData = [
  {
    id: 1,
    title: "Vinyl Paints",
    description:
      "Stoever offers various grades of interior and exterior vinyl paints with a durability of 3.5 and 7 years, and offers color matching services in the grade of your choice.",
    src: "/construction-imgs/grid/grid1.webp",
  },
  {
    id: 2,
    title: "Antimicrobial Paints",
    description:
      "High-quality paint with silver nanoparticles that eliminate up to 99.99% of all types of bacteria and fungi harboring on surfaces. Technology approved under ASTM D 3273-12 and JIS Z 2801:2010.",
    src: "/construction-imgs/grid/grid2.webp",
  },
  {
    id: 3,
    title: "Waterproofers",
    description:
      "Water-based acrylic waterproofing, manufactured with high-quality polymers, so it has high resistance to the sun's UV rays, prevents water leaks, and is easy to apply.",
    src: "/construction-imgs/grid/grid3.webp",
  },
  {
    id: 4,
    title: "Industrial Epoxies",
    description:
      "Contains two-component resins with excellent covering power, highly resistant to water and corrosive products, and is used for heavy traffic in industrial plants and commerce.",
    src: "/construction-imgs/grid/grid4.webp",
  },
  {
    id: 5,
    title: "Flooring Systems",
    description:
      "High-performance 2-component coating, developing excellent chemical and mechanical resistance properties at room temperature.",
    src: "/construction-imgs/grid/grid5.webp",
  },

  {
    id: 6,
    title: "Sealants",
    description:
      "Stoever offers three types of sealants, each with excellent stability, moisture resistance, and high performance for sealing surfaces before applying paint or any other type of coating.",
    src: "/construction-imgs/grid/grid6.webp",
  },
  {
    id: 7,
    title: "Stucco",
    description:
      "Stoever offers various types of stuccos and pastes, made from cement powder and mineral granulometry that generates great mechanical strength and controlled purity in interior and exterior finishes.",
    src: "/construction-imgs/grid/grid8.webp",
  },
  {
    id: 8,
    title: "Oil Paints",
    description:
      "Stoever offers a wide range of oil paints, including alkyd enamel, with good adhesion, high impact and corrosion resistance. At Stoever, we offer a quick-drying or normal-drying primer.",
    src: "/construction-imgs/grid/grid9.webp",
  },
  {
    id: 9,
    title: "Textured Pastes",
    description:
      "These are textured coatings made from 100% acrylic resins, with selected mineral fillers, silica sand, and top-quality additives. They boast excellent hardness, mechanical strength, and weather resistance. They are 100% washable.",
    src: "/construction-imgs/grid/grid10.webp",
  },
  {
    id: 10,
    title: "Floor Adhesive",
    description:
      "Stoever offers a wide variety of floor adhesives made from fine-grained aggregate cements and chemical additives, creating a product with many benefits and properties. We tailor the best adhesive for your project.",
    src: "/construction-imgs/grid/grid11.webp",
  },
  {
    id: 11,
    title: "Plaster",
    description:
      "Stoever offers a wide range of easy-to-use and easy-to-handle plasters, as they are manufactured without sand, resulting in a lightweight material with excellent adhesion to any indoor or outdoor surface.",
    src: "/construction-imgs/grid/grid13.webp",
  },
  {
    id: 12,
    title: "Aggregates for Concrete",
    description:
      "Stoever has a quarry where you can find different sizes of gravel to meet any resistance. You'll also find different qualities of sand and gravel for your platforms.",
    src: "/construction-imgs/grid/grid14.webp",
  },
];

function OurProducts() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const checkIsMobile = () => {
      const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
      setIsMobile(isTouchDevice);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const handleCardClick = (cardId) => {
    if (isMobile) {
      setActiveCard(activeCard === cardId ? null : cardId);
    }
  };

  return (
    <section className="bg-[#3A3A3A] p-4 text-neutral-50 md:p-12">
      <div className="max-w-7xl mx-auto mb-8">
        <h2 className="inline-block text-3xl lg:text-4xl font-bold text-white mb-4 border-b-4 border-yellow-600 pb-2">
          Our Products
        </h2>
      </div>
      <div className="max-w-7xl mx-auto rounded-lg overflow-hidden border border-neutral-700">
        <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2 gap-px bg-neutral-700">
          {productsData.map((p, index) => {
            const isLastItem = index === productsData.length - 1;
            const isOddCount = productsData.length % 2 !== 0;
            const cardClassName = isLastItem && isOddCount ? 'md:col-span-2' : '';
            return (
              <Card
                key={p.id}
                title={p.title}
                description={p.description}
                src={p.src}
                className={cardClassName}
                isMobile={isMobile}
                isActive={activeCard === p.id}
                onClick={() => handleCardClick(p.id)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

const Card = React.memo(function Card({ title, description, src, className, isMobile, isActive, onClick }) {
  return (
    <div 
      className={`bg-neutral-800 group relative flex h-56 flex-col overflow-hidden p-6 text-center md:h-80 md:p-9 ${className || ''} ${isMobile ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      <div className="absolute inset-0">
        <img
          src={src}
          alt={title}
          className={`
            absolute inset-0 w-full h-full object-cover 
            transition-transform duration-500 ease-in-out
            ${isMobile && isActive ? 'scale-110 blur-sm' : 'group-hover:scale-110 group-hover:blur-sm'}
          `}
          loading="lazy"
        />
        <div
          className={`
            absolute inset-0 bg-black/50 backdrop-blur-sm
            transition-opacity duration-500
            ${isMobile && isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
          `}
        />
      </div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full">
        <h2 className="mb-2 text-2xl font-semibold md:text-3xl">{title}</h2>
        <p
          className={`
            max-w-xs text-sm text-neutral-200
            transition-opacity duration-300 delay-100
            ${isMobile && isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
          `}
        >
          {description}
        </p>
        {isMobile && !isActive && (
          <p className="absolute bottom-4 text-xs text-amber-600">
            tap to see more
          </p>
        )}
      </div>
      <Corners isActive={isActive} isMobile={isMobile} />
    </div>
  );
});

const Corners = function Corners({ isActive, isMobile }) {
  return (
    <>
      {["top left", "top right", "bottom left", "bottom right"].map((pos) => (
        <React.Fragment key={pos}>
          <span
            className={`
              absolute ${pos.includes("top") ? "top-[1px]" : "bottom-[1px]"}
                       ${pos.includes("left") ? "left-[1px]" : "right-[1px]"}
                       z-10 h-3 w-[1px] origin-${pos.replace(" ", "-")}
                       bg-yellow-500 scale-0
                       transition-transform duration-500
                       ${isMobile && isActive ? 'scale-100' : 'group-hover:scale-100'}
            `}
          />
          <span
            className={`
              absolute ${pos.includes("top") ? "top-[1px]" : "bottom-[1px]"}
                       ${pos.includes("left") ? "left-[1px]" : "right-[1px]"}
                       z-10 h-[1px] w-3 origin-${
                         pos.includes("left") ? "left" : "right"
                       }
                       bg-yellow-500 scale-0
                       transition-transform duration-500
                       ${isMobile && isActive ? 'scale-100' : 'group-hover:scale-100'}
            `}
          />
        </React.Fragment>
      ))}
    </>
  );
};

export default OurProducts;
