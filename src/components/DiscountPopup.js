import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import '../styles/DiscountPopup.css';

const DiscountPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasBeenShown) return;

      const footer = document.querySelector('.footer');
      if (!footer) return;

      const footerPosition = footer.getBoundingClientRect();
      const isFooterVisible = footerPosition.top <= window.innerHeight;

      if (isFooterVisible) {
        setIsVisible(true);
        setHasBeenShown(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasBeenShown]);

  if (!isVisible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content animate-fade-up delay-200">
        <button 
          className="popup-close"
          onClick={() => setIsVisible(false)}
        >
          <X size={24} />
        </button>
        
        <div className="popup-content-inner">
          <h1 className="popup-title">Get 10% Off</h1>
          <p className="popup-text">off your first or next purchase</p>
          
          <button 
            className="popup-button"
            onClick={() => setIsVisible(false)}
          >
            I want 10% off
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscountPopup;