// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gold/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-playfair font-bold text-gold mb-4">Toronto Distillery Group</h3>
            <p className="text-muted">Distilled in Toronto. Poured Worldwide.</p>
          </div>
          
          <div>
            <h4 className="text-light text-lg mb-4">Contact</h4>
            <p className="text-muted">Email: info@torontodistillerygroup.com</p>
            <p className="text-muted">Phone: +1 (416) 555-1234</p>
          </div>
          
          <div>
            <h4 className="text-light text-lg mb-4">Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted hover:text-gold transition">Home</Link></li>
              <li><Link to="/alcohol-brand-creation" className="text-muted hover:text-gold transition">Alcohol Brand Creation</Link></li>
              <li><Link to="/co-packing-services" className="text-muted hover:text-gold transition">Co-Packing Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-light text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted hover:text-gold transition">Instagram</a>
              <a href="#" className="text-muted hover:text-gold transition">Twitter</a>
              <a href="#" className="text-muted hover:text-gold transition">Facebook</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gold/10 mt-8 pt-8 text-center text-muted text-sm">
          &copy; {new Date().getFullYear()} Toronto Distillery Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;