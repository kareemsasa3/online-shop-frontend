import React from 'react';
import '../styles/header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="left-section">
        <img src="/images/squish-logo.png" alt="Logo" className="logo" />
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Shop
          </button>
          <div className="dropdown-content">
            <a href="#">Category 1</a>
            <a href="#">Category 2</a>
            {/* Add more categories */}
          </div>
        </div>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            About
          </button>
          <div className="dropdown-content">
            <a href="#">About Us</a>
            <a href="#">Our Mission</a>
            {/* Add more about links */}
          </div>
        </div>
      </div>
      <div className="right-section">
        <div class="search-container">
        <input type="text" placeholder="Search" className="search-bar" />
           <button type="submit" class="search-button">
               <i class="fas fa-search"></i>
           </button>
        </div>
        <div className="icons">
            <i className="icon fa fa-user"></i>
            <i className="icon fa fa-heart"></i>
            <i className="icon fa fa-shopping-cart"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;

