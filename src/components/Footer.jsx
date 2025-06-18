// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/assets/logo.png'; // Make sure this path is correct

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and brand section */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src={logo} 
                alt="Toronto Distillery Group" 
                className="h-12 mr-3"
              />
              <h3 className="text-xl font-bold text-white">Toronto Distillery Group</h3>
            </div>
            <p className="text-white/70 max-w-xs">
              Distilled in Toronto. Poured Worldwide. Crafting exceptional spirits through innovative brand creation and precision co-packing.
            </p>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h4 className="text-white text-base font-semibold mb-4 tracking-wider">NAVIGATION</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-white/70 hover:text-white transition-colors block">Home</Link></li>
              <li><Link to="/alcohol-brand-creation" className="text-white/70 hover:text-white transition-colors block">Brand Creation</Link></li>
              <li><Link to="/co-packing-services" className="text-white/70 hover:text-white transition-colors block">Co-Packing</Link></li>
              <li><Link to="/products" className="text-white/70 hover:text-white transition-colors block">Our Products</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-white transition-colors block">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="text-white text-base font-semibold mb-4 tracking-wider">CONTACT</h4>
            <address className="not-italic">
              <p className="text-white/70 mb-2">123 Distillery Lane</p>
              <p className="text-white/70 mb-2">Toronto, ON M5A 3K7</p>
              <p className="text-white/70 mb-2">Canada</p>
              <a href="mailto:info@torontodistillerygroup.com" className="text-white/70 hover:text-white transition-colors block mb-2">
                info@torontodistillerygroup.com
              </a>
              <a href="tel:+14165551234" className="text-white/70 hover:text-white transition-colors block">
                +1 (416) 555-1234
              </a>
            </address>
          </div>
          
          {/* Social Links */}
          <div>
            <h4 className="text-white text-base font-semibold mb-4 tracking-wider">FOLLOW US</h4>
            <div className="flex flex-col space-y-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 text-center">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Toronto Distillery Group. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-4 text-xs">
            <Link to="/privacy" className="text-white/50 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-white/50 hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="text-white/50 hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;