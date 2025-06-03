import React from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black pt-16 pb-8 border-t border-amber-800/30">
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
              <p className="text-amber-200 text-lg max-w-md text-center md:text-left">
                The undisputed champion of premium vodkas. Distilled for those who refuse to settle for silver.
              </p>
            </div>
          </div>
          
          {/* Contact column */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-amber-400 mb-6 pb-2 border-b border-amber-800/40 inline-block">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:Akravtz@gmail.com" 
                  className="text-amber-200 hover:text-amber-400 transition-colors flex items-center justify-center md:justify-start"
                >
                  <Mail size={20} className="mr-3 text-amber-500" />
                  Akravtz@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+19059553119" 
                  className="text-amber-200 hover:text-amber-400 transition-colors flex items-center justify-center md:justify-start"
                >
                  <Phone size={20} className="mr-3 text-amber-500" />
                  +1 905 955 3119
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social column */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-amber-400 mb-6 pb-2 border-b border-amber-800/40 inline-block">
              Follow The GOAT
            </h3>
            <div className="flex flex-col space-y-4">
              <a 
                href="https://instagram.com/goatvodka" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center md:justify-start"
              >
                <div className="w-10 h-10 rounded-full bg-amber-900/50 flex items-center justify-center group-hover:bg-amber-800 transition-all mr-3">
                  <Instagram size={20} className="text-amber-400 group-hover:text-amber-300" />
                </div>
                <span className="text-amber-200 group-hover:text-amber-400 transition-colors">
                  @goatvodka
                </span>
              </a>
              
              <div className="mt-4">
                <p className="text-amber-500 text-sm">
                  Distilled and bottled by Premium Distillery Group
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-800/50 to-transparent my-8"></div>
        
        {/* Copyright section */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          <div className="text-center md:text-left mt-6 md:mt-0">
            <p className="text-gray-500 text-sm">
              Copyright © 2024. GOAT Vodka™ • All Rights Reserved
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-amber-600 text-sm italic">
              Please drink responsibly. Must be 21+ to consume alcohol.
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden h-16 pointer-events-none">
          <div className="absolute bottom-10 left-1/4 w-48 h-48 bg-amber-400/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-5 right-1/3 w-32 h-32 bg-amber-600/5 rounded-full blur-xl"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;