// src/pages/Contact.jsx
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Contact = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Initialize animations
    gsap.fromTo('.contact-header', 
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.contact-header',
          start: "top 80%",
          toggleActions: "play none none none",
        }
      }
    );

    gsap.fromTo('.contact-info', 
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.contact-info',
          start: "top 85%",
          toggleActions: "play none none none",
        },
        stagger: 0.2
      }
    );
  }, []);

  return (
    <div id='contact' className="min-h-screen relative">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="fixed inset-0 bg-[url('/assets/contact.png')] bg-cover bg-center bg-fixed z-0"
        style={{ backgroundAttachment: 'fixed' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/100"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-30 pb-0 px-4 container mx-auto text-center">
          <div className="max-w-3xl mx-auto contact-header opacity-0">
            <div className="inline-block bg-transparent backdrop-blur-sm text-gray-200 py-2 px-6 rounded-full text-sm font-medium tracking-wide mb-6 border border-gray-700">
              GET IN TOUCH
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Connect With Us
            </h1>
            <div className=" backdrop-blur-sm rounded-2xl p-10 border border-gray-700 shadow-lg transition-all duration-300 hover:shadow-xl">
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Reach out for inquiries, collaborations, or to learn more about our premium co-packing and brand creation services.
            </p>
            </div>
            
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-10 px-4 container mx-auto">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Email */}
            <div className="contact-info opacity-0 backdrop-blur-sm rounded-2xl p-10 border border-gray-700 shadow-lg transition-all duration-300 hover:shadow-xl" >
              <div className="flex justify-center mb-6">
                <div className="bg-gray-900 p-4 rounded-xl border border-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Email</h3>
              <p className="text-gray-400 mb-2 text-center">For inquiries and partnerships</p>
              <div className="mt-6">
                <a 
                  href="mailto:contact@premiumspirits.com" 
                  className="text-xl text-white font-medium hover:text-gray-300 transition-colors flex justify-center items-center"
                >
                  contact@premiumspirits.com
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="contact-info opacity-0 backdrop-blur-sm rounded-2xl p-10 border border-gray-700 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="flex justify-center mb-6">
                <div className="bg-gray-900 p-4 rounded-xl border border-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="1.5"/>
                    <circle cx="12" cy="12" r="4" strokeWidth="1.5"/>
                    <circle cx="18" cy="6" r="1" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Instagram</h3>
              <p className="text-gray-400 mb-2 text-center">Follow our journey</p>
              <div className="mt-6">
                <a 
                  href="https://instagram.com/premiumspirits" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl text-white font-medium hover:text-gray-300 transition-colors flex justify-center items-center"
                >
                  @premiumspirits
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Contact Info */}
        <section className="py-0 px-4 container mx-auto">
          <div className="max-w-4xl mx-auto backdrop-blur-sm rounded-2xl p-10 border border-gray-700 shadow-lg">
            <div className="text-center mb-10">
              <div className="w-24 h-0.5 bg-gray-600 mx-auto mb-6 rounded-full"></div>
              <h2 className="text-3xl font-bold text-white mb-4">Office Information</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our team is available to discuss your project needs and answer any questions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { 
                  title: "Location", 
                  content: "123 Distillery Lane, Spiritsville, SV 12345",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )
                },
                { 
                  title: "Hours", 
                  content: "Mon-Fri: 9AM - 5PM",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                { 
                  title: "Phone", 
                  content: "(555) 123-4567",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  )
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start p-5 bg-gray-900/50 rounded-xl border border-gray-700"
                >
                  <div className="flex-shrink-0 mt-1 mr-4 text-gray-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-400">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className='max-w-4xl mx-auto block md:hidden rounded-2xl p-20 border border-gray-700 shadow-lg'>

      </div>
      
    </div>
  );
};

export default Contact;