import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MostPopularProducts from './components/MostPopularProducts';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <MostPopularProducts />
        <p>Home</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;

