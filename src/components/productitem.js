import React, { useState } from 'react';

const ProductItem = ({ product, addToCart }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="product-item" onMouseEnter={toggleDescription} onMouseLeave={toggleDescription}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      {showDescription && <p>{product.description}</p>}
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
