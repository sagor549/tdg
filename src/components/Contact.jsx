import React from 'react';
import { Instagram } from 'lucide-react'; // Added Instagram import

const Contact = () => {
  const accentColor = 'rgb(100, 200, 255)'
  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden bottom-24">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-900/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair tracking-tight"
            style={{ color: accentColor }}
          >
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-6"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="bg-gradient-to-br from-blue-900/30 to-black/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-blue-800/30 shadow-xl">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">
                Get in Touch
              </h3>
              <p className="text-blue-200 mb-6 text-lg">
                GOAT Vodka™ is a premium vodka that is taking the world by storm. 
                If you are looking to sell GOAT Vodka in your establishment please 
                visit our distribution partners. If you have any other questions 
                simply reach out to us!
              </p>
              <p className="text-blue-200 italic">
                Thank you for your interest in GOAT Vodka™.
              </p>
            </div>
            
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start">
                <div className="bg-blue-900/50 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-300 mb-1">Email</h4>
                  <a 
                    href="mailto:info@goatvodka.ca" 
                    className="text-blue-200 hover:text-blue-400 transition-colors"
                  >
                   info@goatvodka.ca
                  </a>
                </div>
              </div>
              
              {/* Instagram - Added this section */}
              <div className="flex items-start">
                <div className="bg-blue-900/50 p-3 rounded-lg mr-4">
                  <Instagram 
                    className="h-6 w-6 text-blue-400" 
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-300 mb-1">Instagram</h4>
                  <a 
                    href="https://www.instagram.com/g.o.a.t.vodka?igsh=MTFhZ3AzemJobGZmNA%3D%3D" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-blue-400 transition-colors"
                  >
                    @g.o.a.t.vodka
                  </a>
                </div>
              </div>
              
            </div>
          </div>
          
          {/* Vodka Bottle Image */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Floating bottle with shadow */}
              <div className="relative z-10">
                <img 
                  src="/assets/pic10.png" 
                  alt="GOAT Vodka Bottle"
                  className="w-full max-w-md mx-auto transform transition-all duration-500 hover:scale-105"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400/10 rounded-full z-0"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-blue-400/10 rounded-full z-0"></div>
              
              {/* Glow effect */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-64 bg-blue-400/20 rounded-full blur-2xl z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;