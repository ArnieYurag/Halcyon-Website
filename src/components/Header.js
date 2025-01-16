import React, { useState } from 'react';
import { Menu, X, Search, ShoppingCart } from 'lucide-react';
import '../styles/Header.css';

import logoImage from '../assets/halycon_logo2.png';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Contact', path: '/contact' }
  ];

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    setIsSearchOpen(false);
    setIsCartOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsNavOpen(false);
    setIsCartOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    setIsNavOpen(false);
    setIsSearchOpen(false);
  };

  const closeAllOverlays = () => {
    setIsNavOpen(false);
    setIsCartOpen(false);
    setIsSearchOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          {/* Left - Navigation Toggle */}
          <button
            onClick={toggleNav}
            className="nav-toggle"
            aria-label="Toggle Navigation"
          >
            <Menu size={24} />
          </button>

          {/* Center - Logo */}
          <a href="/" className="logo">
            <img src={logoImage} alt="Halcyon Logo" className="logo-image" />
          </a>

          {/* Right - Search and Cart */}
          <div className="header-actions">
            <button
              onClick={toggleSearch}
              className="action-button"
              aria-label="Toggle Search"
            >
              {isSearchOpen ? <X size={24} /> : <Search size={24} />}
            </button>
            <button
              onClick={toggleCart}
              className="action-button"
              aria-label="Toggle Cart"
            >
              {isCartOpen ? <X size={24} /> : <ShoppingCart size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Overlay */}
      {isNavOpen && (
        <div className="nav-overlay">
          <div className="nav-header">
            <button onClick={toggleNav} className="nav-close">
              <X size={24} />
            </button>
          </div>
          <nav>
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className="nav-link"
                    onClick={() => setIsNavOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="search-overlay">
          <input
            type="search"
            placeholder="Search..."
            className="search-input"
          />
        </div>
      )}

      {/* Cart Overlay */}
      {isCartOpen && (
        <div className="cart-overlay">
          <div className="cart-header">
            <h2 className="cart-title">YOUR CART</h2>
            <button onClick={toggleCart} className="cart-close">
              <X size={24} />
            </button>
          </div>
          <div className="cart-content">
            <p>Your cart is empty.</p>
          </div>
        </div>
      )}

      {/* Backdrop overlay */}
      {(isNavOpen || isCartOpen) && (
  <div 
    className="backdrop-overlay"
    onClick={closeAllOverlays}
  ></div>
)}
    </header>
  );
};

export default Header;  