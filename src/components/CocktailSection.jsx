import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CocktailSection = () => {
  const [currentCocktail, setCurrentCocktail] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const cocktails = [
    {
      name: "MVP Mule",
      tagline: "The reliable workhorse that gets the win every night.",
      image: "/assets/cock1.jpg",
      ingredients: [
        "2 oz G.O.A.T. Vodka",
        "½ oz fresh-squeezed lime juice",
        "4-5 oz spicy ginger beer",
        "2 dashes Angostura (optional)"
      ],
      instructions: [
        "Ice-pack a copper mug",
        "Add vodka + lime juice",
        "Hard-top with ginger beer",
        "Quick stir",
        "Garnish with mint sprig + lime wheel"
      ]
    },
    {
      name: "Final-Buzzer Espresso Martini",
      tagline: "For the clutch closer who still wants to hit the after-party.",
      image: "/assets/cock2.png",
      ingredients: [
        "2 oz G.O.A.T. Vodka",
        "1 oz fresh espresso (chilled)",
        "1 oz coffee liqueur",
        "¼ oz simple syrup"
      ],
      instructions: [
        "Shake vigorously with ice",
        "Double-strain into a coupe glass",
        "Top with three coffee beans",
        "Serve immediately"
      ]
    },
    {
      name: "Record-Breaker Berry Smash",
      tagline: "Bright, aggressive, crowd-pleasing",
      image: "/assets/cock3.png",
      ingredients: [
        "2 oz G.O.A.T. Vodka",
        "4–6 fresh mixed berries",
        "¾ oz lemon juice",
        "½ oz honey syrup",
        "2 oz soda water"
      ],
      instructions: [
        "Muddle berries + syrup",
        "Add vodka + lemon juice",
        "Shake with ice",
        "Dump into rocks glass",
        "Top with soda water",
        "Garnish with rosemary sprig"
      ]
    },
    {
      name: "Clutch-Shot Lemon Drop",
      tagline: "Clean, sharp, and instantly memorable",
      image: "/assets/cock4.png",
      ingredients: [
        "2 oz G.O.A.T. Vodka",
        "¾ oz Cointreau",
        "¾ oz fresh lemon juice",
        "½ oz simple syrup"
      ],
      instructions: [
        "Rim coupe with lemon sugar",
        "Shake ingredients with ice",
        "Fine-strain into glass",
        "Garnish with lemon twist spiral"
      ]
    },
    {
      name: "Golden-Trophy Martini",
      tagline: "Straight prestige—dry, cold, and literally flecked with gold",
      image: "/assets/cock5.png",
      ingredients: [
        "2½ oz G.O.A.T. Vodka",
        "½ oz dry vermouth",
        "Pinch of edible gold leaf"
      ],
      instructions: [
        "Stir 30 seconds over cracked ice",
        "Strain into frozen Nick & Nora glass",
        "Drop olive rolled in gold leaf",
        "Sprinkle additional gold flakes"
      ]
    }
  ];

  const nextCocktail = () => {
    setCurrentCocktail((prev) => (prev + 1) % cocktails.length);
  };

  const prevCocktail = () => {
    setCurrentCocktail((prev) => (prev - 1 + cocktails.length) % cocktails.length);
  };

  return (
    <section id="cocktails" className="py-16 md:py-24 relative overflow-hidden ">
      {/* Decorative elements */}
      
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-4 font-serif tracking-tight">
            Signature Cocktails
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-6"></div>
          <p className="text-amber-200 text-lg md:text-xl max-w-2xl mx-auto">
            Championship-worthy cocktails crafted for those who dominate the night
          </p>
        </div>
        
        <div className="relative">
          {/* Mobile Navigation - Top position */}
          {isMobile && (
            <div className="flex justify-between items-center mb-6 px-2">
              <button
                onClick={prevCocktail}
                className="bg-amber-900/80 text-amber-300 p-3 rounded-full hover:bg-amber-800 transition-all z-20 border border-amber-700/50 shadow-lg"
              >
                <ChevronLeft size={24} strokeWidth={1.5} />
              </button>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-amber-100">
                  {cocktails[currentCocktail].name}
                </h3>
                <p className="text-amber-400 text-sm mt-1">
                  {cocktails[currentCocktail].tagline}
                </p>
              </div>
              
              <button
                onClick={nextCocktail}
                className="bg-amber-900/80 backdrop-blur-sm text-amber-300 p-3 rounded-full hover:bg-amber-800 transition-all z-20 border border-amber-700/50 shadow-lg"
              >
                <ChevronRight size={24} strokeWidth={1.5} />
              </button>
            </div>
          )}
          
          {/* Desktop Navigation - Side position */}
          {!isMobile && (
            <>
              <button
                onClick={prevCocktail}
                className="absolute -left-16 top-1/2 transform -translate-y-1/2 bg-amber-900/80 backdrop-blur-sm text-amber-300 p-4 rounded-full hover:bg-amber-800 transition-all z-20 border border-amber-700/50 shadow-lg"
              >
                <ChevronLeft size={32} strokeWidth={1.5} />
              </button>
              
              <button
                onClick={nextCocktail}
                className="absolute -right-16 top-1/2 transform -translate-y-1/2 bg-amber-900/80 backdrop-blur-sm text-amber-300 p-4 rounded-full hover:bg-amber-800 transition-all z-20 border border-amber-700/50 shadow-lg"
              >
                <ChevronRight size={32} strokeWidth={1.5} />
              </button>
            </>
          )}
          
          {/* Cocktail Card */}
          <div className="bg-black/30 backdrop-blur-xl rounded-2xl overflow-hidden border border-amber-800/30 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-10 p-6 md:p-10">
              {/* Cocktail Image */}
              <div className="relative">
                <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-amber-700/20 shadow-lg">
                  <img
                    src={cocktails[currentCocktail].image}
                    alt={cocktails[currentCocktail].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {!isMobile && (
                  <div className="absolute -bottom-4 -right-4 bg-amber-900/90 backdrop-blur-sm px-6 py-2 rounded-full border border-amber-700/50">
                    <h3 className="text-2xl font-bold text-amber-100 whitespace-nowrap">
                      {cocktails[currentCocktail].name}
                    </h3>
                  </div>
                )}
              </div>
              
              {/* Cocktail Details */}
              <div className="py-2 md:py-4">
                {!isMobile && (
                  <p className="text-amber-400 italic mb-4 md:mb-6 text-lg">
                    {cocktails[currentCocktail].tagline}
                  </p>
                )}
                
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-amber-300 mb-3 pb-2 border-b border-amber-700/40">
                      Ingredients
                    </h4>
                    <ul className="space-y-2 md:space-y-3">
                      {cocktails[currentCocktail].ingredients.map((ingredient, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-amber-500 mr-2 mt-1">•</span>
                          <span className="text-amber-100">{ingredient}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-amber-300 mb-3 pb-2 border-b border-amber-700/40">
                      Quick Build
                    </h4>
                    <ol className="space-y-2 md:space-y-3">
                      {cocktails[currentCocktail].instructions.map((step, index) => (
                        <li key={index} className="flex">
                          <span className="text-amber-500 font-bold mr-3 flex-shrink-0">
                            {index + 1}.
                          </span>
                          <span className="text-amber-100">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
                
                <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-amber-800/30">
                  <p className="text-amber-500 text-sm italic">
                    <span className="font-bold">Pro Tip:</span> Always use fresh ingredients and premium GOAT Vodka for championship-level cocktails
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center space-x-3 mt-8 md:mt-10">
            {cocktails.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCocktail(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentCocktail 
                    ? 'bg-amber-400 scale-125' 
                    : 'bg-amber-800 hover:bg-amber-600'
                }`}
                aria-label={`Go to cocktail ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CocktailSection;