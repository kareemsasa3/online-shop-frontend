import React from 'react';
import Product from './Product';
import '../styles/MostPopularProducts.css';

const MostPopularProducts = () => {
  // Dummy product data (you'll replace this with data from your Spring application)
  const popularProducts = [
    { id: 1, name: 'Product 1', price: 19.99, imageUrl: 'image1.jpg', size: 'M' },
    // Add more product data
  ];

  return (
    <div>
      <h2 className="most-popular-heading">Most Popular</h2>
      <div className="product-scroll">
        {popularProducts.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default MostPopularProducts;
