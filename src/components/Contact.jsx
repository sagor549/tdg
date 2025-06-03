// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden bottom-24">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-900/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-500 mb-4 font-serif tracking-tight">
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
                    href="mailto:akravtz@gmail.com" 
                    className="text-blue-200 hover:text-blue-400 transition-colors"
                  >
                    akravtz@gmail.com
                  </a>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-start">
                <div className="bg-blue-900/50 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-300 mb-1">Phone</h4>
                  <a 
                    href="tel:+19059553119" 
                    className="text-blue-200 hover:text-blue-400 transition-colors"
                  >
                    +1 (905) 955-3119
                  </a>
                </div>
              </div>
              
              {/* WhatsApp */}
              <div className="flex items-start">
                <div className="bg-blue-900/50 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-300 mb-1">WhatsApp</h4>
                  <p className="text-blue-200 mb-2">
                    For faster communication
                  </p>
                  <a 
                    href="https://wa.me/19059553119" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Message on WhatsApp
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