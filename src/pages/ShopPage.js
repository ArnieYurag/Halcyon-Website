// src/pages/ShopPage.js

import React from 'react';
import '../styles/ShopPage.css';

// Import the ItemCard component
import ItemCard from '../components/ItemCard';

import sunshineBouquetImage from '../assets/flowers/sunshine_bouquet.png';
import lavenderBouquetImage from '../assets/flowers/lavender_bouquet.png';
import scarletBouquetImage from '../assets/flowers/scarlet_bouquet.png';
import pinkBouquetImage from '../assets/flowers/pinkdelight_bouquet.png'
import tulipBouquetImage from '../assets/flowers/tulip_bouquet.png';
import blueBouquetImage from '../assets/flowers/blueming_buoquet.png';
import autumnBouquetImage from '../assets/flowers/autumn_buoquet.png';
import evergreenBouquetImage from '../assets/flowers/evergreen_buoquet.png';
import springBouquetImage from '../assets/flowers/spring_bouquet.png';
import butterflyBouquetImage from '../assets/flowers/butterfly_bouquet.png';
import blushBouquetImage from '../assets/flowers/blush_bouquet.png';
import adoreBouquetImage from '../assets/flowers/adore_bouquet.png';
import loveBouquetImage from '../assets/flowers/love_bouquet.png';
import loverBouquetImage from '../assets/flowers/lover_bouquet.png';

// Sample product data for flower bouquets
const products = [
  {
    id: 1,
    title: "Sunshines",
    price: "$59.99",
    image: sunshineBouquetImage
  },
  {
    id: 2,
    title: "Lavender Dreams",
    price: "$69.99",
    image: lavenderBouquetImage
  },
  {
    id: 3,
    title: "Scarlet Elegance",
    price: "$54.99",
    image: scarletBouquetImage
  },
  {
    id: 4,
    title: "Pink Delight",
    price: "$49.99",
    image: pinkBouquetImage
  },
  {
    id: 5,
    title: "Tulip Symphony",
    price: "$39.99",
    image: tulipBouquetImage
  },
  {
    id: 6,
    title: "Blueming",
    price: "$79.99",
    image: blueBouquetImage
  },
  {
    id: 7,
    title: "Autumn Harvest",
    price: "$69.99",
    image: autumnBouquetImage
  },
  {
    id: 8,
    title: "Evergreen",
    price: "$59.99",
    image: evergreenBouquetImage
  },
  {
    id: 9,
    title: "Full Spring",
    price: "$49.99",
    image: springBouquetImage
  },
  {
    id: 10,
    title: "The Butterfly",
    price: "$39.99",
    image: butterflyBouquetImage
  },
  {
    id: 11,
    title: "Blush",
    price: "$79.99",
    image: blushBouquetImage
  },
  {
    id: 12,
    title: "Adore You",
    price: "$69.99",
    image: adoreBouquetImage
  },
  {
    id: 13,
    title: "So this is Love?",
    price: "$59.99",
    image: loveBouquetImage
  },
  {
    id: 14,
    title: "Lover",
    price: "$79.99",
    image: loverBouquetImage
  }
];

const ShopPage = () => {
  return (
    <div className="shopPage">
      <h2 className="shopTitle">Our Flower Bouquets</h2>
      <div className="productsGrid">
        {products.map((product) => (
          <ItemCard 
            key={product.id} 
            item={product} 
            buttonText="Add to Cart"  // Set button text for products
            isProduct={true}
          />
        ))}
      </div>
      </div>
  );
};

export default ShopPage;
