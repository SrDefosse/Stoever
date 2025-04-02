"use client"

import { useScroll, useTransform, motion } from "framer-motion"
import { useRef, useMemo } from "react"
// Removed unused imports: AiFillApple, AiFillFileImage
import BlueButton from "./BlueButton"
import WhiteButton from "./WhiteButton"

// --- Configuration for Images ---
// Define image data outside the component for better organization and potential reuse
// Added 'alt' for accessibility and responsive classes
const imageData = [
    {
        id: 1,
        src: "/collage1.jpg",
        alt: "Abstract texture 1",
        // Mobile: Full width, takes 1st row. Tablet+: Spans 2 columns on 1st row
        className: "col-span-2 md:col-span-2",
    },
    {
        id: 2,
        src: "/collage2.jpg",
        alt: "Abstract texture 2",
        // Mobile: Full width, takes 2nd row. Tablet+: Spans 1 column, 2 rows starting from row 1 col 3
        className: "col-span-2 md:col-span-1 md:row-span-2",
    },
    {
        id: 3,
        src: "/collage3.jpg",
        alt: "Abstract texture 3",
        // Mobile: Full width, takes 3rd row. Tablet+: Spans 1 column, 2 rows starting row 2 col 1
        className: "col-span-2 md:col-span-1 md:row-span-2",
    },
    {
        id: 4,
        src: "/collage4.jpg",
        alt: "Abstract texture 4",
        // Mobile: Hidden. Tablet+: Spans 1 col, 1 row starting row 2 col 2
        className: "hidden md:block", // Hidden on mobile to simplify layout
    },
    {
        id: 5,
        src: "/collage5.jpg",
        alt: "Abstract texture 5",
         // Mobile: Hidden. Tablet+: Spans 1 col, 1 row starting row 3 col 2
        className: "hidden md:block", // Hidden on mobile
    },
    {
        id: 6,
        src: "/collage6.jpg",
        alt: "Abstract texture 6",
        // Mobile: Full width, takes 4th row. Tablet+: Spans 1 col, 1 row starting row 3 col 3
        className: "col-span-2 md:col-span-1",
    },
];

// --- Main Component ---
const ImageGridHero = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        // offset: ["start end", "end start"] // Optional offset
    });

    return (
        <section ref={targetRef} className="relative bg-white h-[350vh]">
            {/* Sticky container - responsive grid, padding, gap */}
            <div className="sticky top-0 h-screen w-full overflow-hidden p-2 sm:p-4 grid grid-cols-2 md:grid-cols-3 md:grid-rows-3 gap-2 sm:gap-4">
                {/* Central Copy Component */}
                <Copy scrollYProgress={scrollYProgress} />

                {/* Image Grid Component */}
                <Images scrollYProgress={scrollYProgress} />

                {/* Decorative Circles */}
                <Circles />
            </div>
        </section>
    );
};

// --- Text Content Component ---
const Copy = ({ scrollYProgress }) => {
    // Move all transform hooks to the top level
    const scale = useTransform(scrollYProgress, [0, 0.75], [1, 0.5]);
    const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.75], ["0%", "7.5%"]);

    // Combine transforms in an object without hooks
    const copyTransforms = useMemo(() => ({
        scale,
        opacity,
        y
    }), [scale, opacity, y]);

    return (
        <motion.div
            style={copyTransforms}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-4 md:p-8"
        >
            <h1 className="text-stone-950 text-4xl sm:text-5xl md:text-7xl font-bold max-w-xs sm:max-w-md md:max-w-xl">
                Active in 15 countries worldwide
            </h1>
            <p className="text-stone-600 text-sm sm:text-base text-center max-w-xs sm:max-w-md md:max-w-xl my-4 md:my-6">
                Since our establishment in 1946, in León, Gto. México, we have maintained our commitment to develop chemical solutions that are innovative, creative and good for the environment. Today we are a proudly Mexican business with multiple important industry certifications and alliances.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-2">
                <BlueButton text="Try for free" />
                <WhiteButton text="Learn about us" />
            </div>
        </motion.div>
    );
};

// --- Images Component ---
const Images = ({ scrollYProgress }) => {
    // All transform hooks at the top level
    const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
    const leftToRight = useTransform(scrollYProgress, [0, 1], ["-35%", "0%"]);
    const rightToLeft = useTransform(scrollYProgress, [0, 1], ["30%", "0%"]);
    const topToBottom = useTransform(scrollYProgress, [0, 1], ["-35%", "0%"]);
    const bottomToTop = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);
    const specialY = useTransform(scrollYProgress, [0, 1], ["-145%", "0%"]);

    // Memoize the transforms mapping without any hook calls inside
    const transforms = useMemo(() => ({
        1: { x: leftToRight, y: topToBottom },    // Top left
        2: { x: rightToLeft, y: topToBottom },    // Top right
        3: { x: leftToRight, y: bottomToTop },    // Middle left
        4: { x: rightToLeft, y: specialY },       // Special case
        5: { x: leftToRight, y: bottomToTop },    // Bottom left
        6: { x: rightToLeft, y: bottomToTop },    // Bottom right
    }), [leftToRight, rightToLeft, topToBottom, bottomToTop, specialY]);

    return (
        <>
            {imageData.map((img) => (
                <motion.div
                    key={img.id}
                    className={`${img.className} relative z-10 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden`}
                    style={{
                        scale,
                        x: transforms[img.id]?.x,
                        y: transforms[img.id]?.y,
                    }}
                >
                    <img
                        src={img.src}
                        alt={img.alt}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                    />
                </motion.div>
            ))}
        </>
    );
};


// --- Decorative Circles Component ---
// No changes needed here unless responsiveness dictates adjustments
const Circles = () => (
    <>
         {/* Responsive border width */}
        <div className="w-3/5 max-w-[850px] min-w-[300px] md:min-w-[400px] aspect-square border-4 md:border-[8px] border-slate-200/50 rounded-full absolute z-0 left-0 top-0 -translate-x-1/2 -translate-y-1/2" />
        <div className="w-1/2 max-w-[600px] min-w-[200px] md:min-w-[300px] aspect-square border-4 md:border-[8px] border-slate-200/50 rounded-full absolute z-0 right-0 bottom-0 translate-x-1/2 translate-y-1/2" />
    </>
);


export default ImageGridHero;