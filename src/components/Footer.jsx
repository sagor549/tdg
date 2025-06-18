// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-0 md:py-10 font-poppins">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand section */}
          <div className="md:col-span-1">
            <div className="flex flex-col">
              <div className="flex items-center mb-6">
                <img 
                  src={logo} 
                  alt="Toronto Distillery Group" 
                  className="h-16 mr-3"
                />
                <h3 className="text-2xl font-bold text-white tracking-wide">TORONTO<br/>DISTILLERY GROUP</h3>
              </div>
              <p className="text-white/80 text-lg mb-6 max-w-md leading-relaxed">
                Distilled in Toronto. Poured Worldwide. Crafting exceptional spirits through innovative brand creation and precision co-packing.
              </p>
              <div className="flex space-x-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-amber-400 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-amber-400 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-amber-400 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-amber-400 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="md:col-span-1">
            <h4 className="text-white text-xl font-semibold mb-6 tracking-wider border-b border-amber-500 pb-2 inline-block">
              CONTACT US
            </h4>
            <address className="not-italic text-white/80">
              <p className="mb-3 flex items-start">
                <i className="fas fa-map-marker-alt text-amber-500 mt-1 mr-3"></i>
                <span>
                  123 Distillery Lane<br/>
                  Toronto, ON M5A 3K7<br/>
                  Canada
                </span>
              </p>
              <p className="mb-3 flex items-center">
                <i className="fas fa-envelope text-amber-500 mr-3"></i>
                <a href="mailto:info@torontodistillerygroup.com" className="hover:text-amber-400 transition-colors">
                  info@torontodistillerygroup.com
                </a>
              </p>
              <p className="mb-3 flex items-center">
                <i className="fas fa-phone text-amber-500 mr-3"></i>
                <a href="tel:+14165551234" className="hover:text-amber-400 transition-colors">
                  +1 (416) 555-1234
                </a>
              </p>
              <p className="mb-3 flex items-center">
                <i className="fas fa-clock text-amber-500 mr-3"></i>
                <span>Mon-Fri: 9AM - 5PM EST</span>
              </p>
            </address>
          </div>
          
          
         
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm order-2 md:order-1 mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} Toronto Distillery Group. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm order-1 md:order-2">
            <Link to="/privacy" className="text-white/60 hover:text-amber-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-white/60 hover:text-amber-400 transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="text-white/60 hover:text-amber-400 transition-colors">Sitemap</Link>
            <Link to="/contact" className="text-white/60 hover:text-amber-400 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;