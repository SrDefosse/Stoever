import { motion } from "framer-motion";

// Lista de logos
const logos = [
  { id: 1, src: "/certifications/certificacion1.webp", alt: "Logo Carrusel 1", sizeClass: "h-16 w-auto sm:h-20 md:h-24 lg:h-32" },
  { id: 2, src: "/certifications/certificacion2.webp", alt: "Logo Carrusel 2", sizeClass: "h-16 w-auto sm:h-20 md:h-24 lg:h-32" },
  { id: 3, src: "/certifications/certificacion3.webp", alt: "Logo Carrusel 3", sizeClass: "h-16 w-auto sm:h-20 md:h-24 lg:h-32" },
  { id: 4, src: "/certifications/certificacion4.webp", alt: "Logo Carrusel 4", sizeClass: "h-16 w-auto sm:h-20 md:h-24 lg:h-20" },
  { id: 5, src: "/certifications/certificacion5.webp", alt: "Logo Carrusel 5", sizeClass: "h-16 w-auto sm:h-20 md:h-24 lg:h-20" },
];

const Certifications = () => {
  return (
    <section className="relative w-full overflow-hidden py-12 sm:py-16">
      <div className="flex flex-col items-center justify-center">
        <span className="mb-8 bg-gradient-to-br from-zinc-200 to-zinc-500 bg-clip-text text-center text-2xl">
          Certifications
        </span>
        <div className="flex w-full justify-center">
          <LogoItems />
        </div>
      </div>
    </section>
  );
};

const LogoItems = () => (
  <div className="flex flex-wrap justify-center gap-12 px-6">
    {logos.map((logo) => (
      <LogoItem key={logo.id} src={logo.src} alt={logo.alt} sizeClass={logo.sizeClass} />
    ))}
  </div>
);

const LogoItem = ({ src, alt, sizeClass }) => (
  <div className="flex items-center">
    <img
      src={src}
      alt={alt}
      className={sizeClass}
    />
  </div>
);

export default Certifications;

