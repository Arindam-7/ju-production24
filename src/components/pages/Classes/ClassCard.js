import React from 'react';
import './ClassCard.css';
import CardItem from './ClassCardItem';
import pic from '../../../images/pic.jpg'
import doge from '../../../images/doge.webp';


function ClassCard() {
    return (
        <div id="cardsID" className="cards">
            <h1>Here is some random texts.</h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="cards_items">
                        <CardItem 
                            src={pic}
                            text="Mathematics"
                            path="/"
                        />
                        <CardItem 
                            src={doge}
                            text="Basic Electrical Engineering"
                            path="/"
                        />
                        <CardItem 
                            src={pic}
                            text="Basic Electronics"
                            path="/"
                        />
                        <CardItem 
                            src={doge}
                            text="Programming"
                            path="/"
                        />
                        <CardItem 
                            src={pic}
                            text="Engineering Drawing"
                            path="/"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ClassCard