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

  // Theme colors
  const accentColor = 'rgb(100, 200, 255)';
  const textSecondary = 'rgba(250, 250, 255, 0.7)';
  const textTertiary = 'rgba(250, 250, 255, 0.5)';

  return (
    <div className="age-verification-container">
      <div className="age-bg-container">
        <div 
          className="age-bg-image" 
          style={{ backgroundImage: "url('/assets/bgb.png')" }}
        />
        <div className="age-overlay" />
        <div 
          className="age-glow-top" 
          style={{ backgroundColor: `rgba(100, 200, 255, 0.15)` }}
        />
        <div 
          className="age-glow-bottom" 
          style={{ backgroundColor: `rgba(100, 200, 255, 0.15)` }}
        />
      </div>
      
      <div className="verification-card">
        <div className="glass-effect" />
        
        <div className="card-content">
          <div className="logo-container">
            <img 
              src="/assets/logo.png" 
              alt="GOAT Vodka" 
              className="logo"
            />
          </div>
          
          <h1 
            className="title" 
            style={{ color: accentColor }}
          >
            AGE VERIFICATION
          </h1>
          
          <div 
            className="divider" 
            style={{ background: `linear-gradient(to right, transparent, ${accentColor}, transparent)` }} 
          />
          
          <p 
            className="subtitle" 
            style={{ color: textSecondary }}
          >
            To access GOAT Vodka, please verify your age
          </p>
          
          <div className="mb-8">
            <p 
              className="info-text" 
              style={{ color: textSecondary }}
            >
              You must be at least 21 years old to enter this website
            </p>
          </div>
          
          <div className="mb-8">
            <label 
              className="input-label" 
              style={{ color: accentColor }}
            >
              DATE OF BIRTH
            </label>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="date-input"
              style={{ color: 'rgb(250, 250, 255)' }}
            />
          </div>
          
          <button
            onClick={verifyAge}
            disabled={isVerifying}
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
            className="verify-button"
            style={{
              background: isVerifying 
                ? 'rgb(24, 22, 77)'
                : `linear-gradient(135deg, rgba(100, 200, 255, 0.2), rgba(100, 200, 255, 0.05))`,
              color: 'rgb(250, 250, 255)'
            }}
          >
            <span className="flex items-center justify-center">
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
            
            {!isVerifying && (
              <div 
                className="button-hover-effect"
                style={{
                  background: `linear-gradient(90deg, transparent, rgba(100, 200, 255, 0.15), transparent)`
                }}
              />
            )}
          </button>
          
          <div className="terms-container">
            <p 
              className="terms-text" 
              style={{ color: textTertiary }}
            >
              By entering this site, you acknowledge that you are of legal drinking age and agree to our 
              <span 
                className="terms-link" 
                style={{ color: accentColor }}
              >
                Terms of Service
              </span>
            </p>
            <p 
              className="responsible-text" 
              style={{ color: textTertiary }}
            >
              Please enjoy responsibly
            </p>
          </div>
        </div>
        
        <div 
          className="corner corner-tl" 
          style={{ borderColor: accentColor }} 
        />
        <div 
          className="corner corner-tr" 
          style={{ borderColor: accentColor }} 
        />
        <div 
          className="corner corner-bl" 
          style={{ borderColor: accentColor }} 
        />
        <div 
          className="corner corner-br" 
          style={{ borderColor: accentColor }} 
        />
      </div>
    </div>
  );
};

export default AgeVerification;