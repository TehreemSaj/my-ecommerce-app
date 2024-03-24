import React from 'react';
import ProductItem from './productitem';
import productsData from '../data/products'; // Assuming products.js is in the data folder

const ProductList = ({ addToCart }) => {
  return (
    <div className="product-list">
      {productsData.map((product) => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
