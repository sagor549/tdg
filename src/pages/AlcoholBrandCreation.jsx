import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, useLocation } from 'react-router-dom';

const AlcoholBrandCreation = () => {
  const location = useLocation();

  // Reset scroll position on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Initialize animations
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

    // Animate feature icons
    gsap.fromTo('.feature-icon', 
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: '.features-section',
          start: "top 80%",
          toggleActions: "play none none none",
        },
        stagger: 0.2
      }
    );
    
    // Refresh ScrollTrigger after initial render
    ScrollTrigger.refresh();
    
    // Cleanup ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4  mx-auto text-center animate-section relative">
        <div className="absolute inset-0 z-0">
          <div className="bg-[url('/assets/wb.png')] bg-cover bg-center absolute inset-0 opacity-100"></div>
          <div className="absolute inset-0  "></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-block bg-transparent backdrop-blur-sm text-gray-200 py-2 px-6 rounded-full text-sm font-medium tracking-wide mb-6 border border-gray-700">
            PREMIUM BRAND CREATION
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Craft Your Vision, <br className="hidden md:block" /> Bottle Your Legacy
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Transform your spirit vision into a premium brand with expert formulation, 
            distinctive packaging, and go-to-market strategy.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            {[
              { value: "200+", label: "Brands Launched" },
              { value: "360°", label: "End-to-End Solutions" },
              { value: "100%", label: "Regulatory Compliance" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-transparent/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creation Process Section */}
      <section className="py-20 px-4  mx-auto animate-section relative w-full">
        <div className="absolute inset-0 z-0">
         <video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover opacity-100 z-0"
>
  <source src="/assets/bgvid.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
<div className="absolute inset-0  backdrop-blur-2xl"></div>

         
        </div>
        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className=' rounded-2xl p-10 border border-gray-700 shadow-lg'>
              <div className="mb-8">
             
                <h2 className="text-3xl font-bold text-black mb-6">Craft Your Unique Spirit</h2>
              </div>
              <p className="text-gray-900 mb-4 leading-relaxed text-lg">
                Our studio helps entrepreneurs and established brands develop exceptional spirits 
                from concept to shelf with state-of-the-art facilities and expert distillers.
              </p>
              <p className="text-gray-900 text-lg mb-8 leading-relaxed">
                We provide end-to-end solutions including recipe development, regulatory compliance, 
                packaging design, and distribution strategy.
              </p>
            </div>
            
            {/* Process Section */}
            <div className="relative process-section">
              <div className="backdrop-blur-lg rounded-2xl p-10 border border-gray-700 shadow-lg">
                <div className="mb-8">
                  
                  <h3 className="text-2xl font-bold text-black mb-4">Our Creation Process</h3>
                </div>
                
                <div className="space-y-8">
                  {[
                    { step: "", title: "Vision & Concept", desc: "Refine your brand vision", icon: "💡" },
                    { step: "", title: "Recipe Formulation", desc: "Create unique flavor profiles", icon: "🧪" },
                    { step: "", title: "Prototype Creation", desc: "Develop initial samples", icon: "⚗️" },
                    { step: "", title: "Production Scaling", desc: "Full-scale manufacturing", icon: "🏭" },
                    { step: "", title: "Go-to-Market", desc: "Distribution and launch", icon: "🚀" }
                  ].map((item, index) => (
                    <div key={index} className="process-card flex items-start group opacity-0">
                      <div className="backdrop-blur-3xl border border-gray-700 rounded-lg w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0 shadow-sm">
                        <span className="text-xl">{item.icon}</span>
                      </div>
                      <div>
                        <div className="text-xs text-black font-semibold tracking-wider mb-1">{item.step}</div>
                        <h4 className="font-bold text-black text-lg mb-1">{item.title}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Features Section */}
          <div className="container mx-auto px-4 relative z-10 mt-24 features-section">
            <div className="text-center mb-16">
              <div className="w-24 h-0.5 bg-transparent mx-auto mb-6 rounded-full"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Comprehensive Brand Solutions</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { icon: "🧪", title: "Expert Formulation", description: "Create unique flavor profiles" },
                { icon: "📜", title: "Regulatory Compliance", description: "Full TTB and state compliance" },
                { icon: "🎨", title: "Brand Identity", description: "Distinctive logo and story" },
                { icon: "📦", title: "Premium Packaging", description: "Bottle and label design" },
                { icon: "📊", title: "Market Strategy", description: "Pricing and distribution" },
                { icon: "🏭", title: "Production Scaling", description: "Small batches to full production" },
                { icon: "🌐", title: "Digital Presence", description: "Website and social media" },
                { icon: "🤝", title: "Ongoing Support", description: "Continuous brand evolution" }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-lg transition-all duration-300"
                >
                  <div className="feature-icon mb-6 flex justify-center">
                    <div className="text-4xl  p-4 rounded-xl border border-gray-700 shadow-md">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4 text-center">{feature.title}</h3>
                  <p className="text-gray-700 text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 animate-section relative overflow-hidden">
        <div className="bg-[url('/assets/brand.png')] absolute inset-0 opacity-100"></div>
        <div className="absolute inset-0 backdrop-blur-sm "></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-950 text-gray-200 py-2 px-6 rounded-full text-sm font-medium tracking-wide mb-6 inline-block border border-gray-700">
              READY TO CREATE YOUR BRAND?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Let's Craft Your Signature Spirit
            </h2>
            <div className="mt-10">
              <Link 
                to="/contact" 
                className="bg-white text-gray-900 hover:bg-gray-100 font-bold py-4 px-12 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.scrollTo(0, 0)}
              >
                Start Your Journey
              </Link>
            </div>
            <div className="mt-10 text-gray-400 text-sm">
              <p>Response within 24 hours • Confidential consultation</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlcoholBrandCreation;