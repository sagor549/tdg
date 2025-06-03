import React, { useState, useEffect } from 'react';
import AgeVerification from './components/AgeVerification';
import Header from './components/Header';
import Home from './components/Home';
import Media from './components/Media';
import Blog from './components/Blog';
import Contact from './components/Contact';

const App = () => {
  const [showAgeVerification, setShowAgeVerification] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [headerHeight, setHeaderHeight] = useState(112);

  useEffect(() => {
    const isVerified = localStorage.getItem('ageVerified') === 'true';
    setShowAgeVerification(!isVerified);
  }, []);

  const handleVerification = () => {
    localStorage.setItem('ageVerified', 'true');
    setShowAgeVerification(false);
  };

  if (showAgeVerification) {
    return <AgeVerification onVerified={handleVerification} />;
  }

  const renderPage = () => {
    switch(currentPage) {
      case 'media': return <Media headerHeight={headerHeight} />;
      case 'blog': return <Blog />;
      case 'contact': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('/assets/bgb.png')`,
            zIndex: 0
          }}
        />
        <div className="absolute inset-0 z-0" style={{ backdropFilter: 'blur(8px)' }} />
        <div 
          className="absolute top-20 left-0 w-64 h-64 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
          style={{ 
            backgroundColor: 'rgba(100, 200, 255, 0.15)',
            zIndex: 1
          }}
        />
      </div>
      
      <div className="relative z-10">
        <Header 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
          onHeightChange={setHeaderHeight}
        />
        <div className={currentPage === 'media' ? '' : 'pt-32'}>
          {renderPage()}
        </div>
      </div>
    </div>
  );
};

export default App;