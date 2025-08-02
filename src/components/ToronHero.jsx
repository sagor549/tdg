import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/all';
import { ReactLenis } from "lenis/dist/lenis-react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Navbar from './Navbar';

gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1");

const ToronHero = () => {
   const [animationComplete, setAnimationComplete] = useState(
    localStorage.getItem('introPlayed') === 'true'
  );
  
  useEffect(() => {
    if (localStorage.getItem('introPlayed') === 'true') {
      return;
    }

    const gridImages = [
      '/assets/bk.jpg',
      '/assets/go.jpg',
      '/assets/media4.png',
      '/assets/raw.jpg',
      '/assets/gd.png',
      '/assets/bk6.jpg',
      '/assets/tdg-bg.png',
      '/assets/orange.webp',
      '/assets/gin.jpg'
    ];
    
    gridImages.forEach(src => {
      new Image().src = src;
    });

    const masterTimeline = gsap.timeline();
    const gridTimeline = gsap.timeline();

    gsap.set(".initial-grid-container", { opacity: 0 });
    
    gridTimeline.to(".initial-grid-img", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 0.8,
      stagger: { 
        each: 0.05,
        from: "random"
      },
      ease: "hop"
    });
    
    gridTimeline.to(".initial-grid-img", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 0.8,
      delay: 0.3,
      stagger: { 
        each: -0.05,
        from: "center"
      },
      ease: "hop"
    }, "+=0.2");
    
    gridTimeline.to(".initial-grid-container", {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        localStorage.setItem('introPlayed', 'true');
        setAnimationComplete(true);
      }
    });
    
    masterTimeline.add(gridTimeline);
  }, []);

  return (
    <div className="bg-black">
      <ReactLenis
        root
        options={{
          lerp: 0.05,
          smoothWheel: true,
          smoothTouch: true
        }}
      >
        <Navbar />
        
        {!animationComplete ? (
          <div className="relative min-h-screen bg-black font-pp-neue-montreal overflow-hidden">
            <div className="initial-grid-container fixed inset-0 w-full h-full grid grid-cols-3 grid-rows-3 gap-[1px] z-50 bg-black">
              {[...Array(9)].map((_, index) => (
                <div key={index} className="relative overflow-hidden">
                  <img 
                    src={`/assets/grid-${index + 1}.jpg`} 
                    alt="" 
                    className="initial-grid-img absolute inset-0 w-full h-full object-cover"
                    style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <SpiritsSection />
        )}
      </ReactLenis>
    </div>
  );
};

const SpiritsSection = () => {
  return (
    <section
      id="spirits"
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/apbg.jpeg"
          alt="Toronto Distillery background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-20 mx-auto max-w-6xl px-4 py-28 md:py-32 min-h-screen flex flex-col justify-center">
        {/* Centered heading */}
        <motion.h1
  initial={{ y: 48, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ ease: "easeInOut", duration: 0.75 }}
  className="mb-8 text-3xl font-black uppercase tracking-wide text-white text-center md:text-5xl lg:text-6xl xl:text-7xl"
>
  Distilled in <span className="text-[#9E551D]">Toronto</span><br />Poured <span className="text-[#9E551D]">Worldwide</span>
</motion.h1>
        
        {/* Bottle images - mobile view */}
        <motion.div 
          className="md:hidden mb-6 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-end justify-center -mx-4">
            <motion.img 
              src="/assets/orange.webp" 
              alt="GOAT Vodka" 
              className="w-[30%] max-w-[170px] transform -translate-y-4 relative left-58 top-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            />
            <motion.img 
              src="/assets/bk2.png" 
              alt="Brass Knuckles Canadian Whiskey" 
              className="w-[160%] max-w-[460px] mx-[-15px] relative left-15 z-40"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
            />
            <motion.img 
              src="/assets/bottleg.png" 
              alt="Born Naked Raw Gin" 
              className="w-[80%] max-w-[220px] transform -translate-y-4 relative right-40 z-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            />
          </div>
        </motion.div>
        
        {/* Main content container */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-18 items-center justify-evenly relative md:top-15">
          {/* Text content - left-aligned on desktop */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ y: 36, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.75, delay: 0.1 }}
              className="mb-6 md:mb-8 text-lg md:text-xl lg:text-2xl font-medium text-white text-center md:text-left"
            >
              Born Naked Raw Gin. Brass Knuckles Canadian Whiskey. GOAT Vodka. 
              <br  /> 
              <br  />
              Four world-class spirits. Zero compromises. One standard: PERFECTION.
            </motion.p>
            
            <motion.div 
              className="flex flex-col items-center md:items-start gap-4"
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.75 }}
            >
              <a 
                href="#product-section" 
                className="group flex items-center justify-center gap-2 rounded-full border border-white bg-white text-black px-4 py-2 text-sm md:px-6 md:py-3 md:text-base font-bold uppercase tracking-wide transition-all duration-300 hover:bg-gray-300"
              >
                Explore Our Spirits
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
              <div className="flex flex-col md:flex-row gap-3 md:gap-4">
                <CTAButton to="/alcohol-brand-creation">Alcohol Brand Creation</CTAButton>
                <CTAButton to="/co-packing-services">Co-Packing Services</CTAButton>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Bottle images - desktop view */}
          <motion.div 
            className="hidden md:flex w-full md:w-1/2 items-end justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-[420px] flex items-end justify-center left-58 top-10">
              {/* Whiskey bottle - larger and centered */}
              <motion.img 
                src="/assets/bk2.png" 
                alt="Brass Knuckles Canadian Whiskey" 
                className="absolute z-20 w-[180%] max-w-[680px] bottom-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.7 }}
              />
              
              {/* Vodka bottle - left side */}
              <motion.img 
                src="/assets/orange.webp" 
                alt="GOAT Vodka" 
                className="absolute z-10 w-[35%] max-w-[220px] left-[4%] bottom-[-15%] transform -translate-y-4 "
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              />
              
              {/* Gin bottle - right side */}
              <motion.img 
                src="/assets/bottleg.png" 
                alt="Born Naked Raw Gin" 
                className="absolute z-10 w-[70%] max-w-[320px] right-[-9%] bottom-10 transform -translate-y-4 "
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="mt-16 md:mt-40 flex items-center justify-center gap-2 text-zinc-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75, delay: 0.5 }}
        >
          <span className="block h-8 w-px bg-white animate-bounce"></span>
          <span className="text-sm font-medium tracking-wide text-white">
            Discover Toronto Distillery Group
          </span>
        </motion.div>
      </div>
    </section>
  );
};

const CTAButton = ({ children, to }) => {
  return (
    <Link to={to} className="group">
      <motion.div
        className="group flex items-center justify-center gap-2 rounded-full border border-white bg-white text-black px-4 py-2 text-sm md:px-6 md:py-3 md:text-base font-bold uppercase tracking-wide transition-all duration-300 hover:bg-gray-300 whitespace-nowrap"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
        <FiArrowRight className="transition-transform group-hover:translate-x-1" />
      </motion.div>
    </Link>
  );
};

export default ToronHero;