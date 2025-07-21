import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/all';
import { ReactLenis } from "lenis/dist/lenis-react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1");

const ToronHero = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  
  useEffect(() => {
    // Preload critical images
    const preloadImages = [
      '/assets/hero.png',
      '/assets/bgg.jpg',
      '/assets/bk.jpg',
      '/assets/bki.png',
      '/assets/bl.png',
      '/assets/bot.png',
      '/assets/bottleg.png',
      '/assets/don.png',
      '/assets/intro.png',
      '/assets/media4.png',
      '/assets/orange.webp',
      '/assets/green.webp',
      '/assets/teq.png'
    ];
    
    preloadImages.forEach(src => {
      new Image().src = src;
    });

    // Set initial states
    gsap.set(".initial-nav", { y: "-125%" });
    gsap.set(".initial-grid-container", { opacity: 0 });
    
    const masterTimeline = gsap.timeline();
    const overlayTimeline = gsap.timeline();
    const gridTimeline = gsap.timeline();

    // Logo animation
    overlayTimeline.to(".initial-logo-line-1", {
      backgroundPosition: "0% 0%",
      color: "#fff",
      duration: 1,
      ease: "none",
      delay: 0.5
    });

    overlayTimeline.to(".initial-logo-line-2", {
      backgroundPosition: "0% 0%",
      color: "#fff",
      duration: 1,
      ease: "none"
    }, "-=0.5");

    // After logo animation, show the grid
    overlayTimeline.to(".initial-overlay", {
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
      onComplete: () => {
        gsap.set(".initial-grid-container", { display: "grid", opacity: 1 });
        
        const gridImages = [
          '/assets/bk.jpg',
          '/assets/bki.png',
          '/assets/bl.png',
          '/assets/bot.png',
          '/assets/hero.png',
          '/assets/bottleg.png',
          '/assets/don.png',
          '/assets/orange.webp',
          '/assets/teq.png'
        ];
        
        // Set initial grid images
        document.querySelectorAll(".initial-grid-img").forEach((img, i) => {
          img.src = gridImages[i];
        });
        
        // Grid animation sequence
        gridTimeline.to(".initial-grid-img", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1,
          stagger: { 
            each: 0.05,
            from: "random"
          },
          ease: "hop"
        });
        
        gridTimeline.to(".initial-grid-img", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1,
          delay: 0.5,
          stagger: { 
            each: -0.05,
            from: "center"
          },
          ease: "hop"
        });
        
        gridTimeline.to(".initial-grid-container", {
          opacity: 0,
          duration: 0.5,
          onComplete: () => setAnimationComplete(true)
        });
      }
    });
    
    masterTimeline.add(overlayTimeline);
  }, []);

  if (!animationComplete) {
    return (
      <div className="relative min-h-screen bg-black font-pp-neue-montreal overflow-hidden">
        <nav className="initial-nav fixed top-0 left-0 w-full z-50 p-8">
          <a href="#" className="text-[1.75rem] font-druk font-extrabold italic leading-tight text-black">
            Logo
          </a>
        </nav>
        
        <div className="initial-overlay fixed inset-0 w-full h-full bg-black flex items-center justify-center z-40">
          <div className="flex flex-col items-center gap-0">
            <h1 className="initial-logo-line-1 text-center uppercase font-druk text-[4rem] md:text-[6rem] italic leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-[#3a3a3a] to-[#3a3a3a] bg-[length:100%_200%] bg-[0%_100%]">
              Toronto
            </h1>
            <h1 className="initial-logo-line-2 text-center uppercase font-druk text-[4rem] md:text-[6rem] italic leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-[#3a3a3a] to-[#3a3a3a] bg-[length:100%_200%] bg-[0%_100%]">
              Distillery
            </h1>
          </div>
        </div>
        
        <div className="initial-grid-container fixed inset-0 w-full h-full hidden grid-cols-3 grid-rows-3 gap-[1px] z-50 bg-black">
          {[...Array(9)].map((_, index) => (
            <div key={index} className="relative overflow-hidden">
              <img 
                src="/assets/hero.png" 
                alt="" 
                className="initial-grid-img absolute inset-0 w-full h-full object-cover transition-all duration-300"
                style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

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
        <SpiritsSection />
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
      <div className="absolute inset-0 z-0 opacity-30">
        <img
          src="/assets/bgg.jpg"
          alt="Toronto skyline"
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="relative z-20 mx-auto max-w-6xl px-4 py-28 md:py-32 text-center">
        <motion.h1
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="mb-8 px-4 text-3xl font-black uppercase tracking-wide text-white md:text-7xl"
        >
          Distilled in Toronto.<br />Poured Worldwide.
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl px-4"
        >
          <img 
            src="/assets/hero.png"
            alt="Toronto Distillery Group Spirits"
            className="mx-auto rounded-xl shadow-2xl w-full"
          />
        </motion.div>
        
        <motion.p
          initial={{ y: 36, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75, delay: 0.1 }}
          className="mx-auto mb-16 max-w-2xl px-4 text-lg font-medium text-white md:text-2xl"
        >
          Brass Knuckles Canadian Whiskey. GOAT Vodka. Born Naked Raw Gin. Ladrillo Tequila.
          <br />
          Four world-class spirits. Zero compromises. One standard: perfection.
        </motion.p>
        
        <motion.div 
          className="flex flex-col items-center justify-center gap-4"
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
        >
          <a href="#product-section" className="group flex items-center justify-center gap-2 rounded-full border border-white bg-transparent px-6 py-3 text-base font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-white/10 md:text-xl">
            Explore Our Spirits
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
          <div className="flex flex-col md:flex-row gap-4">
            <CTAButton to="/alcohol-brand-creation">Alcohol Brand Creation</CTAButton>
            <CTAButton to="/co-packing-services">Co-Packing Services</CTAButton>
          </div>
        </motion.div>
        
        <motion.div
          className="mt-16 md:mt-24 flex items-center justify-center gap-2 text-zinc-400"
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
        className="flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 md:px-8 md:py-4 text-base md:text-xl font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-white/10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.div>
    </Link>
  );
};

export default ToronHero;