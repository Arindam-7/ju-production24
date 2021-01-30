import React from 'react';
import Button from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
           <p className="description">
               Made by Arindam Saha
           </p>
           <div class="icons">
            <a href="https://www.instagram.com/arindam.69/">
                <i className="fa fa-instagram instaIcon"></i>
            </a>
            <a href="https://github.com/Arindam-7">
                <i className="fa fa-github ghIcon"></i>
            </a>
           </div>
        </div>
    )
}

export default Footer
