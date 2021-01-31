import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import maths from '../images/maths.jpg';
import electrical from '../images/electrical.jpg';
import electronics from '../images/electronics.jpg';
import programming from '../images/programming.jpg';
import ed from '../images/ed.jpg';

function Cards() {
    return (
        <div id="cardsID" className="cards">
            <h1>Books <i className="fa fa-book"></i></h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="cards_items">
                        <CardItem 
                            src={maths}
                            text="Mathematics"
                            path="/"
                        />
                        <CardItem 
                            src={electrical}
                            text="Basic Electrical Engineering"
                            path="/"
                        />
                        <CardItem 
                            src={electronics}
                            text="Basic Electronics"
                            path="/"
                        />
                        <CardItem 
                            src={programming}
                            text="Programming"
                            path="/"
                        />
                        <CardItem 
                            src={ed}
                            text="Engineering Drawing"
                            path="/"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
