import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, useLocation } from 'react-router-dom';

const CoPackingPreview = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const iconRefs = useRef([]);
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
    
    // Cleanup ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
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
      className="py-20 px-4 bg-gray-50"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  ref={el => iconRefs.current[index] = el}
                  className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 opacity-0"
                >
                  <div className="text-4xl mb-3 text-gray-800">{service.icon}</div>
                  <div className="text-gray-700 font-medium tracking-wide">{service.title}</div>
                </div>
              ))}
            </div>
          </div>
          <div ref={contentRef} className="opacity-0">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-sans">
              Premium Co-Packing Solutions
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              From small craft batches to large commercial runs, we provide world-class co-packing solutions for premium spirits brands. 
              Our state-of-the-art facility ensures precision and quality at every step of the production process.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              With ISO-certified processes and industry-leading technology, we maintain the highest standards while optimizing your production costs.
            </p>
            <Link 
              to="/co-packing-services" 
              className="inline-block bg-gray-900 text-white py-3 px-8 font-medium tracking-wide rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
              onClick={() => window.scrollTo(0, 0)}
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoPackingPreview;