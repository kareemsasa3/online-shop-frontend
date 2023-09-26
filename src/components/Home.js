import React from 'react';
import ProductList from './ProductList';

function Home() {
  return (
    <div className="Home">
      <main>
        <div style={{ textAlign: 'center' }}>
            <h2>Most Popular Products</h2>
            <ProductList />
        </div>
      </main>
    </div>
  );
}

export default Home;
