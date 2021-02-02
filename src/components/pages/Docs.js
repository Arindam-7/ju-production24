import React from 'react';
import '../../App.css';
import './Docs.css';

const Docs = () => {
    return (
        <div className="wrapper">
            <h1 className="heading">Documents</h1>
                <li className="list-items">
                    <ul className="list-item">
                        <a href="https://drive.google.com/file/d/1l0-WSH7wksHXeaRy4kTIjE7jzT8gdQ4V/view?usp=sharing">
                            First Year Syllabus
                        </a>
                        <p className="details">2 semesters</p>
                    </ul>
                    <ul className="list-item">
                        <a href="https://drive.google.com/file/d/1kdt1wk_fqN9seeVMPKlsTWKtEFBZYt4K/view?usp=sharing">
                            Full Syllabus
                        </a>
                        <p className="details">8 semesters</p>
                    </ul>
                    <ul className="list-item">
                        <a href="https://drive.google.com/file/d/1wwlx9tSJb2YSeNgkc1jiDZmnzJRlfxk5/view?usp=sharing">
                            1st Year 1st Semester Time Table
                        </a>
                        <p className="details">UG1 (2020-'21)</p>
                    </ul>
                </li>
        </div>
    );
}
export default Docs