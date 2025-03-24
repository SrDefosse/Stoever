import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { FaLightbulb, FaIndustry, FaSolarPanel } from "react-icons/fa";

export const DisappearingFeatures = () => {
  return (
    <>
      <div className="relative min-h-screen mt-16">
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
        With over 30 years of experience in the industry, we've established ourselves as pioneers in sustainable chemical solutions. Our commitment to excellence, coupled with state-of-the-art facilities and a dedicated team of experts, ensures we deliver products that not only meet but exceed industry standards. We take pride in our ability to provide customized solutions while maintaining our commitment to environmental responsibility.
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
      subtitle: "Leading R&D facility with breakthrough solutions",
      description: "Our state-of-the-art research facilities and expert team continuously develop innovative solutions that shape industry standards."
    },
    {
      icon: <FaIndustry className="text-4xl text-[#0126A9]" />,
      title: "800 tons",
      subtitle: "Monthly production capacity with consistent quality",
      description: "Our advanced manufacturing facilities ensure high-volume production without compromising on quality or reliability."
    },
    {
      icon: <FaSolarPanel className="text-4xl text-[#0126A9]" />,
      title: "Sustainable Solutions",
      subtitle: "Eco-friendly products for a greener future",
      description: "We prioritize environmental responsibility by developing products that minimize ecological impact while maximizing performance."
    },
    {
      icon: <FaLightbulb className="text-4xl text-[#0126A9]" />,
      title: "Global Reach",
      subtitle: "Serving clients across 40+ countries",
      description: "With an extensive distribution network and local support teams, we deliver excellence worldwide with personalized attention."
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
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-6">
          {features[position - 1].icon}
          <div>
            <h3 className="text-2xl font-semibold text-indigo-950">{features[position - 1].title}</h3>
            <p className="text-lg text-indigo-800">{features[position - 1].subtitle}</p>
          </div>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">{features[position - 1].description}</p>
      </div>
    </motion.div>
  );
};

export default DisappearingFeatures;
