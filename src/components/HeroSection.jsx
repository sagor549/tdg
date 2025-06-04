import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

const HeroSection = () => {
  // Define all refs
  const taglineRef = useRef(null);
  const goatRef = useRef(null);
  const vodkaRef = useRef(null);
  const bottleRef = useRef(null);
  const greatestRef = useRef(null);
  const descriptionRef = useRef(null);
  const modalRef = useRef(null);
  const modalContentRef = useRef(null);
  
  const [isBottleOpen, setIsBottleOpen] = useState(false);

  // Theme colors
  const primaryColor = 'rgb(34, 32, 87)';
  const accentColor = 'rgb(100, 200, 255)';
  const textPrimary = 'rgb(250, 250, 255)';
  const textSecondary = 'rgba(250, 250, 255, 0.7)';

  // Open bottle modal
  const openBottleModal = () => {
    setIsBottleOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Close bottle modal
  const closeBottleModal = () => {
    gsap.to(modalContentRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => {
        gsap.to(modalRef.current, {
          opacity: 0,
          duration: 0.2,
          onComplete: () => {
            setIsBottleOpen(false);
            document.body.style.overflow = 'auto';
          }
        });
      }
    });
  };

  // Animate modal when opened
  useEffect(() => {
    if (isBottleOpen) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );
      
      gsap.fromTo(
        modalContentRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' }
      );
    }
  }, [isBottleOpen]);

  // Initial animations
  useEffect(() => {
    const animateElements = () => {
      // Animate tagline
      if (taglineRef.current) {
        gsap.to(taglineRef.current, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out'
        });
      }
      
      // Animate GOAT text
      if (goatRef.current) {
        gsap.to(goatRef.current, {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          ease: 'elastic.out(1, 0.5)'
        });
      }
      
      // Animate Vodka text
      if (vodkaRef.current) {
        gsap.to(vodkaRef.current, {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          delay: 0.5,
          ease: 'elastic.out(1, 0.5)'
        });
      }
      
      // Animate bottle
      if (bottleRef.current) {
        gsap.to(bottleRef.current, {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          delay: 0.7,
          ease: 'back.out(1.7)'
        });
      }
      
      // Animate greatest text
      if (greatestRef.current) {
        gsap.to(greatestRef.current, {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.8,
          delay: 0.9,
          ease: 'power3.out'
        });
      }
      
      // Animate description
      if (descriptionRef.current) {
        gsap.to(descriptionRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 1.2,
          ease: 'power3.out'
        });
      }
    };

    const timer = setTimeout(animateElements, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-16 pb-16 px-4"
    >
      {/* Premium tagline */}
      <div
        ref={taglineRef}
        className="relative z-10 mb-6 md:mb-12"
        style={{
          transform: 'translateY(30px)',
          opacity: 0,
          color: accentColor
        }}
      >
        <p className="tracking-[0.2em] uppercase text-xs md:text-sm font-light">
          Toronto Distillery Group Presents
        </p>
        <div
          className="w-16 md:w-24 h-px mx-auto mt-2 md:mt-3"
          style={{ backgroundColor: accentColor }}
        ></div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-6xl">
        {/* Text block */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right md:flex-1 md:pr-8">
          {/* GOAT text */}
          <div 
            ref={goatRef}
            style={{ 
              transform: 'translateY(-50px) scale(0.8)', 
              opacity: 0 
            }}
          >
            <h1 
              className="text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] xl:text-[14rem] font-serif font-bold tracking-tight leading-none"
              style={{ 
                color: textPrimary,
                textShadow: '0 0 30px rgba(100, 200, 255, 0.3)'
              }}
            >
              GOAT
            </h1>
          </div>

          {/* Vodka text */}
          <div 
            ref={vodkaRef}
            className="relative -mt-2 md:-mt-4"
            style={{ 
              transform: 'translateY(30px) scale(0.8)', 
              opacity: 0 
            }}
          >
            <h2 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-light tracking-wide"
              style={{ 
                color: textPrimary,
                textShadow: '0 0 20px rgba(100, 200, 255, 0.5)'
              }}
            >
              Vodka
            </h2>
          </div>
        </div>

        {/* Bottle block */}
        <div className="relative mt-6 md:mt-0">
          <div 
            ref={bottleRef}
            className="relative cursor-pointer"
            style={{ 
              transform: 'translateY(50px) scale(0.8)', 
              opacity: 0 
            }}
            onClick={openBottleModal}
          >
            <div className="relative md:bottom-20">
              <div className="relative">
                {/* Bottle image */}
                <img 
                  src="/assets/bottleg.png" 
                  alt="GOAT Vodka Bottle" 
                  className="w-48 sm:w-56 md:w-64 lg:w-82 xl:w-90 h-auto filter drop-shadow-2xl transition-transform duration-300 hover:scale-105"
                />
                
                {/* Bottle glow effect */}
                <div 
                  className="absolute inset-0 rounded-full blur-3xl opacity-20 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, rgb(100, 200, 255) 0%, transparent 70%)'
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Greatest of All Time text */}
          <div 
            ref={greatestRef}
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 md:left-auto md:transform-none md:-right-8 md:top-1/2 md:-translate-y-1/2"
            style={{ 
              transform: 'translateY(-50%) translateX(20px) scale(0.8)', 
              opacity: 0 
            }}
          >
            <div className="text-center md:text-right">
              <p
                className="text-xs sm:text-sm font-light tracking-wider leading-tight"
                style={{
                  color: textSecondary,
                  writingMode: 'unset',
                  textOrientation: 'mixed',
                }}
              >
                <span className="md:hidden relative right-4">GREATEST OF ALL TIME</span>
                <span className="hidden md:block relative top-8 right-7 text-xl" style={{ writingMode: 'vertical-rl' }}>
                  GREATEST<br/>OF ALL<br/>TIME
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div 
        ref={descriptionRef}
        className="relative z-10 max-w-2xl mx-auto mt-10 md:mt-16 mb-12 md:mb-20 text-center"
        style={{ 
          transform: 'translateY(30px)', 
          opacity: 0 
        }}
      >
        <p 
          className="text-base sm:text-lg md:text-xl font-light tracking-wide leading-relaxed"
          style={{ color: textSecondary }}
        >
          Crafted with precision, distilled to perfection. The ultimate vodka experience for connoisseurs who appreciate excellence in every sip.
        </p>
      </div>

      {/* Bottle Modal */}
      {isBottleOpen && (
        <div 
          ref={modalRef}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center"
          style={{ opacity: 0 }}
          onClick={closeBottleModal}
        >
          <button 
            className="absolute top-6 right-6 text-3xl text-white z-50 hover:text-cyan-300 transition-colors"
            onClick={closeBottleModal}
          >
            &times;
          </button>
          
          <div 
            ref={modalContentRef}
            className="relative max-w-4xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
            style={{ transform: 'scale(0.8)', opacity: 0 }}
          >
            <img 
              src="/assets/bottleg.png" 
              alt="GOAT Vodka Bottle" 
              className="w-full max-h-[80vh] object-contain"
            />
            
            <div 
              className="absolute inset-0 rounded-full blur-3xl opacity-30 pointer-events-none -z-10"
              style={{
                background: 'radial-gradient(circle, rgb(100, 200, 255) 0%, transparent 70%)'
              }}
            ></div>
          </div>
        </div>
      )}

      {/* Decorative scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div 
          className="text-xs mb-2 tracking-widest opacity-60"
          style={{ color: accentColor }}
        >
          DISCOVER MORE
        </div>
        <div 
          className="w-px h-12 opacity-60"
          style={{ background: `linear-gradient(to bottom, ${accentColor}, transparent)` }}
        ></div>
      </div>

      {/* Floating particles effect */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full opacity-20 pointer-events-none"
          style={{
            backgroundColor: accentColor,
            left: `${(5 + i * 8) % 100}%`,
            top: `${(10 + (i % 4) * 25) % 100}%`,
            animation: `float ${3 + i * 0.3}s ease-in-out infinite alternate`,
            animationDelay: `${i * 0.2}s`
          }}
        ></div>
      ))}

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) scale(1); }
          100% { transform: translateY(-20px) scale(1.1); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;