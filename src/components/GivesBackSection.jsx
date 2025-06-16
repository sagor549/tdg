// src/components/GivesBackSection.jsx
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const GivesBackSection = () => {
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
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          }
        }
      );
    });
  }, []);

  const initiatives = [
    { icon: '🌿', title: 'Sustainability', description: 'Reducing environmental impact through sustainable practices' },
    { icon: '🤝', title: 'Community', description: 'Supporting local organizations and initiatives' },
    { icon: '🎗️', title: 'Causes', description: 'Partnering with national charities and causes' },
  ];

  return (
    <section 
      ref={sectionRef}
      id="gives-back"
      className="py-20 px-4 bg-gradient-to-b from-black to-gold/10 animate-section"
    >
      <div className="container mx-auto text-center">
        <div ref={contentRef} className="opacity-0">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gold mb-6">
            TDG Gives Back
          </h2>
          <p className="text-light max-w-3xl mx-auto mb-12">
            We believe that giving back isn't a side project. It's part of our mission. 
            From local sponsorships to national initiatives, we're committed to making a positive impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {initiatives.map((initiative, index) => (
            <div 
              key={index}
              className="bg-gradient-to-b from-black to-gold/5 border border-gold/20 rounded-lg p-8"
            >
              <div 
                ref={el => iconRefs.current[index] = el}
                className="text-5xl mb-4 opacity-0"
              >
                {initiative.icon}
              </div>
              <h3 className="text-xl font-playfair font-bold text-light mb-2">{initiative.title}</h3>
              <p className="text-muted">{initiative.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GivesBackSection;