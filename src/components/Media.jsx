// src/components/media.jsx
import React, { useState, useEffect } from 'react';

const imagePaths = [
  "/assets/media1.png",
  "/assets/media2.png",
  "/assets/media3.png",
  "/assets/media4.png",
  "/assets/pic9.png",
  "/assets/pic4.jpg",
];

const Media = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const accentColor = 'rgb(100, 200, 255)'

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const navigate = (direction) => {
    if (direction === 'prev') {
      setCurrentIndex(prev => (prev === 0 ? imagePaths.length - 1 : prev - 1));
    } else {
      setCurrentIndex(prev => (prev === imagePaths.length - 1 ? 0 : prev + 1));
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigate('prev');
      if (e.key === 'ArrowRight') navigate('next');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  // Prevent scrolling when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
    
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [lightboxOpen]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 relative top-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair tracking-tight"
            style={{ color: accentColor }} >Gallery Showcase</h2>
        <div className="w-32 h-1 " ></div>
        <p className="text-indigo-200 max-w-2xl mx-auto text-lg">
          Premium moments captured in elegant frames
        </p>
      </div>
      
      {/* Stylish Container */}
      <div className="bg-gradient-to-br from-indigo-900/30 to-black/50 border border-indigo-800/30 rounded-2xl shadow-2xl p-6">
        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {imagePaths.map((img, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-xl cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              {/* Image with elegant frame effect */}
              <div className="aspect-square overflow-hidden rounded-xl shadow-inner">
                <img 
                  src={img} 
                  alt={`Gallery ${index}`}
                  className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              {/* Hover overlay with shine effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                  <span className="text-indigo-200 font-medium">View</span>
                </div>
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-indigo-500 opacity-70"></div>
              <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-indigo-500 opacity-70"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-indigo-500 opacity-70"></div>
              <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-indigo-500 opacity-70"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with gradient */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-black/95 to-indigo-900/30"
            onClick={closeLightbox}
          />
          
          {/* Lightbox Container */}
          <div className="relative z-10 w-full max-w-5xl">
            {/* Navigation Arrows */}
            <button 
              className="absolute left-0 -translate-x-full top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/40 text-white hover:text-indigo-300 hover:bg-black/60 transition-all"
              onClick={(e) => {
                e.stopPropagation();
                navigate('prev');
              }}
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Main Image Container */}
            <div className="relative overflow-hidden">
              {/* Image without frame */}
              <img 
                src={imagePaths[currentIndex]} 
                alt={`Lightbox ${currentIndex}`}
                className="w-full max-h-[80vh] object-contain mx-auto rounded-sm"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            
            <button 
              className="absolute right-0 translate-x-full top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/40 text-white hover:text-indigo-300 hover:bg-black/60 transition-all"
              onClick={(e) => {
                e.stopPropagation();
                navigate('next');
              }}
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Close Button - More subtle */}
          <button 
            className="absolute top-6 right-6 p-2 text-white hover:text-indigo-300 transition-all z-20"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-lg">
            {currentIndex + 1} / {imagePaths.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Media;