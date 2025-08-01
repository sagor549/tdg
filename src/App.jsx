// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AlcoholBrandCreation from './pages/AlcoholBrandCreation';
import CoPackingServices from './pages/CoPackingServices';
import Contact from './pages/Contact';
import Foo from './components/Foo';

function App() {
  useEffect(() => {
    // Initialize GSAP ScrollTrigger
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    
    if (gsap && ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.defaults({
        toggleActions: "play none none none"
      });
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/alcohol-brand-creation" element={<AlcoholBrandCreation />} />
            <Route path="/co-packing-services" element={<CoPackingServices />} />
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
          
        </main>
        
        <section className='relative  md:bottom-0'>
        <Footer />
        </section>
       
      </div>
    </Router>
  );
}

export default App;