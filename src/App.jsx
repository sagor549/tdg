import React, { useState } from 'react';
import AgeVerification from './components/AgeVerification';
import Header from './components/Header';
import Home from './components/Home';
import Media from './components/Media';
import Blog from './components/Blog';
import Contact from './components/Contact';

const App = () => {
  const [showAgeVerification, setShowAgeVerification] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [headerHeight, setHeaderHeight] = useState(112); // Initial header height (7rem = 112px)

  if (showAgeVerification) {
    return (
      <AgeVerification 
        onVerified={() => setShowAgeVerification(false)} 
      />
    );
  }

  const renderPage = () => {
    switch(currentPage) {
      case 'media':
        return <Media headerHeight={headerHeight} />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fixed background layers */}
      <div className="fixed inset-0 -z-10">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('/assets/bg5.png')`,
          }}
        ></div>
        
        {/* Blur overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-lg z-0"></div>
      
      {/* Decorative glow elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      {/* Content container */}
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