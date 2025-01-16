import React, { useState } from 'react';
import { Send, Facebook, Twitter, Instagram } from 'lucide-react';
import '../styles/Footer.css'

import logoImage from '../assets/halycon_logo2.png';
import newsLetterImage from '../assets/newsLetterImage.jpg'

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="footer">
      {/* Newsletter Section */}
       <div className="newsletter-section">
        <div className="newsletter-image-container">
          <img 
            src={newsLetterImage}
            alt="Flower Arrangement"
            className="newsLetterImage"
          />
        </div>
        <div className="newsLetterContent">
          <h3 className="newsletter-title">
            Bloom with Us
          </h3>
          <p className="newsletter-text">
            Subscribe for fresh flower inspiration, seasonal updates, and exclusive offers
          </p>
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="email-input"
              required
            />
            <button
              type="submit"
              className="subscribe-button"
            >
              Subscribe
              <Send size={16} />
            </button>
          </form>
          {/* Social Media Links */}
          <div className="social-links">
            <a href="#" className="social-icon">
              <Facebook size={34} />
            </a>
            <a href="#" className="social-icon">
              <Twitter size={34} />
            </a>
            <a href="#" className="social-icon">
              <Instagram size={34} />
            </a>
          </div>
        </div>
      </div> 
      <div className="copyright">
            <p>© {new Date().getFullYear()} Halcyon. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;