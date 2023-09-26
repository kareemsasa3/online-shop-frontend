import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // import link for nav
import '../styles/header.css';
import api from '../utils/api.js';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get('/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories: ', error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <header>
        <div className="header">
            <div className="left-section">
                <Link to="/">
                    <img src="/images/squish-logo.png" alt="Logo" className="logo" />
                </Link>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Shop
                    </button>
                    <div className="dropdown-content">
                        {categories.map((category) => (
                            <Link to={`/category/${category.id}`} key={category.id}>{category.name}</Link>
                        ))}
                    </div>
                </div>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        About
                    </button>
                    <div className="dropdown-content">
                        <Link to="/about-us">About Us</Link>
                        <Link to="/our-mission">Our Mission</Link>
                    </div>
                </div>
            </div>
            <div className="right-section">
                <div className="search-container">
                    <input type="text" placeholder="Search" className="search-bar" />
                    <button type="submit" className="search-button">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
                <div className="icons">
                    <i className="icon fa fa-user"></i>
                    <i className="icon fa fa-heart"></i>
                    <i className="icon fa fa-shopping-cart"></i>
                </div>
            </div>
        </div>
    </header>
  );
};

export default Header;
