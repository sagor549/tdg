import React, { useState } from 'react';

const AgeVerification = ({ onVerified }) => {
  const [birthDate, setBirthDate] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);

  const verifyAge = () => {
    if (!birthDate) {
      alert('Please enter your birth date');
      return;
    }
    
    setIsVerifying(true);
    setTimeout(() => {
      const today = new Date();
      const birth = new Date(birthDate);
      let age = today.getFullYear() - birth.getFullYear();
      const monthDiff = today.getMonth() - birth.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
      }
      
      if (age >= 21) {
        onVerified();
      } else {
        alert('You must be 21 or older to access this website.');
      }
      setIsVerifying(false);
    }, 800);
  };

  // Theme color definitions
  const primaryColor = 'rgb(34, 32, 87)';
  const primaryLight = 'rgb(54, 52, 107)';
  const primaryDark = 'rgb(24, 22, 77)';
  const accentColor = 'rgb(100, 200, 255)';
  const textPrimary = 'rgb(250, 250, 255)';
  const textSecondary = 'rgba(250, 250, 255, 0.7)';
  const textTertiary = 'rgba(250, 250, 255, 0.5)';

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 z-[999]">
      {/* Background with image and glow effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/bgb.png')" }}
        ></div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0  backdrop-blur-lg"></div>
        
        {/* Decorative glow elements */}
        <div 
          className="absolute top-20 left-0 w-64 h-64 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
          style={{ backgroundColor: `rgba(100, 200, 255, 0.15)` }}
        ></div>
        <div 
          className="absolute bottom-20 right-0 w-80 h-80 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
          style={{ backgroundColor: `rgba(100, 200, 255, 0.15)` }}
        ></div>
      </div>
      
      {/* Verification card */}
      <div 
        className="relative w-full max-w-md rounded-2xl overflow-hidden border border-indigo-600/30 shadow-2xl"
        style={{ 
          
          boxShadow: '0 20px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(100, 200, 255, 0.15)'
        }}
      >
        {/* Frosted glass effect */}
        <div 
          className="absolute inset-0 backdrop-blur-lg z-0"
          
        ></div>
        
        {/* Content */}
        <div className="relative z-10 p-8">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/assets/logo.png" 
              alt="GOAT Vodka" 
              className="w-28 h-28 object-contain drop-shadow-lg"
            />
          </div>
          
          <h1 
            className="text-3xl font-serif font-bold mb-2 tracking-wider text-center"
            style={{ 
              color: accentColor,
              textShadow: '0 2px 10px rgba(100, 200, 255, 0.3)'
            }}
          >
            AGE VERIFICATION
          </h1>
          <div className="flex justify-center my-4">
            <div className="w-24 h-1 rounded-full" style={{ 
              background: `linear-gradient(to right, transparent, ${accentColor}, transparent)` 
            }}></div>
          </div>
          <p 
            className="text-sm tracking-widest mb-8 uppercase text-center"
            style={{ color: textSecondary }}
          >
            To access GOAT Vodka, please verify your age
          </p>
          
          <div className="mb-8">
            <p 
              className="text-sm mb-6 text-center"
              style={{ color: textSecondary }}
            >
              You must be at least 21 years old to enter this website
            </p>
          </div>
          
          <div className="mb-8">
            <label 
              className="block text-left mb-2 text-sm uppercase tracking-wider"
              style={{ color: accentColor }}
            >
              DATE OF BIRTH
            </label>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{ 
                backgroundColor: `rgba(24, 22, 77, 0.7)`,
                color: textPrimary,
                border: `1px solid rgba(100, 200, 255, 0.2)`,
                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.3), 0 2px 6px rgba(0,0,0,0.1)',
                borderRadius: '12px',
                fontSize: '1rem',
                focusBorderColor: accentColor,
                focusRing: `2px solid rgba(100, 200, 255, 0.4)`,
                focusRingOffset: `2px`
              }}
            />
          </div>
          
          <button
            onClick={verifyAge}
            disabled={isVerifying}
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
            className="w-full py-4 px-6 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 relative overflow-hidden"
            style={{
              background: isVerifying 
                ? primaryDark
                : `linear-gradient(135deg, rgba(100, 200, 255, 0.2), rgba(100, 200, 255, 0.05))`,
              color: textPrimary,
              border: `1px solid rgba(100, 200, 255, 0.3)`,
              boxShadow: buttonHover && !isVerifying 
                ? '0 6px 15px rgba(100, 200, 255, 0.3), inset 0 0 15px rgba(100, 200, 255, 0.1)' 
                : '0 4px 10px rgba(0,0,0,0.2), inset 0 0 10px rgba(100, 200, 255, 0.05)',
              transform: buttonHover && !isVerifying ? 'translateY(-3px)' : 'none',
              focusRing: `2px solid rgba(100, 200, 255, 0.4)`,
              focusRingOffset: `2px`
            }}
          >
            <span className="relative z-10 flex items-center justify-center">
              {isVerifying ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  VERIFYING...
                </>
              ) : (
                "ENTER SITE"
              )}
            </span>
            {/* Animated background */}
            {!isVerifying && (
              <div 
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, rgba(100, 200, 255, 0.15), transparent)`
                }}
              ></div>
            )}
          </button>
          
          <div 
            className="mt-8 pt-6"
            style={{ borderTop: `1px solid rgba(100, 200, 255, 0.2)` }}
          >
            <p 
              className="text-xs text-center"
              style={{ color: textTertiary }}
            >
              By entering this site, you acknowledge that you are of legal drinking age and agree to our 
              <span 
                className="ml-1 cursor-pointer hover:underline"
                style={{ color: accentColor }}
              >
                Terms of Service
              </span>
            </p>
            <p 
              className="mt-3 text-xs italic text-center"
              style={{ color: textTertiary }}
            >
              Please enjoy responsibly
            </p>
          </div>
        </div>
        
        {/* Decorative corner elements */}
        <div 
          className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2"
          style={{ borderColor: accentColor }}
        ></div>
        <div 
          className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2"
          style={{ borderColor: accentColor }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2"
          style={{ borderColor: accentColor }}
        ></div>
        <div 
          className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2"
          style={{ borderColor: accentColor }}
        ></div>
      </div>
    </div>
  );
};

export default AgeVerification;