import React, { useRef, useEffect } from 'react';

const HeroSection = () => {
  const goatRef = useRef(null);
  const vodkaRef = useRef(null);
  const bottleRef = useRef(null);
  const taglineRef = useRef(null);
  const greatestRef = useRef(null);
  const descriptionRef = useRef(null);
  const videoRef = useRef(null);

  // Theme colors
  const primaryColor = 'rgb(34, 32, 87)';
  const accentColor = 'rgb(100, 200, 255)';
  const textPrimary = 'rgb(250, 250, 255)';
  const textSecondary = 'rgba(250, 250, 255, 0.7)';

  useEffect(() => {
    const animateElements = () => {
      // Animate tagline
      if (taglineRef.current) {
        taglineRef.current.style.transform = 'translateY(0)';
        taglineRef.current.style.opacity = '1';
      }
      
      // Animate GOAT text
      if (goatRef.current) {
        setTimeout(() => {
          goatRef.current.style.transform = 'translateY(0) scale(1)';
          goatRef.current.style.opacity = '1';
        }, 300);
      }
      
      // Animate Vodka text
      if (vodkaRef.current) {
        setTimeout(() => {
          vodkaRef.current.style.transform = 'translateY(0) scale(1)';
          vodkaRef.current.style.opacity = '1';
        }, 500);
      }
      
      // Animate bottle
      if (bottleRef.current) {
        setTimeout(() => {
          bottleRef.current.style.transform = 'translateY(0) scale(1)';
          bottleRef.current.style.opacity = '1';
        }, 700);
      }
      
      // Animate greatest text
      if (greatestRef.current) {
        setTimeout(() => {
          greatestRef.current.style.transform = 'translateY(0) scale(1)';
          greatestRef.current.style.opacity = '1';
        }, 900);
      }
      
      // Animate description
      if (descriptionRef.current) {
        setTimeout(() => {
          descriptionRef.current.style.transform = 'translateY(0)';
          descriptionRef.current.style.opacity = '1';
        }, 1200);
      }
      
      // Animate video
      if (videoRef.current) {
        setTimeout(() => {
          videoRef.current.style.transform = 'translateY(0) scale(1)';
          videoRef.current.style.opacity = '1';
        }, 1500);
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
        className="relative z-10 mb-6 md:mb-12 transition-all duration-1000 ease-out"
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
            className="relative transition-all duration-1000 ease-out"
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
            className="relative transition-all duration-1000 ease-out -mt-2 md:-mt-4"
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
            className="relative transition-all duration-1000 ease-out"
            style={{ 
              transform: 'translateY(50px) scale(0.8)', 
              opacity: 0 
            }}
          >
            <div className="relative md:bottom-20">
              <div className="relative">
                {/* Bottle image */}
                <img 
                  src="/assets/bottleg.png" 
                  alt="GOAT Vodka Bottle" 
                  className="w-48 sm:w-56 md:w-64 lg:w-82 xl:w-90 h-auto filter drop-shadow-2xl"
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
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 md:left-auto md:transform-none md:-right-8 md:top-1/2 md:-translate-y-1/2 transition-all duration-1000 ease-out"
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
                <span className="md:hidden ">GREATEST OF ALL TIME</span>
                <span className="hidden md:block relative top-48 right-7 text-xl" style={{ writingMode: 'vertical-rl' }}>
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
        className="relative z-10 max-w-2xl mx-auto mt-10 md:mt-16 mb-12 md:mb-20 text-center transition-all duration-1000 ease-out"
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

      {/* Video section */}
      <div 
        ref={videoRef}
        className="relative z-10 w-full max-w-4xl transition-all duration-1000 ease-out"
        style={{ 
          transform: 'translateY(50px) scale(0.95)', 
          opacity: 0 
        }}
      >
        <div 
          className="relative rounded-2xl overflow-hidden shadow-2xl"
          style={{ 
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 40px rgba(100, 200, 255, 0.2)',
            border: '1px solid rgba(100, 200, 255, 0.2)'
          }}
        >
          <video
            className="w-full aspect-video object-cover"
            muted
            loop
            autoPlay
            playsInline
          >
            <source src="/assets/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
           {/* Video overlay for interactivity */}
           <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4">
              <div 
                className="px-4 py-2 rounded-full backdrop-blur-sm"
                style={{ 
                  backgroundColor: 'rgba(34, 32, 87, 0.8)',
                  border: '1px solid rgb(100, 200, 255)'
                }}
              >
                <span className="text-white text-sm tracking-wide">WATCH EXPERIENCE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
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