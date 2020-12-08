import React from 'react'
import './StudentDashboard.css';

const StudentDashboard = () => {
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
            <div className='student-info-container'>
                <div className='student-info'>
                    <h1 className=" fas fa-male">
                        <span className="user-info">  Rajesh</span>
                    </h1>
                    <br></br>
                    <h1 className="fas fa-chalkboard-teacher">
                        <span className="user-info">  Class</span>
                    </h1>
                    <br></br>
                    <h1 className="fas fa-at">
                        <span className="user-info">  harshshaw5@gmail.com</span>
                    </h1>
                </div>
                <div className='student-pdf-container'>
                    <div className='student-pdf'>
                        <input type="file"></input>
                        <br></br>
                        <button className="btn btn-primary">Upload</button>
                    </div>
                </div>
            </div>

            <div className="student-score">
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
    )
}
export default StudentDashboard;
