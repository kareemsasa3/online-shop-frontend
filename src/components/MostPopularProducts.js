import React, { useState, useEffect } from 'react';
import api from '../utils/api.js';

const MostPopularProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products');
        const productArray = Object.values(response.data);
        setProducts(productArray);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  if (!products || products.length === 0) {
    return <div>No products available.</div>;
  }

  return (
    <div>
      <h2>Most Popular Products</h2>
      {console.log(products)} {/* Add this line to check the contents of the products array */}
    </div>
  );
};

export default MostPopularProducts;
