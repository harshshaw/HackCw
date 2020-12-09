import React, { useState } from 'react'
import './StudentDashboard.css';

const StudentDashboard = () => {
    const [file, updateFile] = useState(null);
    return (
        <div className='dashboard'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className='student-info'>
                <div className='student-email'>
                    <h2 className="fas fa-at"> harshshaw5@gmail.com</h2>
                </div>

                <div className='student-class'>
                    <h2>11th standard</h2>
                </div>

                <diiv className='student-id'>
                    <h2>21344</h2>
                </diiv>

            </div>

            <div className='student-pdf-container'>
                <div className='student-pdf'>
                    <input type="file"></input>
                    <input type='text' placeholder="Teacher ID" className="teacher-id"></input>
                    <br></br>
                    <button className="btn btn-success upload-btn">Upload</button>
                </div>
            </div>

            <div className='student-score-container'>
                <h3>Student Score:</h3>
                <div className='student-score'>

                    <div className="card">
                        <div className="card-body">
                            This is some text within a card body.
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            This is some text within a card body.
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            This is some text within a card body.
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            This is some text within a card body.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default StudentDashboard;
