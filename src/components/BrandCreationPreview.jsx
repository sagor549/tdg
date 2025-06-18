import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, useLocation } from 'react-router-dom';

const BrandCreationPreview = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const featureRefs = useRef([]);
  const location = useLocation();

  // Reset scroll position on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
    ).fromTo(featureRefs.current, 
      { y: 20, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6, 
        stagger: 0.1,
        ease: "power2.out"
      }, 
      "-=0.4"
    );
    
    // Cleanup ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-28 px-4 bg-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gray-100 rounded-full -z-10"></div>
      <div className="absolute bottom-20 left-8 w-24 h-24 border-2 border-gray-200 rounded-full -z-10"></div>
      
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center">
          <div ref={contentRef} className="opacity-0 relative z-10 max-w-3xl">
            <div className="mb-2">
              <span className="text-sm uppercase tracking-widest text-gray-500 font-medium">
                Premium Craftsmanship
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-6 leading-tight">
              Alcohol Brand Creation Studio
            </h2>
            
            <div className="w-20 h-0.5 bg-gray-300 mx-auto mb-8"></div>
            
            <p className="text-gray-700 mb-10 text-lg leading-relaxed">
              Transform your vision into a premium spirit brand with our expert guidance and production capabilities. 
              From concept to shelf, we provide end-to-end solutions for exceptional brand development.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                { title: 'Concept Development', desc: 'Crafting unique brand narratives and positioning' },
                { title: 'Recipe Formulation', desc: 'Expert distillation and flavor profiling' },
                { title: 'Regulatory Compliance', desc: 'Navigating complex alcohol regulations' },
                { title: 'Packaging Design', desc: 'Creating iconic, shelf-stunning presentations' }
              ].map((feature, index) => (
                <div 
                  key={feature.title}
                  ref={el => featureRefs.current[index] = el}
                  className="opacity-0 p-6 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-black font-bold">{index + 1}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <Link 
              to="/alcohol-brand-creation" 
              className="inline-block bg-black text-white py-4 px-10 font-medium tracking-wide 
                         hover:bg-gray-800 transition-all duration-300 relative group"
              onClick={() => window.scrollTo(0, 0)}
            >
              <span className="relative z-10 flex items-center justify-center">
                Create Your Brand
                <svg 
                  className="ml-3 transition-transform duration-300 group-hover:translate-x-1" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-300 transition-all duration-500 group-hover:h-full group-hover:opacity-10 -z-10"></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCreationPreview;