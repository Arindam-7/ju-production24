import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Navbar.css';
import logo from '../images/logo.webp';

function Navbar() {
    const [click,setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => {
        setClick(!click);
    };

    const closeMobileMenu = () => {
        setClick(false);
    };

    const showButton = () => {
        if(window.innerWidth <= 968){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        // This gets called after every render, by default
        // to avoid the button to show up after first load on mobile (before resize)
        showButton();
      }, []);

    // showing & hiding of button after resizing the window
    window.addEventListener('resize', showButton);

    return (
        <>
            <div className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img className="logo_image" src={logo}></img>
                        PIE 
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
