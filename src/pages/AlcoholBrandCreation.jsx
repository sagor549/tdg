// src/pages/AlcoholBrandCreation.jsx
import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AlcoholBrandCreation = () => {
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
    <div className="min-h-screen">
      <section className="pt-32 pb-20 px-4 container mx-auto text-center animate-section">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gold mb-6">
          Alcohol Brand Creation
        </h1>
        <p className="text-light text-xl max-w-3xl mx-auto mb-10">
          Transform your vision into a premium spirit brand with our expert guidance and production capabilities.
        </p>
      </section>
      
      <section className="py-20 px-4 container mx-auto animate-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-playfair font-bold text-gold mb-6">Craft Your Unique Spirit</h2>
            <p className="text-light mb-4">
              Our brand creation studio helps entrepreneurs, restaurateurs, and established brands develop 
              exceptional spirits from concept to shelf. With our state-of-the-art facilities and expert 
              distillers, we bring your vision to life.
            </p>
            <p className="text-light mb-6">
              Whether you're creating a small-batch artisanal product or a large-scale commercial brand, 
              we provide end-to-end solutions including recipe development, regulatory compliance, 
              packaging design, and distribution strategy.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-gold/10 border border-gold/20 p-4 rounded-lg">
                <h3 className="text-light font-bold mb-2">Custom Formulation</h3>
                <p className="text-muted text-sm">Create unique flavor profiles with our master distillers</p>
              </div>
              <div className="bg-gold/10 border border-gold/20 p-4 rounded-lg">
                <h3 className="text-light font-bold mb-2">Regulatory Expertise</h3>
                <p className="text-muted text-sm">Navigate complex compliance requirements</p>
              </div>
              <div className="bg-gold/10 border border-gold/20 p-4 rounded-lg">
                <h3 className="text-light font-bold mb-2">Brand Strategy</h3>
                <p className="text-muted text-sm">Develop compelling brand positioning</p>
              </div>
              <div className="bg-gold/10 border border-gold/20 p-4 rounded-lg">
                <h3 className="text-light font-bold mb-2">Packaging Design</h3>
                <p className="text-muted text-sm">Create distinctive, shelf-ready packaging</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-md h-96 bg-gradient-to-br from-gold/10 to-black border border-gold/30 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1603739903239-8b6e64c3b185?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80')] bg-cover bg-center opacity-70"></div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gold/5 animate-section">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl font-playfair font-bold text-gold mb-6">Ready to Create Your Spirit?</h2>
          <p className="text-light mb-8">
            Contact our brand creation team to schedule a consultation and begin your journey in the premium spirits market.
          </p>
          <button className="bg-gold text-black py-3 px-8 font-medium text-lg hover:bg-opacity-90 transition-all">
            Start Your Brand Journey
          </button>
        </div>
      </section>
    </div>
  );
};

export default AlcoholBrandCreation;