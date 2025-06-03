import React, { useRef, useEffect, useState } from 'react';

const HeroSection = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Set up video autoplay and zoom effect
  useEffect(() => {
    // Start zoom effect immediately
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    // Start video autoplay after content appears
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Autoplay prevented:', error);
      });
    }
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-7 pb-16 px-4"
    >
      {/* Background with soft blur effect */}
      
      
      {/* Decorative glow elements */}
      
      
      {/* Animated texture background */}
      <div 
        className={`absolute inset-0 z-0 transition-all duration-[3000ms] ${
          isLoaded ? 'scale-110' : 'scale-100'
        }`}
      >
        <div 
          className="w-full h-full opacity-20"
          style={{
            backgroundImage: `url('/assets/texture.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
      </div>
      
      {/* Content container */}
      <div className={`relative z-10 max-w-5xl w-full text-center transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}>
        {/* Tagline */}
        <p className="text-amber-400 tracking-[0.3em] uppercase text-sm mb-6 font-light">
          PREMIUM SPIRITS COLLECTION
        </p>
        
        {/* Main title with elegant typography */}
        <div className="relative mb-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-amber-100 mb-2 tracking-tight">
            <span className="block">GOAT</span>
            <span className="block mt-2">VODKA</span>
          </h1>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-amber-500"></div>
        </div>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-amber-300 tracking-wider font-light mb-12">
          GREATEST OF ALL TIME
        </p>
        
        {/* Divider */}
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto my-12"></div>
        
        {/* Description */}
        <div className="max-w-2xl mx-auto mb-16">
          <p className="text-gray-200 text-lg md:text-xl font-light tracking-wide leading-relaxed">
            Crafted with precision, distilled to perfection. The ultimate vodka experience for connoisseurs who appreciate excellence in every sip.
          </p>
        </div>
      </div>
      
      {/* Video section positioned below the title */}
      <div className={`relative z-10 w-full max-w-4xl mb-8 transition-all duration-1000 delay-300 ${
        isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}>
        <div className="relative rounded-xl overflow-hidden shadow-2xl transform transition-all duration-700 hover:shadow-amber-900/50">
          <video
            ref={videoRef}
            className="w-full aspect-video object-cover"
            muted
            loop
            playsInline
            disablePictureInPicture
            disableRemotePlayback
          >
            <source src="/assets/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Glow effect */}
          <div className="absolute inset-0 pointer-events-none border border-amber-900/30 rounded-xl"></div>
          
          {/* Play icon overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="w-20 h-20 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border-2 border-amber-500/50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Button */}
      
      
      {/* Decorative elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="text-amber-400 text-sm mb-2 tracking-widest">SCROLL</div>
        <div className="w-px h-16 bg-gradient-to-b from-amber-500 to-transparent"></div>
      </div>
      
      {/* Animation styles */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;