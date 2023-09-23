import React, { useState, useEffect } from 'react';
import api from '../utils/api.js';
import isBase64 from '../utils/base64Utils';
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
      <h2>Most Popular Products</h2>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div>
              <strong>Images:</strong>
              <div className="image-container">
                {product.images.map((imageData, index) => (
                  <div key={index}>
                    {isBase64(imageData) ? (
                      <img
                        src={`data:image/png;base64,${imageData}`}
                        alt={`Product: ${product.name}`}
                        className="product-image"
                      />
                    ) : (
                      <div>This is not valid base64 image data.</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <strong>Name:</strong> {product.name}
            </div>
            <div>
              <strong>Price:</strong> ${product.price}
            </div>
            <hr /> {/* Optional: Add a horizontal line between products */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostPopularProducts;
