// src/pages/Home.jsx
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactLenis } from "lenis/dist/lenis-react";
import { ToronHero } from '../components/ToronHero';
import AboutSection from '../components/AboutSection';
import SpiritsSection from '../components/SpiritsSection';
import BrandCreationPreview from '../components/BrandCreationPreview';
import CoPackingPreview from '../components/CoPackingPreview';
import GivesBackSection from '../components/GivesBackSection';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.animate-section');
    
    sections.forEach(section => {
      gsap.fromTo(section, 
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          }
        }
      );
    });
    
    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      <div>
        <ToronHero />
        <section className='relative bottom-30 md:bottom-0'>
          <AboutSection />
        </section>
        <section className='relative bottom-0 md:bottom-0'>
        <SpiritsSection />
        </section>

        <section className='relative'>
          <BrandCreationPreview />
        </section>
        <CoPackingPreview />
        <GivesBackSection />
      </div>
    </ReactLenis>
  );
};

export default Home;