import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/LandingPage.css';

import ItemCard from '../components/ItemCard';

import heroImage from '../assets/heroImage1.jpeg';
import sunshineBouquetImage from '../assets/flowers/sunshine_bouquet.png';
import lavenderBouquetImage from '../assets/flowers/lavender_bouquet.png';
import pinkBouquetImage from '../assets/flowers/pinkdelight_bouquet.png';
import weddingImage from '../assets/weddingImage.jpg';
import birthdayImage from '../assets/birthdayImage.jpg'
import funeralImage from '../assets/funeralImage.jpg'

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
    name: "Sunshines",
    price: "$59.99",
    description: "A vibrant mix of yellow roses and white primrose",
    image: sunshineBouquetImage
  },
  {
    id: 2,
    name: "Pink Delight",
    price: "$79.99",
    description: "A charming pink flowers, perfect for expressing admiration",
    image : pinkBouquetImage
  },
  {
    id: 3,
    name: "Lavender Dreams",
    price: "$69.99",
    description: "A tranquil arrangement of lavender, and lilac-colored roses",
    image : lavenderBouquetImage
  },

];

const occasions = [
  {
    id: 1,
    title: "Weddings",
    description: "Make your special day unforgettable with our elegant wedding flowers",
    image: weddingImage
  },
  {
    id: 2,
    title: "Birthdays",
    description: "Celebrate life's milestones with our beautiful birthday arrangements",
    image: birthdayImage
  },
  {
    id: 3,
    title: "Funerals",
    description: "Express your sympathy with our respectful memorial arrangements",
    image: funeralImage
  },
];

const LandingPage = () => {
    const [currentProduct, setCurrentProduct] = useState(1);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const navigate = useNavigate();

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

  const handleShopNowClick = () => {
    navigate('/shop');  // Navigate ShopPage
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
            <button className="button" onClick={handleShopNowClick}>
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
          <div className="productSection"> 
            <div className="productsRow">
              <button
                onClick={prevProduct}
                className="navigationButton"
              >
                <ChevronLeft className="navigationIcon" />
              </button>   
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
              <button
                onClick={nextProduct}
                className="navigationButton"
              >
                <ChevronRight className="navigationIcon" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Occasion Section */}
      <div className="section">
        <div className="sectionContainer">
          <h2 className="sectionTitle">Special Occasions</h2>
          <div className="itemsGrid">
            {occasions.map((occasion) => (
              <ItemCard 
                key={occasion.id} 
                item={occasion} 
                buttonText="View Collection"  // Set button text for occasions
                isProduct={false}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="sectionTestimonials">
        <div className="sectionContainerCarousel">
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
                  {testimonials[currentTestimonial].author}
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
