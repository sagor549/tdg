import { useMotionValue, motion, useSpring, useTransform, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiArrowRight } from "react-icons/fi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkIfDesktop);
    checkIfDesktop();

    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkIfDesktop);
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { 
        state: { scrollTo: sectionId },
        replace: true
      });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMenuOpen(false);
  };

  const navLinks = [
    { 
      id: 'hero',
      title: 'Home',
      href: '/',
      imgSrc: '/assets/media4.png',
      subheading: 'Back to the beginning'
    },
    { 
      id: 'product-section',
      title: 'Our   Spirits',
      action: () => scrollToSection('product-section'),
      imgSrc: '/assets/bk4.jpg',
      subheading: 'Discover our collection'
    },
    { 
      id: 'brand',
      title: 'Brand Creation',
      href: '/alcohol-brand-creation',
      imgSrc: '/assets/raw.jpg',
      subheading: 'Craft your signature brand'
    },
    { 
      id: 'copacking',
      title: 'Co-Packing',
      href: '/co-packing-services',
      imgSrc: '/assets/go.jpg',
      subheading: 'Premium production services'
    },
    { 
      id: 'contact',
      title: 'Contact',
      href: '/contact',
      imgSrc: '/assets/bk3.jpg',
      subheading: 'Our commitment to community'
    }
  ];

  const AnimatedLink = ({ title, imgSrc, subheading, onClick }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
    const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

    const handleMouseMove = (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPct = mouseX / rect.width - 0.5;
      const yPct = mouseY / rect.height - 0.5;

      x.set(xPct);
      y.set(yPct);
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onClick={onClick}
        initial="initial"
        whileHover="whileHover"
        className="group relative flex items-center justify-between border-b border-gray-700 py-4 md:py-5 transition-colors duration-500 hover:border-gray-400 cursor-pointer"
      >
        <div>
          <span className="relative z-10 block text-xl md:text-2xl font-bold text-white transition-colors duration-500 group-hover:text-gray-200">
            {title}
          </span>
          <span className="relative z-10 mt-1 block text-xs md:text-sm text-gray-400 transition-colors duration-500 group-hover:text-gray-300">
            {subheading}
          </span>
        </div>

        <motion.img
          style={{
            top,
            left,
            translateX: "-50%",
            translateY: "-50%",
          }}
          variants={{
            initial: { scale: 0, rotate: "-12.5deg", opacity: 0 },
            whileHover: { scale: 1, rotate: "12.5deg", opacity: 1 },
          }}
          transition={{ type: "spring" }}
          src={imgSrc}
          className="absolute z-0 h-16 w-20 md:h-20 md:w-24 rounded-lg object-cover shadow-xl border border-gray-600 group-hover:border-gray-300"
          alt={`Image for ${title}`}
        />

        <motion.div
          variants={{
            initial: {
              x: "25%",
              opacity: 0,
            },
            whileHover: {
              x: "0%",
              opacity: 1,
            },
          }}
          transition={{ type: "spring" }}
          className="relative z-10 p-2"
        >
          <FiArrowRight className="text-xl text-gray-500 group-hover:text-white" />
        </motion.div>
      </motion.div>
    );
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-transparent py-4' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center relative bottom-5 md:bottom-0">
        <Link 
          to="/" 
          className={`z-50 transition-opacity duration-300 ${menuOpen && !isDesktop ? 'opacity-0' : 'opacity-100'}`}
          onClick={() => window.scrollTo(0, 0)}
        >
          <img 
            src="/assets/logo.png" 
            alt="TDG Logo" 
            className="md:w-32 w-20 transition-all duration-300"
          />
        </Link>

        <motion.button 
          className="relative z-50 w-30 h-30 flex items-center justify-center group"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.img
                key="close"
                src="/assets/x.png"
                alt="Close menu"
                className="w-17 h-16 relative bottom-0 md:bottom-5"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              />
            ) : (
              <motion.img
                key="menu"
                src="/assets/hem.png"
                alt="Open menu"
                className="w-23 h-16"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            ref={menuRef}
            initial={{ 
              opacity: 0,
              x: isDesktop ? '100%' : 0,
              y: isDesktop ? 0 : '100%',
              scale: isDesktop ? 0.95 : 1
            }}
            animate={{ 
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1
            }}
            exit={{ 
              opacity: 0,
              x: isDesktop ? '100%' : 0,
              y: isDesktop ? 0 : '100%',
              scale: isDesktop ? 0.95 : 1
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`fixed inset-0 z-40 flex flex-col ${isDesktop ? 'left-auto w-[40%]' : ''}`}
            style={{
              background: `
                linear-gradient(rgba(5, 5, 10, 0.98), rgba(5, 5, 10, 0.98)),
                url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")
              `,
              backgroundSize: 'cover'
            }}
          >
            <div className="flex-grow overflow-y-auto p-4 md:p-6">
              <div className={`mx-auto ${isDesktop ? 'max-w-md' : 'max-w-3xl pt-12'}`}>
                <div className="mb-6 pb-6 border-b border-gray-700">
                  <div className="flex items-center space-x-3">
                    <img 
                      src="/assets/logo.png" 
                      alt="TDG Logo" 
                      className="h-14 w-14"
                    />
                    <div>
                      <h2 className="text-white text-xl font-bold">TDG</h2>
                      <p className="text-gray-500 text-xs">Premium Craft Distillery</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 md:space-y-3">
                  {navLinks.map((link) => (
                    <AnimatedLink
                      key={link.id}
                      title={link.title}
                      imgSrc={link.imgSrc}
                      subheading={link.subheading}
                      onClick={link.action || (() => {
                        navigate(link.href);
                        setMenuOpen(false);
                      })}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
