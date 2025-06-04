import React from 'react';
import { Instagram } from 'lucide-react';

// Theme colors
const primaryColor = 'rgb(34, 32, 87)';
const primaryLight = 'rgb(54, 52, 107)';
const accentColor = 'rgb(100, 200, 255)';
const textPrimary = 'rgb(250, 250, 255)';
const textSecondary = 'rgba(250, 250, 255, 0.7)';

const AboutSection = () => {
  const galleryImages = [
    { src: "/assets/media1.png", title: "Master Distillery", description: "Our state-of-the-art distilling facility" },
    { src: "/assets/media2.png", title: "Pure Ingredients", description: "Locally-sourced grains and pure spring water" },
    { src: "/assets/media3.png", title: "Handcrafted Bottling", description: "Each bottle carefully inspected and filled" },
    { src: "/assets/media4.png", title: "Expert Tasting", description: "Our master tasters ensure perfect quality" }
  ];

  return (
    <section 
      id="about" 
      className="py-20 relative overflow-hidden"
     
    >
      {/* Background with soft blur using accentColor */}
      <div 
        className="absolute bottom-10 right-0 w-80 h-80 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
       
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Quality Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div 
              className="w-16 h-1 rounded-full"
              style={{ background: `linear-gradient(to right, ${accentColor}, ${primaryLight})` }}
            ></div>
          </div>
          <h2 
            className="text-4xl md:text-5xl font-bold mb-8 tracking-tight font-playfair"
            style={{ color: textPrimary }}
          >
            STAY BIG AND WHITE
          </h2>
          <p 
            className="max-w-4xl mx-auto text-[18px] leading-relaxed font-montserrat"
            style={{ color: textSecondary }}
          >
            GOAT Vodka™ is the ultimate expression of ultra-premium vodka — crafted for those who lead. Distilled seven times and charcoal-filtered for unmatched purity, it offers a crisp, clean finish with a bold, refined character. GOAT Vodka isn’t just smooth — it’s legendary.
          </p>
        </div>

        {/* Product Showcase with Side Image */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          {/* Text Content */}
          <div className="md:w-1/2">
            <div className="relative inline-block mb-8">
              <h3 
                className="text-3xl font-bold relative z-10 font-playfair"
                style={{ color: accentColor }}
              >
                ABOUT GOAT VODKA
              </h3>
              
            </div>
            <p 
              className="mb-6 leading-relaxed font-montserrat"
              style={{ color: textSecondary }}
            >
             In the heart of elite distilleries, where tradition meets innovation, a new legend rises — GOAT Vodka Master Select. Born from a bold vision to redefine excellence, it is distilled seven times through the finest charcoal filters, capturing the spirit and ambition of its creators in every drop.
            </p>
            <p 
              className="mb-8 leading-relaxed font-montserrat"
              style={{ color: textSecondary }}
            >
              Crafted with precision by master distillers, GOAT Vodka is more than just a spirit — it’s a legacy in a bottle. Every drop reflects their unwavering passion and expertise, delivering a smooth, refined flavor that lingers long after the sip. Like the GOAT itself, it stands as a symbol of strength, mastery, and unmatched excellence.
            </p>
            
            <div className="flex items-center space-x-4">
              <Instagram 
                size={24} 
                style={{ color: accentColor }} 
              />
              <a 
                href="#" 
                className="hover:underline transition-colors font-montserrat"
                style={{ color: accentColor }}
              >
                Follow us on Instagram
              </a>
            </div>
          </div>
          
          {/* Side Image */}
          <div className="md:w-1/2 relative">
            <div className="relative aspect-[3/4]">
              <div 
                className="absolute inset-0 to-transparent rounded-xl z-10"
                style={{ background: `linear-gradient(to top, ${primaryColor}, transparent)` }}
              ></div>
              <div className="absolute -inset-4">
                <div 
                  className="absolute inset-0 border-2 rounded-xl transform rotate-3"
                  style={{ borderColor: `rgba(100, 200, 255, 0.3)` }}
                ></div>
                <div 
                  className="absolute inset-0 border-2 rounded-xl transform -rotate-3"
                  style={{ borderColor: `rgba(100, 200, 255, 0.2)` }}
                ></div>
              </div>
              <img 
                src="/assets/pic10.png" 
                alt="GOAT Vodka Bottle" 
                className="w-full h-full object-cover rounded-xl shadow-2xl relative z-0"
              />
            </div>
          </div>
        </div>

        {/* Master Select Product */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div 
              className="w-16 h-1 rounded-full"
              style={{ background: `linear-gradient(to right, ${accentColor}, ${primaryLight})` }}
            ></div>
          </div>
          <h3 
            className="text-3xl font-bold mb-8 font-playfair"
            style={{ color: textPrimary }}
          >
            GOAT VODKA™ MASTER SELECT
          </h3>
          <div className="relative max-w-2xl mx-auto">
            <div className="relative">
              <img 
                src="/assets/bg3.png" 
                alt="GOAT Master Select" 
                className="w-full rounded-xl shadow-2xl"
              />
              <div 
                className="absolute inset-0 via-transparent to-transparent rounded-xl"
                style={{ background: `linear-gradient(to top, ${primaryColor}, transparent)` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Gallery Section - Column Layout */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div 
              className="w-16 h-1 rounded-full"
              style={{ background: `linear-gradient(to right, ${accentColor}, ${primaryLight})` }}
            ></div>
          </div>
          <h3 
            className="text-3xl font-bold mb-8 font-playfair"
            style={{ color: textPrimary }}
          >
            THE CRAFTSMANSHIP
          </h3>
          <p 
            className="max-w-3xl mx-auto mb-12 text-lg leading-relaxed font-montserrat"
            style={{ color: textSecondary }}
          >
            Explore the meticulous process behind our award-winning vodka, from grain to bottle.
          </p>
        </div>
        
        <div className="space-y-16 max-w-4xl mx-auto">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-2xl group"
            >
              <div className="absolute inset-0 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                   style={{ background: `linear-gradient(to top, ${primaryColor}, transparent)` }}
              ></div>
              <div className="absolute bottom-0 left-0 p-8 z-20 translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                <h4 
                  className="font-bold text-2xl mb-2 font-playfair"
                  style={{ color: textPrimary }}
                >
                  {image.title}
                </h4>
                <p 
                  className="font-montserrat"
                  style={{ color: accentColor }}
                >
                  {image.description}
                </p>
              </div>
              <img 
                src={image.src} 
                alt={image.title} 
                className="w-full h-[500px] object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;