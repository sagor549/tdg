// src/components/BrandCreationPreview.jsx
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

const BrandCreationPreview = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const bottleRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      }
    });
    
    tl.fromTo(contentRef.current, 
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    ).fromTo(bottleRef.current, 
      { scale: 0.8, opacity: 0, rotation: -10 },
      { scale: 1, opacity: 1, rotation: 0, duration: 1.2, ease: "back.out(1.7)" }, 
      "-=0.5"
    );
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-r from-black to-gold/10 animate-section"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={contentRef} className="opacity-0">
            <h2 className="text-3xl font-playfair font-bold text-gold mb-6">
              Alcohol Brand Creation Studio
            </h2>
            <p className="text-light mb-6">
              Transform your vision into a premium spirit brand with our expert guidance and production capabilities. 
              From concept to shelf, we provide end-to-end solutions including recipe development, regulatory compliance, 
              packaging design, and distribution strategy.
            </p>
            <Link 
              to="/alcohol-brand-creation" 
              className="inline-block bg-gold text-black py-3 px-8 font-medium hover:bg-opacity-90 transition-all"
            >
              Create Your Brand
            </Link>
          </div>
          <div ref={bottleRef} className="opacity-0 flex justify-center">
            <div className="relative w-48 h-72">
              <div className="absolute inset-0 bg-gradient-to-b from-gold/20 to-transparent rounded-lg"></div>
              <div className="relative w-full h-full flex items-end justify-center">
                <div className="w-24 h-56 bg-gradient-to-b from-amber-300 to-amber-800 rounded-lg shadow-xl"></div>
                <div className="absolute top-0 w-32 h-4 bg-gold/50 rounded-full"></div>
                <div className="absolute bottom-0 w-full h-8 bg-gold/30 rounded-b-lg"></div>
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gold/10 rounded-lg border border-gold/30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCreationPreview;