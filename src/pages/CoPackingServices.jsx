import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, useLocation } from 'react-router-dom';

const CoPackingServices = () => {
  const location = useLocation();

  // Reset scroll position on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
    
    // Refresh ScrollTrigger after initial render
    ScrollTrigger.refresh();
    
    // Cleanup ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const services = [
    {
      icon: "🥃",
      title: "Premium Bottling",
      description: "State-of-the-art bottling lines for spirits of all types and sizes with precision filling and capping."
    },
    {
      icon: "🏷️",
      title: "Custom Labeling",
      description: "High-quality labeling services with pressure-sensitive, shrink sleeve, and embossed options."
    },
    {
      icon: "🎁",
      title: "Packaging Design",
      description: "Creative solutions for boxes, cartons, and display units that showcase your brand."
    },
    {
      icon: "📦",
      title: "Warehousing",
      description: "Secure, temperature-controlled storage for your products before distribution."
    },
    {
      icon: "🚚",
      title: "Distribution",
      description: "Efficient logistics network for local, national, and international distribution."
    },
    {
      icon: "🔍",
      title: "Quality Assurance",
      description: "Rigorous quality control at every stage to ensure product integrity and compliance."
    }
  ];

  const processSteps = [
    { icon: "💬", title: "Consultation", description: "We discuss your requirements and goals" },
    { icon: "📝", title: "Planning", description: "We develop a tailored co-packing solution" },
    { icon: "🏭", title: "Production", description: "Your products are manufactured to spec" },
    { icon: "📦", title: "Packaging", description: "Premium packaging and labeling applied" },
    { icon: "✈️", title: "Distribution", description: "Products shipped to your destinations" },
    { icon: "🤝", title: "Support", description: "Ongoing partnership for your success" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 container mx-auto text-center animate-section relative">
        <div className="absolute inset-0 z-0">
          <div className="bg-[url('/assets/hero.png')] bg-cover bg-center absolute inset-0 opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/0 to-black backdrop-blur-xs"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-block bg-transparent backdrop-blur-sm text-gray-200 py-2 px-6 rounded-full text-sm font-medium tracking-wide mb-6 border border-gray-700">
            PREMIUM CO-PACKING SOLUTIONS
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Crafted to Perfection, <br className="hidden md:block" /> Bottled for Distinction
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
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
                className="bg-trasparent/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 container mx-auto services-section animate-section relative">
        <div className="absolute inset-0 z-0">
          <div className="bg-[url('/assets/water.png')] absolute inset-0 opacity-40"></div>
          <div className="absolute inset-0 backdrop-blur-xs "></div>
        </div>
        
        <div className="relative z-10">
          <div className="text-center mb-16">
            <div className="w-24 h-0.5 bg-transparent mx-auto mb-6 rounded-full"></div>
            <h2 className="text-5xl font-bold text-white mb-4">Our Co-Packing Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Comprehensive solutions tailored to meet the unique needs of craft and commercial spirits brands.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="backdrop-blur-xs rounded-2xl p-8 border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              >
                <div className="service-icon mb-6 flex justify-center">
                  <div className="text-5xl bg-gray-950 p-4 rounded-xl border border-gray-700 shadow-md transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative">
                  {service.title}
                  <div className="w-16 h-0.5 bg-gray-400 mt-3 rounded-full"></div>
                </h3>
                <p className="text-gray-300 relative">{service.description}</p>
              </div>
            ))}
          </div>
          
          {/* Process Section */}
          <div className="container mx-auto px-4 py-20 relative z-10 process-section">
            <div className="text-center mb-16">
              <div className="w-24 h-0.5 bg-transparent mx-auto mb-6 rounded-full"></div>
              <h2 className="text-5xl font-bold text-white mb-4">Our Seamless Process</h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                A streamlined approach ensuring quality, efficiency, and brand consistency at every step.
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {processSteps.map((step, index) => (
                  <div 
                    key={index}
                    className="process-card backdrop-blur-lg rounded-2xl p-8 border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 opacity-0"
                  >
                    <div className="flex items-center mb-5">
                      <div className="text-2xl bg-gray-950 p-3 rounded-xl border border-gray-700 mr-4">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Benefits Section */}
          <div className="relative z-10">
            <div className="text-center mb-16">
              <div className="w-24 h-0.5 mx-auto mb-6 rounded-full"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Why Distilleries Choose Us</h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Partner with a co-packer that understands the premium spirits market.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    { 
                      icon: "🛠️",
                      title: "Premium Craftsmanship", 
                      description: "Our team brings distilling expertise to every project, ensuring your product meets the highest standards." 
                    },
                    { 
                      icon: "📜",
                      title: "Regulatory Expertise", 
                      description: "Navigate complex alcohol regulations with our experienced compliance team." 
                    },
                    { 
                      icon: "⚙️",
                      title: "Flexible Production", 
                      description: "From 100 cases to 100,000 cases, we scale to meet your production needs." 
                    },
                    { 
                      icon: "🌱",
                      title: "Eco-Conscious Operations", 
                      description: "Sustainable practices that reduce environmental impact without compromising quality." 
                    }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-start p-6 bg-transparent backdrop-blur-3xl rounded-2xl border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex-shrink-0 mt-1 mr-5 text-3xl">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 animate-section relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="bg-[url('/assets/contact.png')] bg-cover bg-center absolute inset-0 opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 to-black/95"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds.png')] opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-950 text-gray-200 py-2 px-6 rounded-full text-sm font-medium tracking-wide mb-6 inline-block border border-gray-700">
              READY TO ELEVATE YOUR BRAND?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Let's Craft Something <br className="hidden md:block" /> Extraordinary Together
            </h2>
            <p className="text-gray-300 text-xl mb-10 max-w-xl mx-auto">
              Partner with us for premium co-packing services that bring your vision to life.
            </p>
            
            <div className="mt-10">
              <Link
                to="/contact"
                className="bg-white text-gray-900 hover:bg-gray-100 font-bold py-4 px-12 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-block"
                onClick={() => window.scrollTo(0, 0)}
              >
                Contact Us Today
              </Link>
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