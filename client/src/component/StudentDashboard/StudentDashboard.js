import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import './StudentDashboard.css';

const StudentDashboard = () => {
    const [file, updateFile] = useState(null);
    const [ID, updateTeacherId] = useState(null);
    const [subject, updateSubject] = useState(null);
    const [name, updateName] = useState(null);
    const [class1, updateClass1] = useState(null);
    const [email, updateEmail] = useState(null);
    const [studentID, updateStudentID] = useState(null);
    const [rollNumber, updaterollNumber] = useState(null);
    let button = null;
    let text = null;
    if (!(file && ID)) {
        button = null;
    }
    else {
        button = "btn btn-success upload-btn"
        text = "Upload!"
    }

    useEffect((e) => {
        return (
            updateName(localStorage.getItem('name')),
            updateClass1(localStorage.getItem('class')),
            updateEmail(localStorage.getItem('useremail')),
            updateStudentID(localStorage.getItem('userID')),
            updaterollNumber(localStorage.getItem('rollNumber'))
        )
    }, [])
    const submit = async (e) => {

        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file); // appending file
        formData.append('name', name);
        formData.append('rollNumber', rollNumber);
        formData.append('class', class1);
        formData.append('subject', subject);
        formData.append('email', email);
        formData.append('teacherID', ID);
        formData.append('studentID', studentID);
        console.log(formData);
        await Axios.post("http://localhost:5000/student/uploadfiles", formData)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
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
                    <h2 className="fas fa-at"> {localStorage.getItem('useremail')}</h2>
                </div>

                <div className='student-class'>
                    <h2>{localStorage.getItem('class')}</h2>
                </div>

                <diiv className='student-id'>
                    <h2>{localStorage.getItem('userID')}</h2>
                </diiv>

            </div>
            <form>

            </form>
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

            <form className="student-submission" onSubmit={submit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Subject</label>
                    <input
                        type="text"
                        class="form-control"
                        aria-describedby="emailHelp"
                        placeholder="Subject"
                        onChange={(e) => updateSubject(e.target.value)} />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">TeacherId</label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="TeacherId"
                        onChange={(e) => updateTeacherId(e.target.value)} />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">PDF</label>
                    <input
                        type="file"
                        name="file"
                        class="form-control"
                        placeholder="Password"
                        onChange={(e) => updateFile(e.target.files[0])} />
                </div>
                <button type="submit" class={button}>{text}</button>
            </form>

        </div>
    )
}
export default StudentDashboard;
