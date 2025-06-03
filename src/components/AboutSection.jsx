import React from 'react';
import { Instagram } from 'lucide-react';

const AboutSection = () => {
  const galleryImages = [
    { src: "/assets/media1.png", title: "Master Distillery", description: "Our state-of-the-art distilling facility" },
    { src: "/assets/media2.png", title: "Pure Ingredients", description: "Locally-sourced grains and pure spring water" },
    { src: "/assets/media3.png", title: "Handcrafted Bottling", description: "Each bottle carefully inspected and filled" },
    { src: "/assets/media4.png", title: "Expert Tasting", description: "Our master tasters ensure perfect quality" }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background with soft black blur */}
     
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Quality Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-amber-400 to-amber-600 w-16 h-1 rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight font-playfair">
            UNMATCHED EXCELLENCE
          </h2>
          <p className="text-gray-200 max-w-4xl mx-auto text-lg leading-relaxed font-montserrat">
            GOAT Vodka™ is the first ultra-premium vodka crafted for champions. Distilled seven times through 
            charcoal filtration, GOAT delivers the smoothest, purest taste with a full-bodied character that 
            never fails to impress.
          </p>
        </div>

        {/* Product Showcase with Side Image */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          {/* Text Content */}
          <div className="md:w-1/2">
            <div className="relative inline-block mb-8">
              <h3 className="text-3xl font-bold text-amber-400 relative z-10 font-playfair">ABOUT GOAT VODKA</h3>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600 z-0"></div>
            </div>
            <p className="text-gray-200 mb-6 leading-relaxed font-montserrat">
              Deep in the heart of premium distilleries, where the spirit of vodka craftsmanship thrives, 
              a new legend is born. GOAT Vodka Master Select is created from the desire to forge a new path. 
              Distilled seven times through premium charcoal filters, it embodies the ambitions of its creators.
            </p>
            <p className="text-gray-200 mb-8 leading-relaxed font-montserrat">
              Crafted with meticulous care by master distillers, this is not just vodka, but a legacy. 
              Pouring their passion and expertise into every bottle, they ensure that with every sip, 
              the smooth, refined flavor leaves an impression as enduring as the GOAT itself—a mighty 
              symbol of strength and excellence.
            </p>
            
            <div className="flex items-center space-x-4">
              <Instagram className="text-amber-400" size={24} />
              <a 
                href="#" 
                className="text-amber-400 hover:text-amber-300 transition-colors underline font-montserrat"
              >
                Follow us on Instagram
              </a>
            </div>
          </div>
          
          {/* Side Image */}
          <div className="md:w-1/2 relative">
            <div className="relative aspect-[3/4]">
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent rounded-xl z-10"></div>
              <div className="absolute -inset-4">
                <div className="absolute inset-0 border-2 border-amber-400/30 rounded-xl transform rotate-3"></div>
                <div className="absolute inset-0 border-2 border-amber-400/20 rounded-xl transform -rotate-3"></div>
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
            <div className="bg-gradient-to-r from-amber-400 to-amber-600 w-16 h-1 rounded-full"></div>
          </div>
          <h3 className="text-3xl font-bold text-white mb-8 font-playfair">
            GOAT VODKA™ MASTER SELECT
          </h3>
          <div className="relative max-w-2xl mx-auto">
            <div className="relative">
              <img 
                src="/assets/bg3.png" 
                alt="GOAT Master Select" 
                className="w-full rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 via-transparent to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>

        {/* Gallery Section - Column Layout */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-amber-400 to-amber-600 w-16 h-1 rounded-full"></div>
          </div>
          <h3 className="text-3xl font-bold text-white mb-8 font-playfair">
            THE CRAFTSMANSHIP
          </h3>
          <p className="text-gray-200 max-w-3xl mx-auto mb-12 text-lg leading-relaxed font-montserrat">
            Explore the meticulous process behind our award-winning vodka, from grain to bottle.
          </p>
        </div>
        
        <div className="space-y-16 max-w-4xl mx-auto">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-2xl group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute bottom-0 left-0 p-8 z-20 translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                <h4 className="text-white font-bold text-2xl mb-2 font-playfair">{image.title}</h4>
                <p className="text-amber-400 font-montserrat">{image.description}</p>
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