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
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    tl.fromTo(
      contentRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );

    iconRefs.current.forEach((icon, index) => {
      gsap.fromTo(
        icon,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          delay: index * 0.2,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  const initiatives = [
    {
      icon: '/assets/sus1.gif',
      title: 'Sustainability',
      description:
        'Reducing environmental impact through sustainable practices and renewable energy initiatives',
      color: 'text-emerald-600',
    },
    {
      icon: '/assets/com.gif',
      title: 'Community',
      description:
        'Supporting local organizations, education programs, and community development',
      color: 'text-blue-600',
    },
    {
      icon: '/assets/soli.gif',
      title: 'Causes',
      description:
        'Partnering with national charities focused on health, equality, and social justice',
      color: 'text-purple-600',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="gives-back"
      className="py-20 px-4 md:px-8 relative overflow-hidden bg-white text-black"
    >
      {/* Background with dark overlay */}
     

      <div className="container mx-auto text-center relative z-10">
        <div ref={contentRef} className="opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            <span className="block">TDG Gives Back</span>
          </h2>
          <p className="text-black max-w-3xl mx-auto mb-12 text-2xl leading-relaxed">
            We believe that giving back isn't a side project—it's core to our
            mission. Through strategic partnerships and dedicated initiatives,
            we're building a legacy of positive impact that extends beyond our
            products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div
                ref={(el) => (iconRefs.current[index] = el)}
                className="mb-4 opacity-0 flex justify-center"
              >
                <img
                  src={initiative.icon}
                  alt={initiative.title}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {initiative.title}
              </h3>
              <p className="text-gray-600">{initiative.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl p-6 max-w-4xl mx-auto border border-gray-200 shadow-sm">
          <p className="text-gray-700 italic text-lg">
            "In 2023, we donated 2% of all profits to environmental conservation
            and community development programs. We're committed to increasing
            this to 5% by 2025."
          </p>
          <p className="text-gray-900 font-medium mt-4 text-2xl">
            — TDG Leadership Team
          </p>
        </div>
      </div>
    </section>
  );
};

export default GivesBackSection;
