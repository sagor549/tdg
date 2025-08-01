import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactLenis } from "lenis/dist/lenis-react";
import ToronHero from '../components/ToronHero';
import AboutSection from '../components/AboutSection';
import SpiritsSection from '../components/SpiritsSection';
import BrandCreationPreview from '../components/BrandCreationPreview';
import CoPackingPreview from '../components/CoPackingPreview';
import GivesBackSection from '../components/GivesBackSection';
import { useLocation } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const location = useLocation();

  // Animation setup
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
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Scroll to section handler
  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // Ensure the page starts at the top when no scroll target is specified
      window.scrollTo(0, 0);
    }
  }, [location.state]);

  return (
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      <div>
        <ToronHero />
        <section className="relative md:bottom-0 animate-section">
          <AboutSection />
        </section>
        <section className="relative bottom-6 md:bottom-0 animate-section" id="product-section">
          <SpiritsSection />
        </section>
        <section className="relative md:bottom-40 bottom-40 animate-section">
          <BrandCreationPreview />
        </section>
        <section className="relative md:bottom-40 animate-section bottom-40">
          <CoPackingPreview />
        </section>
        <section className="relative md:bottom-40 animate-section bottom-30">
          <GivesBackSection />
        </section>
      </div>
    </ReactLenis>
  );
};

export default Home;