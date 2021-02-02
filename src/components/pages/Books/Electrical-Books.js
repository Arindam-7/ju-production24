import React from 'react'
import '../../../Page-Styles/pageStyles.css'

const ElectricalBooks = () => {
    return (
        <div className="wrapper">
            <h1 className="heading">Basic Electrical Engineering</h1>
                <li className="list-items">
                    <ul className="list-item">
                        <a href="https://drive.google.com/file/d/1q7PL4IRLSXOD9yAG-nOw3hBJDBi1a9wK/view?usp=sharing">
                        A Textbook of Electrical Technology
                        </a>
                        <p className="details">B.L.Theraja & A.K.Theraja</p>
                    </ul>
                    <ul className="list-item">
                        <a href="https://drive.google.com/file/d/10dzP7JeJZybBYBI9KwU2nGOxtrARhs4R/view?usp=sharing">
                        Hughes Electrical & Electronic Technology
                        </a>
                        <p className="details">Edward Hughes</p>
                    </ul>
                </li>
        </div>
    );
}

export default ElectricalBooks

