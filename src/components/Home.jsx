import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import CocktailSection from './CocktailSection';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <CocktailSection />
      <Footer />
    </div>
  );
};

export default Home;