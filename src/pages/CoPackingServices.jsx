// src/pages/CoPackingServices.jsx
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const CoPackingServices = () => {
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

    // Animate icons with a bounce effect
    gsap.fromTo('.service-icon', 
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: '.services-section',
          start: "top 80%",
          toggleActions: "play none none none",
        },
        stagger: 0.2
      }
    );
  }, []);

  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: "Premium Bottling",
      description: "State-of-the-art bottling lines for spirits of all types and sizes with precision filling and capping."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Custom Labeling",
      description: "High-quality labeling services with pressure-sensitive, shrink sleeve, and embossed options."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: "Packaging Design",
      description: "Creative solutions for boxes, cartons, and display units that showcase your brand."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Warehousing",
      description: "Secure, temperature-controlled storage for your products before distribution."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      title: "Distribution",
      description: "Efficient logistics network for local, national, and international distribution."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Quality Assurance",
      description: "Rigorous quality control at every stage to ensure product integrity and compliance."
    }
  ];

  const processSteps = [
    { number: 1, title: "Consultation", description: "We discuss your requirements and goals" },
    { number: 2, title: "Planning", description: "We develop a tailored co-packing solution" },
    { number: 3, title: "Production", description: "Your products are manufactured to spec" },
    { number: 4, title: "Packaging", description: "Premium packaging and labeling applied" },
    { number: 5, title: "Distribution", description: "Products shipped to your destinations" },
    { number: 6, title: "Support", description: "Ongoing partnership for your success" }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 container mx-auto text-center animate-section">
        <div className="mb-6">
          <div className="inline-block bg-gold/20 px-4 py-1 rounded-full mb-4">
            <span className="text-gold text-sm uppercase tracking-wider">Co-Packing Solutions</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-light mb-6">
            Premium Co-Packing Services
          </h1>
          <p className="text-muted text-xl max-w-3xl mx-auto">
            From small craft batches to large commercial runs, we provide world-class co-packing solutions for premium spirits brands.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent rounded-lg -z-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
            <div className="text-center">
              <div className="text-5xl font-playfair font-bold text-gold mb-2">99.9%</div>
              <div className="text-light">Fill Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-playfair font-bold text-gold mb-2">24/7</div>
              <div className="text-light">Production Capability</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-playfair font-bold text-gold mb-2">100+</div>
              <div className="text-light">Brands Supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 container mx-auto services-section animate-section">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-playfair font-bold text-gold mb-4">Our Co-Packing Services</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Comprehensive solutions tailored to meet the unique needs of craft and commercial spirits brands.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-to-b from-black to-gold/5 border border-gold/20 rounded-lg p-8 transition-all duration-300 hover:border-gold/50"
            >
              <div className="service-icon text-gold mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-playfair font-bold text-light mb-3">{service.title}</h3>
              <p className="text-muted">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gold/10 animate-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-playfair font-bold text-gold mb-4">Our Co-Packing Process</h2>
            <p className="text-muted max-w-2xl mx-auto">
              A streamlined approach ensuring quality, efficiency, and brand consistency at every step.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gold/30 top-0 hidden md:block"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
                {processSteps.map((step, index) => (
                  <div 
                    key={index}
                    className={`relative ${index % 2 === 0 ? 'md:col-start-1 md:col-end-4' : 'md:col-start-4 md:col-end-7'} flex`}
                  >
                    <div className="hidden md:block absolute top-6 transform -translate-y-1/2 w-4 h-4 bg-gold rounded-full z-10"
                      style={{ 
                        left: index % 2 === 0 ? '100%' : '-16px',
                        right: index % 2 !== 0 ? '100%' : 'auto'
                      }}
                    ></div>
                    
                    <div className="bg-gradient-to-b from-black to-gold/10 border border-gold/20 rounded-lg p-6 flex-1">
                      <div className="text-gold font-playfair font-bold text-2xl mb-2">{step.number}.</div>
                      <h3 className="text-xl font-playfair font-bold text-light mb-2">{step.title}</h3>
                      <p className="text-muted">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 container mx-auto animate-section">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-playfair font-bold text-gold mb-4">Why Choose TDG Co-Packing?</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Partner with a co-packer that understands the premium spirits market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-playfair font-bold text-light mb-2">Premium Craftsmanship</h3>
                  <p className="text-muted">Our team brings distilling expertise to every project, ensuring your product meets the highest standards.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-playfair font-bold text-light mb-2">Regulatory Expertise</h3>
                  <p className="text-muted">Navigate complex alcohol regulations with our experienced compliance team.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-playfair font-bold text-light mb-2">Flexible Production</h3>
                  <p className="text-muted">From 100 cases to 100,000 cases, we scale to meet your production needs.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-playfair font-bold text-light mb-2">Eco-Conscious Operations</h3>
                  <p className="text-muted">Sustainable practices that reduce environmental impact without compromising quality.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute top-0 left-0 w-64 h-64 bg-gold/10 rounded-full filter blur-3xl -z-10"></div>
              <div className="relative bg-gradient-to-br from-black to-gold/10 border border-gold/20 rounded-xl overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 bg-gray-800/30 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-gold text-6xl mb-4">"</div>
                    <p className="text-light italic text-lg mb-6">
                      Toronto Distillery Group elevated our brand with precision bottling and exceptional attention to detail.
                    </p>
                    <div className="text-gold font-playfair">— Craft Spirits Founder</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gold/10 to-black animate-section">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-light mb-6">
              Ready to Scale Your Spirits Brand?
            </h2>
            <p className="text-muted text-xl mb-10">
              Partner with Toronto Distillery Group for premium co-packing services that bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-gold text-black py-3 px-8 font-medium text-lg hover:bg-opacity-90 transition-all">
                Request a Quote
              </button>
              <button className="border border-gold text-gold py-3 px-8 font-medium text-lg hover:bg-gold hover:bg-opacity-10 transition-all">
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoPackingServices;