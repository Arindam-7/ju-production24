import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer-container">
           <p className="description">
               Made by
               <Link to="/arindam" className="myName">
                 Arindam Saha
               </Link>
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
