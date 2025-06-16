// src/pages/Home.jsx
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import  { ToronHero } from '../components/ToronHero';
import AboutSection from '../components/AboutSection';
import SpiritsSection from '../components/SpiritsSection';
import BrandCreationPreview from '../components/BrandCreationPreview';
import CoPackingPreview from '../components/CoPackingPreview';
import GivesBackSection from '../components/GivesBackSection';

const Home = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Initialize animations for all sections
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
  }, []);

  return (
    <div>
      <ToronHero />
      <AboutSection />
      <SpiritsSection />
      <BrandCreationPreview />
      <CoPackingPreview />
      <GivesBackSection />
    </div>
  );
};

export default Home;