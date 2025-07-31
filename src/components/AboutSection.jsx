import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export default function AboutSection() {
  return (
    <div className="bg-white">
      {/* Introductory Text Section */}
      <div className="max-w-5xl mx-auto px-4 py-12 md:py-24 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-4 md:mb-6">
          Toronto Distillery Group
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto">
          Crafting exceptional spirits with passion and precision, rooted in the heart of Canada.
        </p>
      </div>

      {/* Parallax Sections */}
      <TextParallaxContent
        imgUrl="/assets/tdg-bg.png"
        subheading="Our Story"
        heading="Founded in 2019"
      >
        <AboutContent 
          title="Mastering the craft" 
          description="Toronto Distillery Group has been quietly mastering the art of premium spirits — one small batch at a time. Our journey began with bold ambition and a single goal: to raise the standard of Canadian-made alcohol."
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=2486&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Our Portfolio"
        heading="Crafted Excellence"
      >
        <AboutContent 
          title="Elite spirits collection" 
          description="Today, our flagship Brass Knuckles Canadian Whiskey – Master Select leads a portfolio of elite, handcrafted spirits: GOAT Vodka, Born Naked Raw Gin. Each reflects our commitment to quality, character, and our Toronto roots."
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Our Mission"
        heading="Beyond Distilling"
      >
        <AboutContent 
          title="Community commitment" 
          description="We've supported good causes since day one. As we grow, so does our impact. Giving back isn't a side project—it's core to our mission. From local sponsorships to national initiatives, we'll do whatever it takes for communities that stand with us."
        />
      </TextParallaxContent>
      
      {/* Closing Statement */}
      <div className="mx-auto max-w-5xl px-4 py-12 md:py-24 text-center">
        <p className="text-3xl md:text-4xl font-bold text-black">This is Toronto Distillery Group.</p>
        <p className="mt-4 text-xl md:text-2xl text-gray-900">Rooted in craft. Driven by purpose. Proudly Canadian.</p>
      </div>
    </div>
  );
}

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div className="mb-4 md:mb-8 px-4 md:px-12">
      <div className="relative h-[40vh] md:h-[60vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-xl md:rounded-3xl h-full w-full"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{ opacity }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{ y, opacity }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center text-white px-4"
    >
      <p className="mb-1 text-center text-lg md:mb-2 md:text-xl">
        {subheading}
      </p>
      <p className="text-center text-2xl font-bold md:text-5xl">{heading}</p>
    </motion.div>
  );
};

const AboutContent = ({ title, description }) => (
  <div className="mx-auto max-w-5xl grid grid-cols-1 gap-4 px-4 py-6 md:grid-cols-12 md:gap-6 md:py-12">
    <h2 className="col-span-1 text-xl font-bold md:col-span-4 md:text-3xl text-black">
      {title}
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="text-base text-neutral-600 md:text-xl">
        {description}
      </p>
    </div>
  </div>
);