import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiArrowRight } from "react-icons/fi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkIfDesktop);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    if (location.pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMenuOpen(false);
  };

  // Navigation links data
  const navLinks = [
    { 
      id: 'home',
      title: 'Home',
      action: () => scrollToSection('hero'),
      href: '/',
      imgSrc: '/assets/media4.png',
      subheading: 'Back to the beginning'
    },
    { 
      id: 'spirits',
      title: 'Our Spirits',
      action: () => scrollToSection('spirits'),
      href: '/',
      imgSrc: '/assets/teq.png',
      subheading: 'Discover our collection'
    },
    { 
      id: 'brand',
      title: 'Brand Creation',
      href: '/alcohol-brand-creation',
      imgSrc: '/assets/orange.webp',
      subheading: 'Craft your signature brand'
    },
    { 
      id: 'copacking',
      title: 'Co-Packing',
      href: '/co-packing-services',
      imgSrc: '/assets/bottleg.png',
      subheading: 'Premium production services'
    },
    { 
      id: 'givesback',
      title: 'TDG Gives Back',
      action: () => scrollToSection('gives-back'),
      href: '/',
      imgSrc: '/assets/green.webp',
      subheading: 'Our commitment to community'
    }
  ];

  // Animated Link Component for Menu
  const AnimatedLink = ({ title, imgSrc, subheading, onClick }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
    const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

    const handleMouseMove = (e) => {
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
        className="group relative flex items-center justify-between border-b border-gray-700 py-4 md:py-6 transition-colors duration-500 hover:border-gray-400 cursor-pointer"
      >
        <div>
          <motion.span
            variants={{
              initial: { x: 0 },
              whileHover: { x: -16 },
            }}
            transition={{
              type: "spring",
              staggerChildren: 0.075,
              delayChildren: 0.25,
            }}
            className="relative z-10 block text-2xl md:text-4xl font-bold text-white transition-colors duration-500 group-hover:text-gray-200"
          >
            {title.split("").map((l, i) => (
              <motion.span
                variants={{
                  initial: { x: 0 },
                  whileHover: { x: 16 },
                }}
                transition={{ type: "spring" }}
                className="inline-block"
                key={i}
              >
                {l}
              </motion.span>
            ))}
          </motion.span>
          <span className="relative z-10 mt-1 md:mt-2 block text-sm md:text-base text-gray-400 transition-colors duration-500 group-hover:text-gray-300">
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
          className="absolute z-0 h-20 w-28 md:h-24 md:w-32 rounded-lg object-cover shadow-xl border border-gray-600 group-hover:border-gray-300"
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
          className="relative z-10 p-2 md:p-4"
        >
          <FiArrowRight className="text-xl md:text-3xl text-gray-500 group-hover:text-white" />
        </motion.div>
      </motion.div>
    );
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-transparent py-6' 
          : 'bg-transparent py-3'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className={`z-50 transition-opacity duration-300 ${
            menuOpen && !isDesktop ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <img 
            src="/assets/logo.png" 
            alt="TDG Logo" 
            className="md:w-32 w-20 transition-all duration-300"
          />
        </Link>
        
        {/* Animated Hamburger Menu - Increased size */}
        <motion.button 
          className="relative z-50 w-20 h-12 flex flex-col items-center justify-center group"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          animate={menuOpen ? "open" : "closed"}
        >
          <motion.span
            className="absolute w-8 h-0.5 bg-white rounded-full"
            variants={{
              closed: { rotate: 0, y: -8 },
              open: { rotate: 45, y: 0 },
            }}
          />
          <motion.span
            className="absolute w-8 h-0.5 bg-white rounded-full"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
          />
          <motion.span
            className="absolute w-8 h-0.5 bg-white rounded-full"
            variants={{
              closed: { rotate: 0, y: 8 },
              open: { rotate: -45, y: 0 },
            }}
          />
        </motion.button>
      </div>
      
      {/* Animated Menu */}
      {menuOpen && (
        <motion.div 
          initial={{ 
            opacity: 0,
            x: isDesktop ? '100%' : 0,
            scale: isDesktop ? 0.95 : 1
          }}
          animate={{ 
            opacity: 1,
            x: 0,
            scale: 1
          }}
          exit={{ 
            opacity: 0,
            x: isDesktop ? '100%' : 0,
            scale: isDesktop ? 0.95 : 1
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={`fixed inset-0 z-40 flex flex-col ${
            isDesktop ? 'left-auto w-[40%]' : ''
          }`}
          style={{
            background: `
              linear-gradient(rgba(5, 5, 10, 0.98), rgba(5, 5, 10, 0.98)),
              url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")
            `,
            backgroundSize: 'cover'
          }}
        >
          <div className="flex-grow overflow-y-auto p-4 md:p-8">
            <div className={`mx-auto ${isDesktop ? 'max-w-md pt-8' : 'max-w-3xl pt-16'}`}>
              <div className="mb-8 pb-8 border-b border-gray-700">
                <div className="flex items-center space-x-3">
                  <img 
                    src="/assets/logo.png" 
                    alt="TDG Logo" 
                    className="h-16 w-16"  // Increased logo size
                  />
                  <div>
                    <h2 className="text-white text-2xl font-bold">
                      TDG Spirits
                    </h2>
                    <p className="text-gray-500 text-sm">Premium Craft Distillery</p>
                  </div>
                </div>
              </div>
              
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
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;