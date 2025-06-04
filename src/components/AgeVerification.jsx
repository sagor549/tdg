import React, { useState } from 'react';

const AgeVerification = ({ onVerified }) => {
  const [birthDate, setBirthDate] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [activeTab, setActiveTab] = useState('terms'); // 'terms' or 'privacy'

  const verifyAge = () => {
    if (!birthDate) {
      alert('Please enter your birth date');
      return;
    }

    if (!termsAccepted) {
      alert('Please accept the terms and conditions to continue');
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
    <>
      <div className="age-verification-container">
        <div className="age-bg-container">
          <div
            className="age-bg-image"
            style={{ backgroundImage: "url('/assets/bgb.png')" }}
          />
          <div className="age-overlay" />
          <div
            className="age-glow-top"
            style={{ backgroundColor: 'rgba(100, 200, 255, 0.15)' }}
          />
          <div
            className="age-glow-bottom"
            style={{ backgroundColor: 'rgba(100, 200, 255, 0.15)' }}
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
              <div className="relative">
                <input
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="date-input"
                  style={{ 
                    color: 'rgb(250, 250, 255)',
                    colorScheme: 'dark'
                  }}
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  style={{ accentColor: accentColor }}
                />
                <span 
                  className="text-sm leading-relaxed"
                  style={{ color: textSecondary }}
                >
                  I have read and agree to the{' '}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowTermsModal(true);
                    }}
                    className="underline hover:no-underline transition-all duration-200"
                    style={{ color: accentColor }}
                  >
                    Terms and Conditions
                  </button>
                </span>
              </label>
            </div>
            
            <button
              onClick={verifyAge}
              disabled={isVerifying}
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

      {/* Terms and Conditions Modal */}
      {showTermsModal && (
        <div className="terms-modal">
          <div 
            className="terms-modal-backdrop"
            onClick={() => setShowTermsModal(false)}
          />
          <div className="terms-modal-content">
            <div 
              className="terms-modal-glass"
              style={{ background: `linear-gradient(135deg, rgba(100, 200, 255, 0.1), rgba(100, 200, 255, 0.05))` }}
            />
            
            <div className="terms-modal-inner">
              <div className="terms-modal-header">
                <div className="tabs-container">
                  <button
                    className={`tab-button ${activeTab === 'terms' ? 'active' : ''}`}
                    onClick={() => setActiveTab('terms')}
                    style={{ color: activeTab === 'terms' ? accentColor : textSecondary }}
                  >
                    Terms & Conditions
                  </button>
                  <button
                    className={`tab-button ${activeTab === 'privacy' ? 'active' : ''}`}
                    onClick={() => setActiveTab('privacy')}
                    style={{ color: activeTab === 'privacy' ? accentColor : textSecondary }}
                  >
                    Privacy Policy
                  </button>
                </div>
                <button
                  onClick={() => setShowTermsModal(false)}
                  className="terms-modal-close"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              
              <div className="terms-modal-body">
                {activeTab === 'terms' ? (
                  <>
                    <div className="effective-date">
                      <strong>Effective Date:</strong> June 4, 2025
                    </div>
                    
                    <div className="terms-section">
                      <h3 className="terms-section-title" style={{ color: accentColor }}>
                        1. Legal Drinking Age
                      </h3>
                      <p className="terms-section-text" style={{ color: textSecondary }}>
                        You must be of legal drinking age in your province, territory, or country of residence to access or purchase from this Website. By using goatvodka.ca, you confirm that you are of legal age to consume alcohol. We reserve the right to request age verification and refuse service if it isn’t met.
                      </p>
                    </div>
                    
                    <div className="terms-section">
                      <h3 className="terms-section-title" style={{ color: accentColor }}>
                        2. Ownership & Intellectual Property
                      </h3>
                      <p className="terms-section-text" style={{ color: textSecondary }}>
                        Everything on this Website — text, logos, images, videos, bottle designs, and other content — belongs to Goat Vodka Inc. or its partners. You don’t get a license to copy, use, distribute, or repost anything without written permission. Violations may result in legal action.
                      </p>
                    </div>
                    
                    <div className="terms-section">
                      <h3 className="terms-section-title" style={{ color: accentColor }}>
                        3. Permitted Use
                      </h3>
                      <p className="terms-section-text" style={{ color: textSecondary }}>
                        Use this site like a civilized adult:
                        <ul>
                          <li>No hacking, scraping, or tampering.</li>
                          <li>No uploading malicious code or nonsense.</li>
                          <li>No violating any laws while on here.</li>
                        </ul>
                        We reserve the right to suspend or ban you if you abuse the platform.
                      </p>
                    </div>
                    
                    <div className="terms-section">
                      <h3 className="terms-section-title" style={{ color: accentColor }}>
                        4. Product Information & Availability
                      </h3>
                      <p className="terms-section-text" style={{ color: textSecondary }}>
                        Prices, product details, and availability are subject to change without notice. We don’t guarantee every product shown is always in stock. If something's out, deal with it — we’ll restock when we can.
                      </p>
                    </div>
                    
                    <div className="terms-section">
                      <h3 className="terms-section-title" style={{ color: accentColor }}>
                        5. Shipping & Delivery
                      </h3>
                      <p className="terms-section-text" style={{ color: textSecondary }}>
                        We only ship where it’s legal to do so in Canada. Age verification is required upon delivery — if you can’t prove you're legal age, the order’s canceled and non-refundable. We don’t ship outside Canada (yet), and we’re not responsible for delays once your order leaves our hands.
                      </p>
                    </div>
                    
                    <div className="terms-section">
                      <h3 className="terms-section-title" style={{ color: accentColor }}>
                        6. Returns & Refunds
                      </h3>
                      <p className="terms-section-text" style={{ color: textSecondary }}>
                        All alcohol sales are final. We don’t offer returns unless there’s a serious issue like a damaged or incorrect product. If that happens, email us at info@goatvodka.ca within 7 days of receiving your order. Don’t abuse the policy.
                      </p>
                    </div>
                    
                    <div className="terms-section">
                      <h3 className="terms-section-title" style={{ color: accentColor }}>
                        7. No Warranties
                      </h3>
                      <p className="terms-section-text" style={{ color: textSecondary }}>
                        This Website is offered “as is” — no promises, no guarantees. We don’t make claims about the accuracy, completeness, or uptime. You use it at your own risk.
                      </p>
                    </div>
                    
                    <div className="terms-section">
                      <h3 className="terms-section-title" style={{ color: accentColor }}>
                        8. Limitation of Liability
                      </h3>
                      <p className="terms-section-text" style={{ color: textSecondary }}>
                        Goat Vodka Inc. and its team aren’t liable for any damages — direct, indirect, accidental, or otherwise — that come from using this Website, our products, or trusting content you read here.
                      </p>
                    </div>
                    
                    <div className="terms-section">
                      <h3 className="terms-section-title" style={{ color: accentColor }}>
                        9. Indemnification
                      </h3>
                      <p className="terms-section-text" style={{ color: textSecondary }}>
                        If you screw something up using this Website or violate these Terms, you agree to defend, indemnify, and hold harmless Goat Vodka Inc. from any claims, losses, legal fees, and damages.
                      </p>
                    </div>
                    
                    <div className="terms-section">
                      <h3 className="terms-section-title" style={{ color: accentColor }}>
                        10. External Links
                      </h3>
                      <p className="terms-section-text" style={{ color: textSecondary }}>
                        We might link to other websites for convenience. Clicking those is on you — we don’t control them, we don’t endorse them, and we’re not responsible for what they do with your info.
                      </p>
                    </div>
                    
                    <div className="terms-section">
                      <h3 className="terms-section-title" style={{ color: accentColor }}>
                        11. Privacy
                      </h3>
                      <p className="terms-section-text" style={{ color: textSecondary }}>
                        We respect your privacy. For details on how we handle your data, check our Privacy Policy. Spoiler: we’re not creepy about it.
                      </p>
                    </div>
                    
                    <div className="terms-section">
                      <h3 className="terms-section-title" style={{ color: accentColor }}>
                        12. Governing Law
                      </h3>
                      <p className="terms-section-text" style={{ color: textSecondary }}>
                        This site operates under the laws of Ontario, Canada. Any legal disputes will be handled exclusively in the courts of Ontario.
                      </p>
                    </div>
                    
                    <div className="terms-section">
                      <h3 className="terms-section-title" style={{ color: accentColor }}>
                        13. Updates to These Terms
                      </h3>
                      <p className="terms-section-text" style={{ color: textSecondary }}>
                        We may update these Terms at any time without notice. Changes take effect when posted. Keep checking if you care — by continuing to use the site, you agree to the new version.
                      </p>
                    </div>
                    
                    <div className="terms-section">
                      <h3 className="terms-section-title" style={{ color: accentColor }}>
                        14. Contact Us
                      </h3>
                      <p className="terms-section-text" style={{ color: textSecondary }}>
                        Got questions? Want to yell at us? Here's how:
                        <br />
                        📧 info@goatvodka.ca
                        <br />
                        📍 Goat Vodka Inc., Toronto, Ontario, Canada
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="effective-date">
                      <strong>Effective Date:</strong> June 4, 2025
                    </div>
                    
                    <div className="terms-section">
                      <h3 className="terms-section-title" style={{ color: accentColor }}>
                        1. Introduction
                      </h3>
                      <p className="terms-section-text" style={{ color: textSecondary }}>
                        Welcome to goatvodka.ca. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our Website or services.
                      </p>
                    </div>
                    
                    <div className="terms-section">
                      <h3 className="terms-section-title" style={{ color: accentColor }}>
                        2. Information We Collect
                      </h3>
                      <p className="terms-section-text" style={{ color: textSecondary }}>
                        We may collect the following types of information:
                        <ul>
                          <li><strong>Personal Information:</strong> Name, email address, phone number, shipping and billing address, and age verification details.</li>
                          <li><strong>Payment Information:</strong> Processed securely by third-party payment processors. We do not store your credit card details.</li>
                          <li><strong>Technical Data:</strong> IP address, browser type, device information, and usage patterns via cookies and analytics tools.</li>
                        </ul>
                      </p>
                    </div>
                    
                    <div className="terms-section">
                      <h3 className="terms-section-title" style={{ color: accentColor }}>
                        3. How We Use Your Information
                      </h3>
                      <p className="terms-section-text" style={{ color: textSecondary }}>
                        We use your information to:
                        <ul>
                          <li>Process and fulfill your orders</li>
                          <li>Verify your age and identity</li>
                          <li>Improve our Website and services</li>
                          <li>Send marketing emails (you can opt out anytime)</li>
                          <li>Comply with legal obligations</li>
                        </ul>
                      </p>
                    </div>
                    
                    <div className="terms-section">
                      <h3 className="terms-section-title" style={{ color: accentColor }}>
                        4. Sharing Your Information
                      </h3>
                      <p className="terms-section-text" style={{ color: textSecondary }}>
                        We do not sell your personal information. We may share it with:
                        <ul>
                          <li>Trusted service providers (e.g. payment processors, delivery services)</li>
                          <li>Government authorities, if required by law</li>
                        </ul>
                      </p>
                    </div>
                    
                    <div className="terms-section">
                      <h3 className="terms-section-title" style={{ color: accentColor }}>
                        5. Cookies and Tracking
                      </h3>
                      <p className="terms-section-text" style={{ color: textSecondary }}>
                        We use cookies and similar technologies to improve user experience and analyze site traffic. You can manage cookie settings in your browser.
                      </p>
                    </div>
                    
                    <div className="terms-section">
                      <h3 className="terms-section-title" style={{ color: accentColor }}>
                        6. Data Security
                      </h3>
                      <p className="terms-section-text" style={{ color: textSecondary }}>
                        We take data protection seriously and use appropriate security measures to protect your personal information. However, no system is 100% secure, so use this Website at your own risk.
                      </p>
                    </div>
                    
                    <div className="terms-section">
                      <h3 className="terms-section-title" style={{ color: accentColor }}>
                        7. Your Rights
                      </h3>
                      <p className="terms-section-text" style={{ color: textSecondary }}>
                        You have the right to:
                        <ul>
                          <li>Access your personal information</li>
                          <li>Request corrections</li>
                          <li>Request deletion, subject to legal limits</li>
                          <li>Withdraw consent to marketing communications</li>
                        </ul>
                      </p>
                    </div>
                    
                    <div className="terms-section">
                      <h3 className="terms-section-title" style={{ color: accentColor }}>
                        8. Third-Party Links
                      </h3>
                      <p className="terms-section-text" style={{ color: textSecondary }}>
                        Our Website may contain links to external sites. We are not responsible for the privacy practices of other websites. Check their policies separately.
                      </p>
                    </div>
                    
                    <div className="terms-section">
                      <h3 className="terms-section-title" style={{ color: accentColor }}>
                        9. Changes to This Policy
                      </h3>
                      <p className="terms-section-text" style={{ color: textSecondary }}>
                        We may update this Privacy Policy from time to time. Updates will be posted here with a new effective date. Continued use of the Website means you accept the revised policy.
                      </p>
                    </div>
                    
                    <div className="terms-section">
                      <h3 className="terms-section-title" style={{ color: accentColor }}>
                        10. Contact Us
                      </h3>
                      <p className="terms-section-text" style={{ color: textSecondary }}>
                        If you have any questions about this Privacy Policy, contact us at:
                        <br />
                        📧 info@goatvodka.ca
                        <br />
                        📍 Goat Vodka Inc., Toronto, Ontario, Canada
                      </p>
                    </div>
                  </>
                )}
              </div>
              
              <div className="terms-modal-footer">
                <button
                  onClick={() => setShowTermsModal(false)}
                  className="terms-modal-button"
                  style={{
                    background: `linear-gradient(135deg, rgba(100, 200, 255, 0.2), rgba(100, 200, 255, 0.1))`,
                    color: 'rgb(250, 250, 255)',
                    border: `1px solid rgba(100, 200, 255, 0.3)`
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <style jsx>{`
        .age-verification-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          z-index: 1000;
        }
        
        .age-bg-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        
        .age-bg-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        
        .age-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(2px);
        }
        
        .age-glow-top {
          position: absolute;
          top: -50%;
          left: -25%;
          width: 150%;
          height: 100%;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
        }
        
        .age-glow-bottom {
          position: absolute;
          bottom: -50%;
          right: -25%;
          width: 150%;
          height: 100%;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
        }
        
        .verification-card {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 450px;
          margin: 0 20px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
        }
        
        .glass-effect {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(20, 20, 40, 0.85);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(100, 200, 255, 0.1);
          border-radius: 20px;
        }
        
        .card-content {
          position: relative;
          z-index: 2;
          padding: 40px;
          text-align: center;
        }
        
        .logo-container {
          margin-bottom: 30px;
        }
        
        .logo {
          height: 80px;
          width: auto;
          filter: drop-shadow(0 4px 12px rgba(100, 200, 255, 0.3));
        }
        
        .title {
          font-size: 28px;
          font-weight: 700;
          letter-spacing: 3px;
          margin-bottom: 20px;
          text-shadow: 0 0 20px rgba(100, 200, 255, 0.5);
        }
        
        .divider {
          height: 2px;
          width: 60%;
          margin: 0 auto 25px;
          border-radius: 2px;
        }
        
        .subtitle {
          font-size: 16px;
          margin-bottom: 20px;
          font-weight: 400;
        }
        
        .info-text {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.5;
        }
        
        .input-label {
          display: block;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2px;
          margin-bottom: 8px;
          text-align: left;
        }
        
        .date-input {
          width: 100%;
          padding: 12px 16px;
          background: rgba(30, 30, 60, 0.6);
          border: 1px solid rgba(100, 200, 255, 0.2);
          border-radius: 10px;
          font-size: 16px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }
        
        .date-input:focus {
          outline: none;
          border-color: rgba(100, 200, 255, 0.5);
          box-shadow: 0 0 20px rgba(100, 200, 255, 0.2);
        }
        
        .verify-button {
          position: relative;
          width: 100%;
          padding: 16px 24px;
          border: 1px solid rgba(100, 200, 255, 0.3);
          border-radius: 12px;
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 2px;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
          backdrop-filter: blur(10px);
        }
        
        .verify-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(100, 200, 255, 0.3);
          border-color: rgba(100, 200, 255, 0.5);
        }
        
        .verify-button:disabled {
          cursor: not-allowed;
          opacity: 0.7;
        }
        
        .button-hover-effect {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          transition: left 0.5s ease;
          pointer-events: none;
        }
        
        .verify-button:hover .button-hover-effect {
          left: 100%;
        }
        
        .terms-container {
          margin-top: 25px;
        }
        
        .responsible-text {
          font-size: 12px;
          font-style: italic;
        }
        
        .corner {
          position: absolute;
          width: 20px;
          height: 20px;
          border: 2px solid;
        }
        
        .corner-tl {
          top: 15px;
          left: 15px;
          border-right: none;
          border-bottom: none;
          border-top-left-radius: 5px;
        }
        
        .corner-tr {
          top: 15px;
          right: 15px;
          border-left: none;
          border-bottom: none;
          border-top-right-radius: 5px;
        }
        
        .corner-bl {
          bottom: 15px;
          left: 15px;
          border-right: none;
          border-top: none;
          border-bottom-left-radius: 5px;
        }
        
        .corner-br {
          bottom: 15px;
          right: 15px;
          border-left: none;
          border-top: none;
          border-bottom-right-radius: 5px;
        }
        
        /* Terms Modal Styles */
        .terms-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
        }
        
        .terms-modal-backdrop {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(5px);
        }
        
        .terms-modal-content {
          position: relative;
          width: 90%;
          max-width: 700px;
          max-height: 90vh;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
        }
        
        .terms-modal-glass {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(20, 20, 40, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(100, 200, 255, 0.1);
        }
        
        .terms-modal-inner {
          position: relative;
          z-index: 2;
          padding: 30px;
        }
        
        .terms-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
          flex-wrap: wrap;
        }
        
        .tabs-container {
          display: flex;
          gap: 20px;
          margin-bottom: 15px;
          width: 100%;
          border-bottom: 1px solid rgba(100, 200, 255, 0.2);
        }
        
        .tab-button {
          background: transparent;
          border: none;
          padding: 10px 0;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          position: relative;
          transition: all 0.3s ease;
        }
        
        .tab-button.active {
          color: rgb(100, 200, 255);
        }
        
        .tab-button.active::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 3px;
          background: rgb(100, 200, 255);
          border-radius: 3px;
        }
        
        .terms-modal-title {
          font-size: 24px;
          font-weight: 700;
          margin: 0;
        }
        
        .terms-modal-close {
          background: transparent;
          border: none;
          cursor: pointer;
          color: ${textSecondary};
          transition: all 0.2s ease;
          padding: 5px;
          position: absolute;
          top: 20px;
          right: 20px;
        }
        
        .terms-modal-close:hover {
          color: white;
          transform: scale(1.1);
        }
        
        .terms-modal-body {
          overflow-y: auto;
          max-height: 60vh;
          padding-right: 15px;
          
          /* Custom scrollbar styling */
          scrollbar-width: thin;
          scrollbar-color: rgba(100, 200, 255, 0.5) rgba(20, 20, 40, 0.5);
        }
        
        /* Scrollbar styling for WebKit browsers */
        .terms-modal-body::-webkit-scrollbar {
          width: 8px;
        }
        
        .terms-modal-body::-webkit-scrollbar-track {
          background: rgba(20, 20, 40, 0.5);
          border-radius: 4px;
        }
        
        .terms-modal-body::-webkit-scrollbar-thumb {
          background: rgba(100, 200, 255, 0.5);
          border-radius: 4px;
        }
        
        .terms-modal-body::-webkit-scrollbar-thumb:hover {
          background: rgba(100, 200, 255, 0.7);
        }
        
        .effective-date {
          color: ${textSecondary};
          font-size: 14px;
          margin-bottom: 20px;
          text-align: right;
          font-style: italic;
        }
        
        .terms-section {
          margin-bottom: 25px;
        }
        
        .terms-section-title {
          font-size: 18px;
          font-weight: 600;
          margin-top: 0;
          margin-bottom: 12px;
        }
        
        .terms-section-text {
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 10px;
          color: ${textSecondary};
        }
        
        .terms-section-text ul {
          margin: 10px 0;
          padding-left: 20px;
        }
        
        .terms-section-text li {
          margin-bottom: 8px;
        }
        
        .terms-modal-footer {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .terms-modal-button {
          width: 100%;
          padding: 12px 24px;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .terms-modal-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(100, 200, 255, 0.2);
        }
        
        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .verification-card {
            max-width: 90%;
          }
          
          .card-content {
            padding: 30px;
          }
          
          .title {
            font-size: 24px;
          }
          
          .subtitle {
            font-size: 15px;
          }
          
          .terms-modal-inner {
            padding: 20px;
          }
          
          .tabs-container {
            gap: 10px;
          }
          
          .tab-button {
            font-size: 14px;
          }
        }
        
        @media (max-width: 480px) {
          .verification-card {
            max-width: 95%;
            margin: 0 10px;
          }
          
          .card-content {
            padding: 25px 20px;
          }
          
          .logo {
            height: 60px;
          }
          
          .title {
            font-size: 20px;
            letter-spacing: 1px;
            margin-bottom: 15px;
          }
          
          .divider {
            margin-bottom: 15px;
          }
          
          .subtitle {
            font-size: 14px;
            margin-bottom: 15px;
          }
          
          .info-text {
            font-size: 13px;
          }
          
          .input-label {
            font-size: 11px;
          }
          
          .date-input {
            padding: 10px 14px;
            font-size: 14px;
          }
          
          .verify-button {
            padding: 14px 18px;
            font-size: 14px;
          }
          
          .terms-container {
            margin-top: 15px;
          }
          
          .terms-modal-body {
            max-height: 55vh;
          }
          
          .terms-section-title {
            font-size: 16px;
          }
          
          .terms-section-text {
            font-size: 13px;
          }
        }
        
        @media (max-height: 700px) and (max-width: 480px) {
          .verification-card {
            max-height: 95vh;
            overflow-y: auto;
          }
          
          .card-content {
            padding: 20px 15px;
          }
        }
      `}</style>
    </>
  );
};

export default AgeVerification;