import React from 'react';
import './ClassCard.css';
import CardItem from './ClassCardItem';
import maths from '../../../images/maths.jpg';
import electrical from '../../../images/electrical.jpg';
import electronics from '../../../images/electronics.jpg';
import programming from '../../../images/programming.jpg';
import ed from '../../../images/ed.jpg';


function ClassCard() {
    return (
        <div id="cardsID" className="cards">
            <h1>Recordings of Online Classes</h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="cards_items">
                        <CardItem 
                            src={maths}
                            text="Mathematics"
                            path="/classes/mathematics"
                        />
                        <CardItem 
                            src={electrical}
                            text="Basic Electrical Engineering"
                            path="/classes/electrical"
                        />
                        <CardItem 
                            src={electronics}
                            text="Basic Electronics"
                            path="/classes/electronics"
                        />
                        <CardItem 
                            src={programming}
                            text="Programming"
                            path="/classes/programming"
                        />
                        <CardItem 
                            src={ed}
                            text="Engineering Drawing"
                            path="/classes/ed"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ClassCard