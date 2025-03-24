import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { FaLightbulb, FaIndustry, FaSolarPanel } from "react-icons/fa";

export const DisappearingFeatures = () => {
  return (
    <>
      <div className="relative h-fit">
        <Features />
      </div>
    </>
  );
}; 

const Features = () => {
  return (
    <div className="relative mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
      <Copy />
      <Carousel />
    </div>
  );
};

const Copy = () => {
  return (
    <div className="flex h-fit w-full flex-col justify-center py-12 md:sticky md:top-0 md:h-screen">
      <span className="w-fit rounded-full bg-[#0126A9] px-4 py-2 text-sm uppercase text-white">
        Simply, the best
      </span>
      <h2 className="mb-4 mt-2 text-5xl font-medium leading-tight">
        Why Choose Us?
      </h2>
      <p className="text-lg text-black">
        Lorem ipsum dolor sit amet consectetur. Dolor quis a leo lobortis orci
        tortor eget. Enim proin aliquam nulla a lacus pellentesque quam in. Nec
        vel vel nulla nunc vel in molestie proin convallis. Leo et vulputate
        tincidunt justo a varius et elementum.
      </p>
    </div>
  );
};

const Carousel = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <div className="relative w-full">

      <div ref={ref} className="relative z-0 flex flex-col gap-6 md:gap-12">
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={1}
          numItems={4}
        />
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={2}
          numItems={4}
        />
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={3}
          numItems={4}
        />
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={4}
          numItems={4}
        />
      </div>
    </div>
  );
};

const CarouselItem = ({ scrollYProgress, position, numItems }) => {
  const stepSize = 1 / numItems;
  const end = stepSize * position;
  const start = end - stepSize;

  const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.75]);

  const features = [
    {
      icon: <FaLightbulb className="text-4xl text-[#0126A9]" />,
      title: "Innovative Research",
      subtitle: "and Edge-Cutting Technology"
    },
    {
      icon: <FaIndustry className="text-4xl text-[#0126A9]" />,
      title: "800 tons",
      subtitle: "Of production capacity by month"
    },
    {
      icon: <FaSolarPanel className="text-4xl text-[#0126A9]" />,
      title: "Sustainable alternatives",
      subtitle: "for various industries"
    },
    {
      icon: <FaLightbulb className="text-4xl text-[#0126A9]" />,
      title: "Feature 4",
      subtitle: "Description here"
    }
  ];

  return (
    <motion.div
      style={{
        opacity,
        scale,
      }}
      className="w-full shrink-0 rounded-2xl bg-white p-8 shadow-lg"
    >
      <div className="flex items-center gap-6">
        {features[position - 1].icon}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-950">{features[position - 1].title}</h3>
          <p className="text-lg text-indigo-800">{features[position - 1].subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default DisappearingFeatures;
