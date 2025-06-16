// src/components/CoPackingPreview.jsx
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

const CoPackingPreview = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const iconRefs = useRef([]);

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
    );

    // Animate icons
    iconRefs.current.forEach((icon, index) => {
      gsap.fromTo(icon, 
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          delay: index * 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          }
        }
      );
    });
  }, []);

  const services = [
    { icon: '🥃', title: 'Bottling' },
    { icon: '🏷️', title: 'Labeling' },
    { icon: '📦', title: 'Packaging' },
    { icon: '🚚', title: 'Logistics' },
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-r from-gold/10 to-black animate-section"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  ref={el => iconRefs.current[index] = el}
                  className="bg-gradient-to-b from-black to-gold/10 border border-gold/20 rounded-lg p-8 text-center opacity-0"
                >
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <div className="text-light font-medium">{service.title}</div>
                </div>
              ))}
            </div>
          </div>
          <div ref={contentRef} className="opacity-0">
            <h2 className="text-3xl font-playfair font-bold text-gold mb-6">
              Co-Packing Services
            </h2>
            <p className="text-light mb-6">
              From small craft batches to large commercial runs, we provide world-class co-packing solutions for premium spirits brands. 
              Our state-of-the-art facility ensures precision and quality at every step.
            </p>
            <Link 
              to="/co-packing-services" 
              className="inline-block bg-gold text-black py-3 px-8 font-medium hover:bg-opacity-90 transition-all"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoPackingPreview;