import React from 'react';
import '../App.css';
import './HeroSection.css';
import Button from './Button';
import {Link} from 'react-scroll';
import Cards from './Cards';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h3>Production & Industrial Engineering</h3>
      <p>Batch of '24</p>
      <p>Jadavpur University</p>
      <button className="bookBtn">
        <Link to="cardsID" spy={true} smooth={true}>
          Books
        </Link>
      </button>
    </div>
  );
}

export default HeroSection;
