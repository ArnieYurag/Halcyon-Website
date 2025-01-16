import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/LandingPage.css';

import heroImage from '../assets/heroImage1.jpeg';
import sunshineBouquetImage from '../assets/sunshine_bouquet.png';
import lavenderBouquetImage from '../assets/lavender_bouquet.png';
import scarletBouquetImage from '../assets/scarlet_bouquet.png';

const testimonials = [
  {
    id: 1,
    text: "The bouquet I ordered for my mother's birthday was absolutely stunning. The flowers were fresh and arranged beautifully!",
    author: "Sarah Mitchell"
  },
  {
    id: 2,
    text: "Exceptional service and gorgeous flowers. They created exactly what I envisioned for my wedding day.",
    author: "Emma Thompson"
  },
  {
    id: 3,
    text: "I'm a regular customer and they never disappoint. Their seasonal arrangements are always creative and beautiful.",
    author: "Michael Chen"
  },
  {
    id: 4,
    text: "The most reliable flower shop in town. Their same-day delivery service has saved me multiple times!",
    author: "David Wilson"
  }
];

const featuredProducts = [
  {
    id: 1,
    name: "Sunshine Bouquet",
    price: "$59.99",
    description: "A vibrant mix of yellow roses and white primrose",
    image: sunshineBouquetImage
  },
  {
    id: 2,
    name: "Lavender Dreams",
    price: "$69.99",
    description: "A tranquil arrangement of lavender, and lilac-colored roses",
    image : lavenderBouquetImage
  },
  {
    id: 3,
    name: "Scarlet Elegance",
    price: "$54.99",
    description: "Dramatic bouquet of deep red roses, and burgundy daisies ",
    image: scarletBouquetImage
  },

];

const LandingPage = () => {
    const [currentProduct, setCurrentProduct] = useState(0);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const nextProduct = () => {
    setCurrentProduct((prev) => (prev + 1) % featuredProducts.length);
  };

  const prevProduct = () => {
    setCurrentProduct((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <img 
          src={heroImage}
          alt="Beautiful flower arrangement"
          className="heroImage"
        />
        <div className="heroOverlay">
          <div className="heroContent">
            <h1 className="heroTitle">Blooming Beauties</h1>
            <p className="heroText">Crafting Natural Beauty into Memorable Moments</p>
            <button className="button">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="section">
        <div className="sectionContainer">
            <h2 className="sectionTitle">
                Flowers of the Season
            </h2>
          <div className='carouselContainer'>
          <div className="productSection">
            <button
              onClick={prevProduct}
              className="navigationButton navigationButtonLeft"
            >
              <ChevronLeft className="navigationIcon" />
            </button>

            <div className="productsRow">
              {featuredProducts.map((product, index) => {
                const isCurrent = index === currentProduct;
                return (
                  <div
                    key={product.id}
                    className={`productContainer ${isCurrent ? 'currentProduct' : ''}`}
                  >
                    <div className="productContent">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className={`productImage ${isCurrent ? 'currentImage' : ''}`}
                      />
                      <h3 className={`productTitle ${isCurrent ? '' : ''}`}>
                        {product.name}
                      </h3>
                      <p className={`productPrice ${isCurrent ? '' : ''}`}>
                        {product.price}
                      </p>
                      <p className={`productDescription ${isCurrent ? '' : ''}`}>
                        {product.description}
                      </p>
                      {isCurrent && <button className="button">Add to Cart</button>}
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={nextProduct}
              className="navigationButton navigationButtonRight"
            >
              <ChevronRight className="navigationIcon" />
            </button>
          </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="sectionTestimonials">
        <div className="sectionContainer">
          <h2 className="sectionTitle">
            What Our Customers Say
          </h2>
          
          <div className="carouselContainer">
            <div className="testimonialContainer">
              <div className="testimonialContent">
                <p className="testimonialText">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <p className="testimonialAuthor">
                  - {testimonials[currentTestimonial].author}
                </p>
              </div>
            </div>
            
            <div className="dotsContainer">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`dot ${currentTestimonial === index ? 'dotActive' : 'dotInactive'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
