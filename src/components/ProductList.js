import React, { useState, useEffect } from 'react';
import api from '../utils/api.js';
import '../styles/product.css';

const MostPopularProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchMostPopularProducts = async () => {
      try {
        const response = await api.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching most popular products:', error);
      }
    };

    fetchMostPopularProducts();
  }, []);

  if (!products || products.length === 0) {
    return <div>No products available.</div>;
  }

  return (
    <div>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div>
              <strong>Name:</strong> {product.name}
            </div>
            <div>
              <strong>Price:</strong> ${product.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostPopularProducts;
