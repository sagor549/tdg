// src/components/SpiritsSection.jsx
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const spirits = [
  {
    name: 'Brass Knuckles Whiskey',
    description: 'A bold Canadian whiskey with notes of vanilla, oak, and spice. Aged to perfection in charred barrels.',
    color: '#8B4513'
  },
  {
    name: 'GOAT Vodka',
    description: 'Ultra-smooth vodka distilled five times for unparalleled purity and crisp finish.',
    color: '#F0F0F0'
  },
  {
    name: 'Born Naked Raw Gin',
    description: 'Unfiltered gin with vibrant botanicals. A pure expression of juniper and citrus.',
    color: '#D4F1F9'
  },
  {
    name: 'Ladrillo Tequila',
    description: 'Artisanal tequila crafted from blue agave, with complex notes of pepper and caramel.',
    color: '#E6BC6A'
  }
];

const SpiritsSection = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(card, 
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          }
        }
      );
    });
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="spirits"
      className="py-20 px-4 container mx-auto animate-section"
    >
      <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center text-gold mb-16">
        Our Spirits
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {spirits.map((spirit, index) => (
          <div 
            key={index}
            ref={el => cardRefs.current[index] = el}
            className="group relative h-96 bg-black border border-gold/20 rounded-lg overflow-hidden opacity-0"
          >
            <div 
              className="absolute inset-0 transition-all duration-700 opacity-20 group-hover:opacity-30"
              style={{ backgroundColor: spirit.color }}
            ></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
              <div className="w-32 h-64 mb-6 flex items-end">
                <div 
                  className="w-full h-5/6 rounded-lg transition-all duration-500 group-hover:scale-105"
                  style={{ backgroundColor: spirit.color }}
                ></div>
              </div>
              <h3 className="text-xl font-playfair font-bold text-light mb-2">{spirit.name}</h3>
              <p className="text-muted text-sm">{spirit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpiritsSection;