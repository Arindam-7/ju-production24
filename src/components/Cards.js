import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import pic from '../images/pic.jpg';
import doge from '../images/doge.webp';

function Cards() {
    return (
        <div id="cardsID" className="cards">
            <h1>Here is some random texts.</h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="cards_items">
                        <CardItem 
                            src={pic}
                            text="Random again."
                            label="aww"
                            path="/services"
                        />
                        <CardItem 
                            src={doge}
                            text="Random again(2)."
                            label="hey"
                            path="/services"
                        />
                        <CardItem 
                            src={pic}
                            text="Random again(3)."
                            label="oh"
                            path="/services"
                        />
                        <CardItem 
                            src={doge}
                            text="Random again."
                            label="aww"
                            path="/services"
                        />
                        <CardItem 
                            src={pic}
                            text="Random again."
                            label="aww"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
