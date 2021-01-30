import React from 'react';
import Button from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Just a simple footer.
                </p>
                <p className="footer-subscription-text">
                    Text below the above text.
                </p>
                <div className="input-areas">
                    <form>
                        <input className="footer-input" name="email" placeholder="email"/>
                        <Button buttonStyle="btn-outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-link">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <h2>Get out</h2>
                        <h2>Lmao</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
