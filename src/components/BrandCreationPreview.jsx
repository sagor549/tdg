import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, useLocation } from 'react-router-dom';

const BrandCreationPreview = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const featureRefs = useRef([]);
  const location = useLocation();

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

    tl.fromTo(
      contentRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    ).fromTo(
      featureRefs.current,
      { y: 40, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out"
      },
      "-=0.4"
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 px-4 overflow-hidden bg-black text-black"
    >
      {/* === Background Video === */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/bgvid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0  backdrop-blur-md"></div>

      {/* === Decorative Overlays === */}
      

      <div className="container mx-auto max-w-4xl relative z-20">
        <div className="flex flex-col items-center text-center">
          <div ref={contentRef} className="opacity-0 max-w-3xl">
            <div className="mb-2">
              <span className="text-sm uppercase tracking-widest text-black font-medium">
                Premium Craftsmanship
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 leading-tight text-black">
              Alcohol Brand Creation Studio
            </h2>

            <div className="w-20 h-0.5 bg-white/30 mx-auto mb-8"></div>

            <p className="text-black mb-10 text-2xl leading-relaxed">
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
                  className="opacity-0 p-6 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-black font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-black/80">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/alcohol-brand-creation"
              className="inline-block bg-white text-black py-4 px-10 font-medium tracking-wide 
                         hover:bg-gray-300 transition-all duration-300 relative group"
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
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black/20 transition-all duration-500 group-hover:h-full group-hover:opacity-10 -z-10"></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCreationPreview;
