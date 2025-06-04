import React from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';

// Theme colors
const primaryColor = 'rgb(34, 32, 87)';
const primaryLight = 'rgb(54, 52, 107)';
const accentColor = 'rgb(100, 200, 255)';
const textPrimary = 'rgb(250, 250, 255)';
const textSecondary = 'rgba(250, 250, 255, 0.7)';

const Footer = () => {
  return (
    <footer 
      className="pt-16 pb-8 bg-black"
      style={{ 
        borderTop: '1px solid rgba(100, 200, 255, 0.2)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex flex-col items-center md:items-start">
              <img 
                src="/assets/logo.png" 
                alt="GOAT Vodka" 
                className="w-28 h-28 mb-6 filter brightness-125"
              />
              <p 
                className="text-lg max-w-md text-center md:text-left"
                style={{ color: textSecondary }}
              >
                The undisputed champion of premium vodkas. Distilled for those who refuse to settle for silver.
              </p>
            </div>
          </div>
          
          {/* Contact column */}
          <div className="text-center md:text-left">
            <h3 
              className="text-xl font-bold mb-6 pb-2 inline-block"
              style={{ 
                color: accentColor,
                borderBottom: '1px solid rgba(100, 200, 255, 0.2)'
              }}
            >
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:info@goatvodka.ca" 
                  className="hover:text-indigo-400 transition-colors flex items-center justify-center md:justify-start"
                  style={{ color: textSecondary }}
                >
                  <div className="flex items-center">
                    <Mail 
                      size={40} 
                      style={{ color: accentColor }} 
                      className="mr-3" 
                    />
                    <span>info@goatvodka.ca</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social column */}
          <div className="text-center md:text-left">
            <h3 
              className="text-xl font-bold mb-6 pb-2 inline-block"
              style={{ 
                color: accentColor,
                borderBottom: '1px solid rgba(100, 200, 255, 0.2)'
              }}
            >
              Follow The GOAT
            </h3>
            <div className="flex flex-col space-y-4">
              <a 
                href="https://www.instagram.com/g.o.a.t.vodka?igsh=MTFhZ3AzemJobGZmNA%3D%3D" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center md:justify-start"
              >
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center mr-3 transition-all"
                  style={{ 
                    backgroundColor: 'rgba(100, 200, 255, 0.1)',
                    border: '1px solid rgba(100, 200, 255, 0.2)'
                  }}
                >
                  <Instagram 
                    size={30} 
                    className="group-hover:text-indigo-300 transition-colors"
                    style={{ color: accentColor }}
                  />
                </div>
                <span 
                  className="group-hover:text-indigo-400 transition-colors"
                  style={{ color: textSecondary }}
                >
                  @g.o.a.t.vodka
                </span>
              </a>
              
              <div className="mt-4">
                <a
                  href="https://torontodistillery.group/"
                  className="text-sm"
                  style={{ color: accentColor }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Distilled and bottled by Toronto Distillery Group
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div 
          className="w-full h-px my-8"
          style={{ background: 'linear-gradient(to right, transparent, rgba(100, 200, 255, 0.3), transparent)' }}
        ></div>
        
        {/* Copyright section */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          <div className="text-center md:text-left mt-6 md:mt-0">
            <p className="text-sm" style={{ color: 'rgba(250, 250, 255, 0.5)' }}>
              Copyright © 2024. GOAT Vodka™ • All Rights Reserved
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-sm italic" style={{ color: accentColor }}>
              Please drink responsibly. Must be 21+ to consume alcohol.
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden h-16 pointer-events-none">
          <div 
            className="absolute bottom-10 left-1/4 w-48 h-48 rounded-full blur-xl"
            style={{ backgroundColor: 'rgba(100, 200, 255, 0.05)' }}
          ></div>
          <div 
            className="absolute bottom-5 right-1/3 w-32 h-32 rounded-full blur-xl"
            style={{ backgroundColor: 'rgba(100, 200, 255, 0.05)' }}
          ></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;