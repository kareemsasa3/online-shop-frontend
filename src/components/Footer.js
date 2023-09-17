import React from 'react';
import '../styles/footer.css';
import footer from '../assets/squish-footer.png';


const Footer = () => {
  return (
    <div className="footer">
        <footer>
            <img src={footer} alt="Footer" className="footer" />
        </footer>
    </div>
  );
};

export default Footer;
