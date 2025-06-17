// src/pages/AlcoholBrandCreation.jsx
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AlcoholBrandCreation = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 container mx-auto text-center animate-section">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="block">Premium</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600">
              Brand Creation
            </span>
          </h1>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Transform your vision into a premium spirit brand with our expert guidance and 
            state-of-the-art production capabilities.
          </p>
          <div className="mt-12">
            <button className="bg-gray-900 text-white py-4 px-12 font-medium text-lg rounded-lg hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl">
              Start Your Brand Journey
            </button>
          </div>
        </div>
      </section>
      
      {/* Creation Process Section */}
      <section className="py-20 px-4 container mx-auto animate-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-1">
            <div className="mb-8">
              <div className="w-20 h-1 bg-gradient-to-r from-gray-800 to-gray-300 mb-4"></div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Craft Your Unique Spirit</h2>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our brand creation studio helps entrepreneurs, restaurateurs, and established brands develop 
              exceptional spirits from concept to shelf. With our state-of-the-art facilities and expert 
              distillers, we bring your vision to life.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Whether you're creating a small-batch artisanal product or a large-scale commercial brand, 
              we provide end-to-end solutions including recipe development, regulatory compliance, 
              packaging design, and distribution strategy.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              {[
                { 
                  title: "Custom Formulation", 
                  desc: "Create unique flavor profiles with master distillers",
                  icon: "🧪"
                },
                { 
                  title: "Regulatory Expertise", 
                  desc: "Navigate complex compliance requirements",
                  icon: "📋"
                },
                { 
                  title: "Brand Strategy", 
                  desc: "Develop compelling brand positioning",
                  icon: "📊"
                },
                { 
                  title: "Packaging Design", 
                  desc: "Create distinctive, shelf-ready packaging",
                  icon: "🎁"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="text-3xl mb-3 text-gray-800">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Glass Effect Process Section */}
          <div className="order-2 relative">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-10 border border-white/70 shadow-lg">
              <div className="mb-8">
                <div className="w-20 h-1 bg-gradient-to-r from-gray-500 to-gray-300 mb-4"></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Process</h3>
                <p className="text-gray-700">
                  Structured approach to ensure premium quality and market success
                </p>
              </div>
              
              <div className="space-y-8">
                {[
                  { step: "01", title: "Concept Development", desc: "Refine your vision and product positioning" },
                  { step: "02", title: "Recipe Formulation", desc: "Create unique flavor profiles with our experts" },
                  { step: "03", title: "Prototype Creation", desc: "Develop initial samples for testing" },
                  { step: "04", title: "Production Scaling", desc: "Transition to full-scale manufacturing" },
                  { step: "05", title: "Go-to-Market", desc: "Distribution strategy and launch execution" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="bg-white border border-gray-200 rounded-lg w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0 shadow-sm group-hover:shadow-md transition-all">
                      <span className="font-medium text-gray-800">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gray-900/10 backdrop-blur-sm border border-white/30 z-[-1]"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-gray-900/10 backdrop-blur-sm border border-white/30 z-[-1]"></div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-gray-100 animate-section border-t border-gray-200">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Launch Your Spirit Brand?
            </h2>
            <p className="text-gray-700 mb-10 text-lg max-w-xl mx-auto">
              Contact our brand creation team to schedule a consultation and begin your journey in the premium spirits market.
            </p>
            <div className="flex justify-center">
              <button className="bg-gray-900 text-white py-4 px-12 font-medium text-lg rounded-lg hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl">
                Start Your Brand Journey
              </button>
            </div>
            <div className="mt-10 text-gray-500 text-sm">
              <p>Schedule a 30-minute consultation with our brand specialists</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlcoholBrandCreation;