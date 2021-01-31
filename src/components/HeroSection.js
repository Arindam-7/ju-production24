import React from 'react';
import '../App.css';
import './HeroSection.css';
import {Link} from 'react-scroll';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h3 className="neon">Production & Industrial Engineering</h3>
      <h2 className="animation">Batch of '24</h2>
      <p class="jadUni">Jadavpur University</p>
      <Link to="cardsID" spy={true} smooth={true}>
        <button class="bookBtn button--nina button--text-thick button--text-upper button--size-s" data-text="BOOKS">
              <span>B</span><span>O</span><span>O</span><span>K</span><span>S</span>
        </button>
      </Link>
    </div>
  );
}

export default HeroSection;
