import React from 'react'
import '../../../Page-Styles/pageStyles.css'

const ElectronicsBooks = () => {
    return (
        <div className="wrapper">
            <h1 className="heading">Basic Electrical Engineering</h1>
                <li className="list-items">
                    <ul className="list-item">
                        <a href="https://drive.google.com/file/d/1MTBLs_oc2pq0KvpqZ0XPRVcCWn8nZhG2/view?usp=sharing">
                        Integrated Electronics
                        </a>
                        <p className="details">Millman-Halkias</p>
                    </ul>
                    <ul className="list-item">
                        <a href="https://drive.google.com/file/d/10KfeKO6tbToBgOF2Oazfs9n5rBb1mFbu/view?usp=sharing">
                        Semiconductor Physics and Devices
                        </a>
                        <p className="details">Donald A. Neamen</p>
                    </ul>
                </li>
        </div>
    );
}

export default ElectronicsBooks