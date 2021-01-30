import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Navbar.css';


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
                        Logo 
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </Link>
                    <div className="menu-icon"  onClick={handleClick}>
                        <i className={click ? 'fa fa-times': 'fa fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle="btn-primary">Sign Up</Button>}
                </div>
            </div>
        </>
    )
}

export default Navbar
