import { motion } from "framer-motion";

// Lista de logos
const logos = [
  { id: 1, src: "/leather-marquee1.png", alt: "Logo Carrusel 1" },
  { id: 2, src: "/leather-marquee2.png", alt: "Logo Carrusel 2" },
  { id: 3, src: "/leather-marquee3.png", alt: "Logo Carrusel 3" },
  { id: 4, src: "/leather-marquee4.png", alt: "Logo Carrusel 4" },
  { id: 5, src: "/leather-marquee5.png", alt: "Logo Carrusel 5" },
  { id: 6, src: "/leather-marquee6.png", alt: "Logo Carrusel 6" },
  { id: 7, src: "/leather-marquee7.png", alt: "Logo Carrusel 7" }
];

const LeatherMarquee = () => {
  return (
    <section className="relative w-full overflow-hidden py-12 sm:py-16">
      <div className="flex flex-col items-center justify-center">
        <span className="mb-8 bg-gradient-to-br from-zinc-200 to-zinc-500 bg-clip-text text-center text-2xl">
          Leather Marquee
        </span>
        <div className="flex w-full overflow-hidden">
          <TranslateWrapper>
            <LogoItems />
          </TranslateWrapper>
          <TranslateWrapper>
            <LogoItems />
          </TranslateWrapper>
          <TranslateWrapper>
            <LogoItems />
          </TranslateWrapper>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-neutral-50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-neutral-50 to-transparent" />
    </section>
  );
};

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex gap-12 px-6 min-w-max"
    >
      {children}
    </motion.div>
  );
};

const LogoItems = () => (
  <div className="flex gap-12">
    {logos.map((logo) => (
      <LogoItem key={logo.id} src={logo.src} alt={logo.alt} />
    ))}
  </div>
);

const LogoItem = ({ src, alt }) => (
  <div className="flex items-center">
    <img
      src={src}
      alt={alt}
      className="h-16 w-auto sm:h-20 md:h-24 lg:h-32"
    />
  </div>
);

export default LeatherMarquee;

