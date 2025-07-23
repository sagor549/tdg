import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, useLocation } from 'react-router-dom';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const CoPackingPreview = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const descRef = useRef(null);
  const contentRef = useRef(null);
  const iconRefs = useRef([]);
  const location = useLocation();

  // Reset scroll position on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    // Create master timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      }
    });
    
    // Header animation
    tl.fromTo(headerRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
    
    // Description animation
    tl.fromTo(descRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    );
    
    // Content animation
    tl.fromTo(contentRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    );
    
    // Icons animation
    tl.fromTo(iconRefs.current,
      { y: 30, opacity: 0, scale: 0.8 },
      { 
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.7)"
      },
      "-=0.3"
    );
    
    // Cleanup ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const services = [
    { icon: '/assets/bot2.png', title: 'Bottling' },
    { icon: '/assets/lab1.png', title: 'Labeling' },
    { icon: '/assets/pack.png', title: 'Packaging' },
    { icon: '/assets/logistics.png', title: 'Logistics' },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 px-4 bg-cover bg-center"
     style={{
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/assets/packbg.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
}}

    >
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Top centered header and description */}
        <div className="text-center mb-16">
          <h2 
            ref={headerRef}
            className="text-4xl md:text-5xl font-bold text-white mb-6  opacity-0"
          >
            Premium Co-Packing Solutions
          </h2>
          <p 
            ref={descRef}
            className="text-2xl text-gray-200 max-w-3xl mx-auto opacity-0 "
          >
            From small craft batches to large commercial runs, we provide world-class co-packing solutions for premium spirits brands. 
            Our state-of-the-art facility ensures precision and quality at every step of the production process.
          </p>
        </div>

        {/* Bottom flex row */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left content */}
          <div 
            ref={contentRef}
            className="flex-1 opacity-0"
          >
            <p className="text-gray-200 mb-6  text-2xl">
              With ISO-certified processes and industry-leading technology, we maintain the highest standards while optimizing your production costs.
            </p>
            <p className="text-gray-200 mb-8 text-2xl">
              Our dedicated team works closely with you to ensure brand consistency and quality control throughout the entire production lifecycle.
            </p>
            <Link 
              to="/co-packing-services" 
              className="inline-block bg-white text-gray-900 py-3 px-8 font-bold tracking-wider  hover:bg-black hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              onClick={() => window.scrollTo(0, 0)}
            >
              Explore Our Services
            </Link>
          </div>
          
          {/* Right icons */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  ref={el => iconRefs.current[index] = el}
                  className="  p-6 text-center shadow-xl hover:bg-opacity-20 transition-all duration-300 opacity-0 transform"
                >
                  <div className="flex justify-center mb-3">
                    <img 
                      src={service.icon} 
                      alt={service.title}
                      className="w-26 h-26 object-contain"
                    />
                  </div>
                  <div className="text-white font-bold tracking-wide">{service.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoPackingPreview;