import React from 'react';
import '../App.css';
import './HeroSection.css';
import {Link} from 'react-scroll';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h3 className="neon">Production & Industrial Engineering</h3>
      <p className="animation">Batch of '24</p>
      <p class="jadUni">Jadavpur University</p>
      <Link to="cardsID" spy={true} smooth={true}>
        <button className="bookBtn">
            Books
        </button>
      </Link>
    </div>
  );
}

export default HeroSection;
