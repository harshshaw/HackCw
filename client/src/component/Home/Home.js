import React, { useEffect, useState } from 'react'
const Home = () => {
    const [type, updateType] = useState('');
    useEffect(() => {
        updateType(localStorage.getItem('type'));
    }, [])


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            {
                                type == 'Student' ?
                                    <li className="nav-item">
                                        <a className="nav-link" href="/StudentDashboard">Student</a>
                                    </li> :
                                    <li className="nav-item">
                                        <a className="nav-link" href="/TeacherDashboard">Teacher</a>
                                    </li>
                            }
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Home;