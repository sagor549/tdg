import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import logo from "/assets/logo1.png";

const Header = ({ currentPage, setCurrentPage, onHeightChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHover, setActiveHover] = useState(null);
  const headerRef = useRef(null);

  // Import Google Fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&family=Montserrat:wght@300;400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const navigation = [
    { name: 'HOME', page: 'home' },
    { name: 'ABOUT', page: 'home', scrollTo: 'about' },
    { name: 'COCKTAILS', page: 'home', scrollTo: 'cocktails' },
    { name: 'MEDIA', page: 'media' },
    { name: 'BLOG', page: 'blog' },
    { name: 'CONTACT', page: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Report height changes to parent
  useEffect(() => {
    if (headerRef.current && onHeightChange) {
      const updateHeight = () => {
        onHeightChange(headerRef.current.clientHeight);
      };
      
      updateHeight();
      window.addEventListener('resize', updateHeight);
      return () => window.removeEventListener('resize', updateHeight);
    }
  }, [scrolled, mobileMenuOpen, onHeightChange]);

  const handleNavClick = (nav) => {
    if (nav.scrollTo && nav.page === 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(nav.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      setCurrentPage(nav.page);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      ref={headerRef}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-md py-2 border-b border-indigo-800/30 h-20' 
          : 'bg-gradient-to-b from-black via-black/90 to-transparent py-4 h-28'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="relative">
              <img 
                src={logo} 
                alt="GOAT Vodka" 
                className={`transition-all duration-500 ${
                  scrolled ? 'w-16 h-16' : 'w-20 h-20'
                }`}
              />
              <div className="absolute inset-0 rounded-full border-2 border-indigo-500 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-pulse"></div>
            </div>
            <div className="ml-3">
              <h1 
                className={`font-serif font-bold transition-all duration-500 ${
                  scrolled ? 'text-xl' : 'text-2xl'
                }`}
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  color: "#272162",
                  WebkitBackgroundClip: 'text',
                  
                }}
              >
                GOAT
              </h1>
              <p 
                className={`uppercase tracking-widest transition-all duration-500 ${
                  scrolled ? 'text-[10px]' : 'text-xs'
                }`}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  color: '#272162',
                  letterSpacing: '0.3em'
                }}
              >
                VODKA
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((nav) => (
              <button
                key={nav.name}
                onClick={() => handleNavClick(nav)}
                onMouseEnter={() => setActiveHover(nav.name)}
                onMouseLeave={() => setActiveHover(null)}
                className={`relative py-2 text-sm transition-all duration-300 ${
                  currentPage === nav.page
                    ? 'text-indigo-400'
                    : 'text-white'
                }`}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 500,
                  letterSpacing: '0.05em'
                }}
              >
                {nav.name}
                <span 
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-300 to-indigo-500 transition-all duration-500 ${
                    activeHover === nav.name || currentPage === nav.page 
                      ? 'w-full' 
                      : 'w-0'
                  }`}
                ></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full transition-colors relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            
          >
            {mobileMenuOpen ? (
              <X size={28} className="text-white" />
            ) : (
              <img 
                src="/assets/menu.png" 
                alt="Menu" 
                className="w-22 h-12"
              />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
          style={{
            background: 'rgba(20, 20, 20, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: '0.75rem',
            border: '1px solid rgba(79, 70, 229, 0.2)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
          }}
        >
          <nav className="pb-6">
            <div className="flex flex-col space-y-2">
              {navigation.map((nav) => (
                <button
                  key={nav.name}
                  onClick={() => handleNavClick(nav)}
                  className={`text-left py-4 px-6 transition-all duration-300 relative overflow-hidden ${
                    currentPage === nav.page
                      ? 'text-indigo-400'
                      : 'text-white'
                  }`}
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 500
                  }}
                >
                  {nav.name}
                  {currentPage === nav.page && (
                    <span className="absolute top-1/2 right-6 transform -translate-y-1/2 w-2 h-2 rounded-full bg-indigo-400"></span>
                  )}
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-700 to-transparent"></div>
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;