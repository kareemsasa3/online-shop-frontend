import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.imageUrl} alt={product.name} />
      <div className="product-info">
        <span>{product.size}</span>
        <h3>{product.name}</h3>
        <span>${product.price}</span>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
