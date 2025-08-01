import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import img1 from '/assets/bki.png';
import img2 from '/assets/bottleg.png';
import img3 from '/assets/green.webp';
import img4 from '/assets/orange.webp';


const SpiritsSection = () => {
  const spirits = [
    {
      id: 0,
      img: img1,
      title: "Brass Knuckles Canadian Whiskey",
      shortDesc: "The first ultra-premium Canadian Whiskey. Aged for five years in charred White Oak Barrels.",
      detailDesc: "Brass Knuckles Canadian Whiskey™ is the first ultra-premium Canadian whiskey Locally crafted in Toronto, BK supports Canadian industry and honors over a century of whiskey-making tradition. Every sip delivers bold character and a taste that leaves a lasting impression.",
      specs: [
        { name: "Aging", value: "5 years" },
        { name: "Barrels", value: "Charred White Oak" },
        { name: "Origin", value: "Toronto, Canada" },
        { name: "Flavor", value: "Sweet Oak" }
      ],
      link: "https://bkwhiskey.ca/"
    },
    {
      id: 1,
      img: img2,
      title: "GOAT Vodka",
      shortDesc: "The Undisputed Champion of Premium Spirits. Distilled seven times for supreme purity.",
      detailDesc: "GOAT Vodka-The Undisputed Champion of Premium Spirits.stilled seven times for unmatched purity, GOAT Vodka is crafted for those who don’t settle — they dominate. With bold character, smooth clarity, and heritage-level precision, it’s more than vodka — it’s your victory lap in a glass. Distilled Different. Crowned by Fire.",
      specs: [
        { name: "Distillation", value: "7 times" },
        { name: "Profile", value: "Clean & Legendary" },
        { name: "Experience", value: "Victory Lap" }
      ],
      link: "https://goatvodka.ca/"
    },
    {
      id: 2,
      img: img3,
      title: "RAW Sipping Gin Green Label",
      shortDesc: "Clean, herbaceous profile with zesty fresh ground pepper notes.",
      detailDesc: "RAW Sipping Gin – Green Label offers a clean, herbaceous profile with botanicals like Juniper, Coriander etc. Born without filters, we are raw — and so is this gin. True to nature, unmasked, and unapologetic. RAW Gin is a return to what’s real.",
      specs: [
        { name: "Botanicals", value: "Juniper, Grain de Paradis, " },
        { name: "Key Flavor", value: "Pepper, Citrus, " },
        { name: "Nose", value: "Zesty fresh ground pepper" },
       
      ],
      link: "https://bornnakedrawgin.ca/"
    },
    {
      id: 3,
      img: img4,
      title: "RAW Sipping Gin Orange Label",
      shortDesc: "Richer, warmer citrus twist with aromatic Lebanese juniper.",
      detailDesc: "RAW Sipping Gin – Orange Label delivers a warm, citrus-forward profile with aromatic Lebanese juniper and botanicals like Lemon, Orange, Coriander etc.  The finish is long, with layered root complexity.Born unmasked, we are raw — and so is this gin. RAW is a return to what’s real.",
      specs: [
        { name: "Botanicals", value: "Lemon, Orange,etc" },
        { name: "Key Flavor", value: "Citrus, Juniper" },
        { name: "Nose", value: "Fresh & crisp, with agrumes" },
        
       
      ],
      link: "https://bornnakedrawgin.ca/"
    },
   
  ];


  const [showDetail, setShowDetail] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const carouselRef = useRef(null);
  const itemsRef = useRef([]);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  // Track window size for responsive adjustments
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Swipe gestures for mobile
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (showDetail || isAnimating) return;
      
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const diffX = touchStartX.current - touchEndX;
      const diffY = Math.abs(touchStartY.current - touchEndY);
      const swipeThreshold = 50;
      
      if (Math.abs(diffX) > swipeThreshold && diffY < 50) {
        if (diffX > 0) {
          handleNext();
        } else {
          handlePrev();
        }
      }
    };

    carousel.addEventListener('touchstart', handleTouchStart);
    carousel.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      carousel.removeEventListener('touchstart', handleTouchStart);
      carousel.removeEventListener('touchend', handleTouchEnd);
    };
  }, [showDetail, isAnimating]);

  useEffect(() => {
    setupCarouselItems();
    
    gsap.set(".intro-content", { opacity: 1, pointerEvents: "auto" });
    
    gsap.fromTo(
      ".active-item .content-animate",
      { y: -30, opacity: 0, filter: "blur(10px)" },
      { 
        y: 0, 
        opacity: 1, 
        filter: "blur(0px)",
        stagger: 0.2,
        delay: 0.5,
        duration: 0.5,
        ease: "power2.out"
      }
    );
    
    const gradientSize = windowWidth < 768 ? 300 : 500;
    const gradientBlur = windowWidth < 768 ? 100 : 150;
    
    gsap.set(".gradient-bg", {
      width: gradientSize,
      height: gradientSize * 0.6,
      x: "-10%",
      y: "-50%",
      top: "50%",
      left: "50%",
      borderRadius: "20% 30% 80% 10%",
      filter: `blur(${gradientBlur}px)`
    });
  }, [windowWidth]);

  const setupCarouselItems = () => {
    if (showDetail) return;
    
    const isMobile = windowWidth < 768;
    
    const mobilePositions = [
      { x: "-150%", y: "0%", scale: 0.7, filter: "blur(20px)", zIndex: 1, opacity: 0 },
      { x: "0%", y: "0%", scale: 1, filter: "blur(0px)", zIndex: 10, opacity: 1 },
      { x: "150%", y: "0%", scale: 0.7, filter: "blur(20px)", zIndex: 9, opacity: 1 },
      { x: "300%", y: "0%", scale: 0.4, filter: "blur(30px)", zIndex: 8, opacity: 0 },
      { x: "450%", y: "0%", scale: 0.2, filter: "blur(40px)", zIndex: 7, opacity: 0 }
    ];
    
    const desktopPositions = [
      { x: "-100%", y: "-5%", scale: 1.5, filter: "blur(50px)", zIndex: 1, opacity: 0 },
      { x: "0%", y: "0%", scale: 1, filter: "blur(0px)", zIndex: 10, opacity: 1 },
      { x: "50%", y: "10%", scale: 0.8, filter: "blur(20px)", zIndex: 9, opacity: 0.5 },
      { x: "90%", y: "20%", scale: 0.5, filter: "blur(50px)", zIndex: 8, opacity: 0.5 },
      { x: "120%", y: "30%", scale: 0.3, filter: "blur(60px)", zIndex: 7, opacity: 0 }
    ];
    
    const positions = isMobile ? mobilePositions : desktopPositions;

    itemsRef.current.forEach((item, i) => {
      if (!item) return;
      const pos = positions[i] || positions[positions.length - 1];
      gsap.set(item, {
        x: pos.x,
        y: pos.y,
        scale: pos.scale,
        filter: pos.filter,
        zIndex: pos.zIndex,
        opacity: pos.opacity,
        pointerEvents: i === 1 ? "auto" : "none"
      });
    });
  };

  const handleNext = () => {
    
    if (isAnimating || showDetail) return;
    setIsAnimating(true);
    
    gsap.to(".active-item .content-animate", {
      y: -20,
      opacity: 0,
      filter: "blur(10px)",
      stagger: 0.1,
      duration: 0.3
    });
    
    itemsRef.current.forEach((item, i) => {
      if (!item) return;
      const nextIndex = i === 0 ? itemsRef.current.length - 1 : i - 1;
      
      const timeline = gsap.timeline({
        onComplete: () => {
          if (i === 1) {
            setCurrentIndex(prev => (prev + 1) % spirits.length);
            setIsAnimating(false);
            
            gsap.fromTo(
              ".active-item .content-animate",
              { y: -30, opacity: 0, filter: "blur(10px)" },
              { 
                y: 0, 
                opacity: 1, 
                filter: "blur(0px)",
                stagger: 0.2,
                duration: 0.5,
                ease: "power2.out"
              }
            );
          }
        }
      });
      
      const nextItem = itemsRef.current[nextIndex];
      if (!nextItem) return;
      
      const nextStyles = window.getComputedStyle(nextItem);
      timeline.to(item, {
        x: nextStyles.getPropertyValue('transform').split(',')[4],
        y: nextStyles.getPropertyValue('transform').split(',')[5],
        scale: nextStyles.getPropertyValue('transform').includes('matrix3d') 
          ? parseFloat(nextStyles.getPropertyValue('transform').split(',')[0].slice(9)) 
          : parseFloat(nextStyles.getPropertyValue('transform').split(',')[0].slice(7)),
        filter: nextStyles.getPropertyValue('filter'),
        opacity: nextStyles.getPropertyValue('opacity'),
        zIndex: nextStyles.getPropertyValue('z-index'),
        pointerEvents: nextIndex === 1 ? "auto" : "none",
        duration: 0.7,
        ease: "power3.out",
        delay: i * 0.1
      });
    });
  };

  const handlePrev = () => {
  

     if (isAnimating || showDetail) return;
    setIsAnimating(true);
    
    gsap.to(".active-item .content-animate", {
      y: -20,
      opacity: 0,
      filter: "blur(10px)",
      stagger: 0.1,
      duration: 0.3
    });
    
    itemsRef.current.forEach((item, i) => {
      if (!item) return;
      const prevIndex = i === itemsRef.current.length - 1 ? 0 : i + 1;
      
      const timeline = gsap.timeline({
        onComplete: () => {
          if (i === 1) {
            setCurrentIndex(prev => (prev - 1 + spirits.length) % spirits.length);
            setIsAnimating(false);
            
            gsap.fromTo(
              ".active-item .content-animate",
              { y: -30, opacity: 0, filter: "blur(10px)" },
              { 
                y: 0, 
                opacity: 1, 
                filter: "blur(0px)",
                stagger: 0.2,
                duration: 0.5,
                ease: "power2.out"
              }
            );
          }
        }
      });
      
      const prevItem = itemsRef.current[prevIndex];
      if (!prevItem) return;
      
      const prevStyles = window.getComputedStyle(prevItem);
      timeline.to(item, {
        x: prevStyles.getPropertyValue('transform').split(',')[4],
        y: prevStyles.getPropertyValue('transform').split(',')[5],
        scale: prevStyles.getPropertyValue('transform').includes('matrix3d') 
          ? parseFloat(prevStyles.getPropertyValue('transform').split(',')[0].slice(9)) 
          : parseFloat(prevStyles.getPropertyValue('transform').split(',')[0].slice(7)),
        filter: prevStyles.getPropertyValue('filter'),
        opacity: prevStyles.getPropertyValue('opacity'),
        zIndex: prevStyles.getPropertyValue('z-index'),
        pointerEvents: prevIndex === 1 ? "auto" : "none",
        duration: 0.7,
        ease: "power3.out",
        delay: i * 0.1
      });
    });
  };

  const handleSeeMore = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    gsap.to(itemsRef.current.filter((_, i) => i !== 1), {
      x: "100%",
      opacity: 0,
      duration: 0.5,
      stagger: 0.1
    });
    
    gsap.to(itemsRef.current[1], {
      width: "100%",
      height: windowWidth < 768 ? "calc(100vh - 100px)" : "100%",
      duration: 0.7
    });
    
    if (windowWidth >= 768) {
      gsap.to(".active-item img", {
        right: "50%",
        opacity: 1,
        duration: 1
      });
    }
    
    gsap.to(".active-item .intro-content", {
      opacity: 0,
      duration: 0.3,
      pointerEvents: "none"
    });
    
    gsap.fromTo(
      ".active-item .detail-content",
      { opacity: 0, pointerEvents: "none" },
      { 
        opacity: 1, 
        pointerEvents: "auto",
        delay: 0.5,
        duration: 0.5
      }
    );
    
    gsap.fromTo(
      ".active-item .detail-animate",
      { y: -30, opacity: 0, filter: "blur(10px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.2,
        delay: 1,
        duration: 0.8
      }
    );
    
    gsap.to(".gradient-bg", {
      x: windowWidth < 768 ? "0%" : "-100%",
      rotation: 90,
      filter: "blur(130px)",
      duration: 1
    });
    
    gsap.to([".prev-btn", ".next-btn"], {
      opacity: 0,
      pointerEvents: "none",
      duration: 0.3
    });
    
    gsap.to(".back-btn", {
      opacity: 1,
      duration: 0.5,
      delay: 0.5
    });
    
    setShowDetail(true);
    setIsAnimating(false);
  };

  const handleBack = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    gsap.to(".active-item .detail-content", {
      opacity: 0,
      duration: 0.3,
      pointerEvents: "none"
    });
    
    gsap.to(".active-item .intro-content", {
      opacity: 1,
      pointerEvents: "auto",
      delay: 0.5,
      duration: 0.5
    });
    
    gsap.to(itemsRef.current[1], {
      width: windowWidth < 768 ? "100%" : "70%",
      height: "100%",
      duration: 0.7
    });
    
    if (windowWidth >= 768) {
      gsap.to(".active-item img", {
        right: 0,
        opacity: 1,
        duration: 1
      });
    }
    
    setupCarouselItems();
    
    gsap.to(".gradient-bg", {
      x: "-10%",
      rotation: 0,
      filter: "blur(150px)",
      duration: 1
    });
    
    gsap.to([".prev-btn", ".next-btn"], {
      opacity: 1,
      pointerEvents: "auto",
      duration: 0.5,
      delay: 0.5
    });
    
    gsap.to(".back-btn", {
      opacity: 0,
      duration: 0.3
    });
    
    gsap.fromTo(
      ".active-item .content-animate",
      { y: -30, opacity: 0, filter: "blur(10px)" },
      { 
        y: 0, 
        opacity: 1, 
        filter: "blur(0px)",
        stagger: 0.2,
        delay: 0.8,
        duration: 0.5,
        ease: "power2.out"
      }
    );
    
    setShowDetail(false);
    setIsAnimating(false);
  };


  return (
    <div
      className="bg-[#F4F4F4]  py- md:py-16 overflow-x-hidden h-auto overflow-y-hidden" id="product-section"
      style={{ fontFamily: "Inter" }}
    >
      <div className="text-center mb-6 mt-10 md:mb-8 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
          Premium Spirits Collection
        </h1>
        <p className="text-gray-800 text-md md:text-base lg:text-lg max-w-2xl mx-auto">
          Discover our exclusive range of handcrafted spirits, each with a unique story and exceptional flavor profile. 
          From award-winning whiskeys to artisanal gins, our collection celebrates the craft of distilling.
        </p>
      </div>
      
      <div 
        ref={carouselRef}
        className="relative min-h-[925px] md:min-h-[600px] lg:min-h-[700px] bottom-10 md:bottom-1"
      > 
        <div className="gradient-bg absolute bg-gradient-to-tr from-[#DC422A] to-blue-500 z-[-1]"></div>
        
        <div className="absolute w-[90%] max-w-[1140px] h-[80%] md:h-[80%] left-1/2 -translate-x-1/2">
          {spirits.map((spirit, index) => {
            const visualIndex = (index - currentIndex + 1 + spirits.length) % spirits.length;
            return (
              <div 
                key={spirit.id} 
                ref={el => itemsRef.current[visualIndex] = el}
                className={`absolute left-0 w-full md:w-[70%] h-full text-[15px] ${visualIndex === 1 ? 'active-item' : ''}`}
              >
                <div className="flex flex-col md:flex-row items-center md:items-start h-full">
                  {(windowWidth >= 768 || !showDetail) && (
                    <div className="w-full md:w-[55%] h-[350px] flex items-center justify-center mb-4 md:mb-0">
                      <img 
                        src={spirit.img} 
                        alt={spirit.title}
                        className="max-h-[350px] max-w-full object-contain transition-all duration-1500 md:absolute top-11 relative md:right-0 md:top-1/2 md:-translate-y-1/2"
                      />
                    </div>
                  )}
                  
                  <div className="intro-content w-full md:w-[400px] md:absolute md:top-1/2 md:-translate-y-1/2 transition-opacity duration-500 px-4 md:px-0 mt-5">
                    <div className="text-3xl md:text-4xl lg:text-4xl font-medium leading-tight content-animate text-gray-900">
                      {spirit.title}
                    </div>
                    <div className="text-md md:text-md lg:text-base text-gray-800 content-animate mt-2 md:mt-4">
                      {spirit.shortDesc}
                    </div>
                    <button 
                      onClick={handleSeeMore}
                      className="mt-7 md:mt-5 py-2 px-4 bg-gray-900 text-white font-bold tracking-[3px] rounded-none transition-all duration-500 font-[Poppins] hover:bg-gray-800 content-animate text-sm md:text-base"
                    >
                      SEE MORE ↗
                    </button>
                  </div>
                  
                  <div 
                    className={`detail-content opacity-0  pointer-events-none w-full md:w-1/2 md:absolute md:right-0 ${windowWidth < 768 ? 'top-0 h-full' : 'top-1/2 md:-translate-y-1/2'} bg-transparent p-1 md:p-6 lg:p-8 flex flex-col`}
                    style={{ touchAction: 'pan-y' }}
                  >
                    {showDetail && windowWidth < 768 && (
                      <div className="w-full flex-shrink-0 flex justify-center ">
                        <img 
                          src={spirit.img} 
                          alt={spirit.title}
                          className="max-h-[225px] object-contain"
                        />
                      </div>
                    )}
                    <div 
                      className="overflow-y-auto flex-grow pr-2"
                      style={{ WebkitOverflowScrolling: 'touch' }}
                    >
                      <div className="text-xl md:text-2xl lg:text-3xl detail-animate font-bold mb-1 md:mb-4 text-gray-900">
                        {spirit.title}
                      </div>
                      <div className="detail-animate py-0 md:py-4 text-gray-700 text-sm md:text-base">
                        {spirit.detailDesc}
                      </div>
                      <div className="flex gap-2 w-full border-t border-gray-300 mt-3 md:mt-5 overflow-x-auto py-3 md:py-4 detail-animate">
                        {spirit.specs.map((spec, specIndex) => (
                          <div key={specIndex} className="w-[80px] md:w-[90px] text-center flex-shrink-0">
                            <p className="font-bold text-gray-800 text-xs md:text-sm">{spec.name}</p>
                            <p className="text-gray-600 text-xs md:text-sm">{spec.value}</p>
                          </div>
                        ))}
                      </div>
                      <div className="detail-animate mt-1 md:mt-4">
                        {spirit.link !== "#" && (
                          <a 
                            href={spirit.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-[Poppins] bg-transparent border border-gray-300 py-1 px-4 tracking-[2px] font-medium hover:bg-gray-400 transition-colors inline-block text-gray-900 text-xs md:text-sm"
                          >
                            LEARN MORE
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Updated Navigation Buttons - Positioned beside bottles */}
        <div className="absolute top-1/4 left-0 w-full -translate-y-1/2 flex justify-between px-4 z-20">
          <button 
            onClick={handlePrev}
            className="prev-btn w-12 h-12 md:w-16 md:h-16 rounded-full font-mono border border-gray-300 text-lg bg-black text-white hover:bg-gray-800 transition-colors flex items-center justify-center relative left-0 md:left-35 top-0 md:top-30"
            aria-label="Previous product"
          >
            &lt;
          </button>
          <button 
            onClick={handleNext}
            className="next-btn w-12 h-12 md:w-16 md:h-16 rounded-full font-mono border border-gray-300 text-lg bg-black text-white hover:bg-gray-800 transition-colors flex items-center justify-center relative right-0 md:right-35 top-0 md:top-30"
            aria-label="Next product"
          >
            &gt;
          </button>
        </div>
        
        {/* Back Button */}
        <div className="absolute bottom-24 md:bottom-6 w-[90%] max-w-[1140px] flex justify-center left-1/2 -translate-x-1/2 px-4">
          <button 
            onClick={handleBack}
            className={`back-btn z-[100] bg-white md:text-gray-900 font-[Poppins] font-bold tracking-[3px] px-4 py-2 opacity-0 border border-gray-300 hover:bg-gray-100 transition-colors text-xs md:text-sm text-gray-600 ${
              showDetail && windowWidth < 768 ? 'fixed bottom-4' : ''
            }`}
          >
            BACK TO COLLECTION
          </button>
        </div>
      </div>
      
      {/* Mobile Indicators */}
      <div className="md:hidden flex justify-center relative bottom-50 space-x-2">
        {spirits.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? 'bg-gray-900' : 'bg-gray-300'
            }`}
            aria-label={`Go to product ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SpiritsSection;