import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Import your components for different routes
import Header from './components/Header';
import Footer from './components/Footer';
import OurMission from './components/OurMission';
import AboutUs from './components/AboutUs';
import Category from './components/Category';

const App = () => {
  return (
    <Router>
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/our-mission" element={<OurMission />} />
                <Route path="/category/:categoryId" element={<Category />} />
                {/* Add more routes here */}
            </Routes>
            <Footer />
        </div>
    </Router>
  );
};

export default App;
