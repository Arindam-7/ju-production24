import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo.webp';

function Navbar() {
    const [click,setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    };

    const closeMobileMenu = () => {
        setClick(false);
    };

    return (
        <>
            <div className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img className="logo_image" alt="JU Logo" src={logo}></img>
                        <span className="logo_text">PIE</span> 
                    </Link>
                    <div className="menu-icon"  onClick={handleClick}>
                        <i className={click ? 'fa fa-times': 'fa fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/classes" className="nav-links" onClick={closeMobileMenu}>
                                Classes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/docs" className="nav-links" onClick={closeMobileMenu}>
                                Docs
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
