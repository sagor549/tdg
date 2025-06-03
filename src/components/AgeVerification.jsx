import React, { useState } from 'react';

const AgeVerification = ({ onVerified }) => {
  const [birthDate, setBirthDate] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

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

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
      {/* Updated background with image and glow effects */}
      <div className="absolute inset-0">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/bg5.png')" }}
        ></div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>
        
        {/* Decorative glow elements */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      {/* Verification card */}
      <div className="relative w-full max-w-md rounded-xl overflow-hidden border border-amber-700/30">
        {/* Frosted glass effect */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-lg z-0"></div>
        
        {/* Content */}
        <div className="relative z-10 p-8">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/assets/logo.png" 
              alt="GOAT Vodka" 
              className="w-24 h-24 object-contain"
            />
          </div>
          
          <h1 className="text-3xl font-serif font-bold text-amber-100 mb-2 tracking-wider">
            AGE VERIFICATION
          </h1>
          <p className="text-amber-400 text-sm tracking-widest mb-8 uppercase">
            To access GOAT Vodka, please verify your age
          </p>
          
          <div className="mb-8">
            <div className="w-20 h-px bg-amber-700 mx-auto mb-6"></div>
            <p className="text-gray-300 text-sm mb-6">
              You must be at least 21 years old to enter this website
            </p>
          </div>
          
          <div className="mb-8">
            <label className="block text-amber-500 text-left mb-2 text-sm">
              DATE OF BIRTH
            </label>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full p-3 bg-gray-800/80 text-amber-100 border border-amber-800/50 rounded-lg focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
            />
          </div>
          
          <button
            onClick={verifyAge}
            disabled={isVerifying}
            className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
              isVerifying 
                ? 'bg-amber-800 cursor-not-allowed' 
                : 'bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-600 hover:to-amber-700'
            }`}
          >
            {isVerifying ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                VERIFYING...
              </span>
            ) : (
              "ENTER SITE"
            )}
          </button>
          
          <div className="mt-8 pt-6 border-t border-amber-900/50">
            <p className="text-xs text-gray-400">
              By entering this site, you acknowledge that you are of legal drinking age and agree to our 
              <span className="text-amber-500 cursor-pointer hover:underline ml-1">Terms of Service</span>
            </p>
            <p className="mt-3 text-xs text-gray-500 italic">
              Please enjoy responsibly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgeVerification;