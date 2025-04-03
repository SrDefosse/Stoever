import React, { useRef, useMemo } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import BlueButton from "./BlueButton";
import WhiteButton from "./WhiteButton";

const imageData = [
  { id: 1, src: "/collage1.jpg", alt: "Textura abstracta 1", className: "col-span-2 md:col-span-2" },
  { id: 2, src: "/collage2.jpg", alt: "Textura abstracta 2", className: "col-span-2 md:col-span-1 md:row-span-2" },
  { id: 3, src: "/collage3.jpg", alt: "Textura abstracta 3", className: "col-span-2 md:col-span-1 md:row-span-2" },
  { id: 4, src: "/collage4.jpg", alt: "Textura abstracta 4", className: "hidden md:block" },
  { id: 5, src: "/collage5.jpg", alt: "Textura abstracta 5", className: "hidden md:block" },
  { id: 6, src: "/collage6.jpg", alt: "Textura abstracta 6", className: "col-span-2 md:col-span-1" },
];

function ImageGridHero() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  return (
    <section ref={targetRef} className="relative bg-white h-[200vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden p-2 sm:p-4 grid grid-cols-2 md:grid-cols-3 md:grid-rows-3 gap-2 sm:gap-4">
        <Copy scrollYProgress={scrollYProgress} />
        <Images scrollYProgress={scrollYProgress} />
        <Circles />
      </div>
    </section>
  );
}

const Copy = React.memo(({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 0.75], [1, 0.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.75], ["0%", "7.5%"]);

  const copyStyle = useMemo(() => ({ scale, opacity, y, willChange: "transform, opacity" }), [
    scale,
    opacity,
    y,
  ]);

  return (
    <motion.div
      style={copyStyle}
      className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-4 md:p-8"
    >
      <h1 className="text-[#011961] text-4xl sm:text-5xl md:text-7xl font-bold max-w-xs sm:max-w-md md:max-w-xl">
        Active in 15 countries worldwide
      </h1>
      <p className="text-stone-600 text-sm sm:text-base max-w-xs sm:max-w-md md:max-w-xl my-4 md:my-6">
        Since our establishment in 1946, in León, Gto. México, we have maintained our commitment to develop chemical solutions that are innovative, creative and good for the environment. Today we are a proudly Mexican business with multiple important industry certifications and alliances.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-2">
        <BlueButton text="Learn about us" />
        <WhiteButton text="Contact us" />
      </div>
    </motion.div>
  );
});
Copy.displayName = "Copy";

function Images({ scrollYProgress }) {
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const leftToRight = useTransform(scrollYProgress, [0, 1], ["-35%", "0%"]);
  const rightToLeft = useTransform(scrollYProgress, [0, 1], ["30%", "0%"]);
  const topToBottom = useTransform(scrollYProgress, [0, 1], ["-35%", "0%"]);
  const bottomToTop = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);
  const specialY = useTransform(scrollYProgress, [0, 1], ["-145%", "0%"]);

  const transforms = useMemo(
    () => ({
      1: { x: leftToRight, y: topToBottom },
      2: { x: rightToLeft, y: topToBottom },
      3: { x: leftToRight, y: bottomToTop },
      4: { x: rightToLeft, y: specialY },
      5: { x: leftToRight, y: bottomToTop },
      6: { x: rightToLeft, y: bottomToTop },
    }),
    [leftToRight, rightToLeft, topToBottom, bottomToTop, specialY]
  );

  return imageData.map(({ id, src, alt, className }) => (
    <motion.div
      key={id}
      className={`${className} relative z-10 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden`}
      style={{
        scale,
        x: transforms[id]?.x,
        y: transforms[id]?.y,
        willChange: "transform",
      }}
    >
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
    </motion.div>
  ));
}

function Circles() {
  return (
    <>
      <div className="w-3/5 max-w-[850px] min-w-[300px] md:min-w-[400px] aspect-square border-4 md:border-[8px] border-slate-200/50 rounded-full absolute z-0 left-0 top-0 -translate-x-1/2 -translate-y-1/2" />
      <div className="w-1/2 max-w-[600px] min-w-[200px] md:min-w-[300px] aspect-square border-4 md:border-[8px] border-slate-200/50 rounded-full absolute z-0 right-0 bottom-0 translate-x-1/2 translate-y-1/2" />
    </>
  );
}

export default ImageGridHero;
