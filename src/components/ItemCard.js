import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ItemCard.css';

const ItemCard = ({ item, buttonText, isProduct }) => {
  return (
    <div className={isProduct ? "itemCard" : "occasionCard"}>
      <div className="itemImageContainer">
        <img 
          src={item.image} 
          alt={item.title}
          className={isProduct ? "itemImageProduct" : "itemImageOccasion"}
        />
      </div>
      <div className="itemContent">
        <h3 className="itemTitle">{item.title}</h3>
        <p className="itemDescription">{item.description}</p>
        <p className="itemPrice">{item.price}</p>
        <button className="card-button">{buttonText}</button>
      </div>
    </div>
  );
};

ItemCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired,
  buttonText: PropTypes.string.isRequired, 
  isProduct: PropTypes.bool
};

export default ItemCard;
