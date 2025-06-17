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

    // Animate process cards
    gsap.fromTo('.process-card', 
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.process-section',
          start: "top 85%",
          toggleActions: "play none none none",
        },
        stagger: 0.15
      }
    );
  }, []);

  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: "Premium Bottling",
      description: "State-of-the-art bottling lines for spirits of all types and sizes with precision filling and capping."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Custom Labeling",
      description: "High-quality labeling services with pressure-sensitive, shrink sleeve, and embossed options."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: "Packaging Design",
      description: "Creative solutions for boxes, cartons, and display units that showcase your brand."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Warehousing",
      description: "Secure, temperature-controlled storage for your products before distribution."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      title: "Distribution",
      description: "Efficient logistics network for local, national, and international distribution."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 container mx-auto text-center animate-section relative">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <div className="bg-[url('/assets/hero.png')] bg-cover bg-center absolute inset-0 opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/0 to-black"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-block bg-[url('/assets/bgg.jpg')] text-gray-200 py-1 px-4 rounded-full text-sm font-medium tracking-wide mb-6">
            CO-PACKING SOLUTIONS
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Premium Co-Packing Services
          </h1>
          <p className="text-white text-xl max-w-3xl mx-auto leading-relaxed">
            From small craft batches to large commercial runs, we provide world-class co-packing solutions for premium spirits brands.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            {[
              { value: "99.9%", label: "Fill Accuracy" },
              { value: "24/7", label: "Production Capability" },
              { value: "100+", label: "Brands Supported" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 container mx-auto services-section animate-section relative">
        {/* Decorative background */}
        <div className="absolute inset-0 z-0">
          <div className="bg-[url('/assets/bgg.jpg')] bg-cover bg-center absolute inset-0 opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/0 to-black"></div>
        </div>
        
        <div className="relative z-10">
          <div className="text-center mb-16">
            
            <h2 className="text-3xl font-bold text-white mb-4">Our Co-Packing Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive solutions tailored to meet the unique needs of craft and commercial spirits brands.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-transparent backdrop-blur-sm rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
              >
                {/* Hover effect background */}
                <div className="absolute inset-0  bg-cover bg-center opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                
                <div className="service-icon text-white mb-4 flex justify-center transition-all duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 relative">
                  {service.title}
                  <div className="w-16 h-0.5 bg-gray-300 mt-2 group-hover:bg-gray-900 transition-colors"></div>
                </h3>
                <p className="text-gray-200 relative">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black animate-section process-section relative">
        {/* Background pattern */}
        <div className="absolute inset-0 z-0 opacity-50">
          <div className="bg-[url('/assets/bk.jpg')] bg-cover bg-center absolute inset-0"></div>
          <div className="absolute inset-0 backdrop-blur-sm "></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="w-20 h-1 bg-gray-400 mx-auto mb-6"></div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Co-Packing Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A streamlined approach ensuring quality, efficiency, and brand consistency at every step.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((step, index) => (
                <div 
                  key={index}
                  className="process-card bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 opacity-0"
                >
                  <div className="text-3xl font-bold text-gray-900 mb-3">{step.number}.</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 container mx-auto animate-section relative">
        {/* Background texture */}
        <div className="absolute inset-0 z-0">
          <div className="bg-[url('https://images.unsplash.com/photo-1603739903239-8b6e64c3b185?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center absolute inset-0 opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white"></div>
        </div>
        
        <div className="relative z-10">
          <div className="text-center mb-16">
            <div className="w-20 h-1 bg-gray-400 mx-auto mb-6"></div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Co-Packing?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Partner with a co-packer that understands the premium spirits market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                {[
                  { 
                    title: "Premium Craftsmanship", 
                    description: "Our team brings distilling expertise to every project, ensuring your product meets the highest standards." 
                  },
                  { 
                    title: "Regulatory Expertise", 
                    description: "Navigate complex alcohol regulations with our experienced compliance team." 
                  },
                  { 
                    title: "Flexible Production", 
                    description: "From 100 cases to 100,000 cases, we scale to meet your production needs." 
                  },
                  { 
                    title: "Eco-Conscious Operations", 
                    description: "Sustainable practices that reduce environmental impact without compromising quality." 
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start p-5 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 border border-gray-200 shadow-lg max-w-lg w-full relative overflow-hidden">
                {/* Background image */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600857062241-98c0b05794ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')] bg-cover bg-center opacity-10"></div>
                
                <div className="relative z-10">
                  <div className="text-5xl text-gray-400 mb-4">"</div>
                  <p className="text-gray-700 text-lg italic mb-6">
                    Toronto Distillery Group elevated our brand with precision bottling and exceptional attention to detail. 
                    Their co-packing services allowed us to scale efficiently while maintaining our craft quality.
                  </p>
                  <div className="flex items-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                    <div className="ml-4">
                      <div className="font-bold text-gray-900">Sarah Johnson</div>
                      <div className="text-gray-600">Founder, Heritage Spirits Co.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 animate-section relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <div className="bg-[url('https://images.unsplash.com/photo-1603739903239-8b6e64c3b185?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center absolute inset-0 opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 to-black/95"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Scale Your Spirits Brand?
            </h2>
            <p className="text-gray-300 text-xl mb-10 max-w-xl mx-auto">
              Partner with us for premium co-packing services that bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-gray-900 py-3 px-8 font-medium text-lg rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
                Request a Quote
              </button>
              <button className="border border-white text-white py-3 px-8 font-medium text-lg rounded-lg hover:bg-white/10 transition-all">
                Schedule Consultation
              </button>
            </div>
            <div className="mt-10 text-gray-400 text-sm">
              <p>Response within 24 hours • No-obligation consultation</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoPackingServices;