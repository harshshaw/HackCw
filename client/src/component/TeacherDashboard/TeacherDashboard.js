import Axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
import './TeacherDashboard.css'
const TeacherDashboard = () => {
    const [pdf, updatepdf] = useState([]);
    const [TeacherID, updateTeacherID] = useState(null)


    const requestPDF = async () => {
        await Axios.get(`http://localhost:5000/teacher/${localStorage.getItem('userID')}`)
            .then(res => updatepdf(res.data))
            .catch(err => console.log(err))
    }


    useEffect(() => {
        updateTeacherID(localStorage.getItem('userID'))
        requestPDF()
    }, [])

    let Component = (
        pdf.map(data => {
            return (
                <div class="card">
                    <div class="card-body">
                        {data.name} {data.subject}
                    </div>
                    <a href={`http://localhost:5000/teacher/student/${data.pdffilename}`} target="_blank">PDF</a>
                </div>
            )
        })
    )
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand medico" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Sign in
              </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="/loginStudent">As a student</a>
                                <a class="dropdown-item" href="/loginTeacher">As a teacher</a>
                                <div class="dropdown-divider"></div>

                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Sign up
              </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="/signupStudent">As a student</a>
                                <a class="dropdown-item" href="/signupTeacher">As a teacher</a>
                                <div class="dropdown-divider"></div>

                            </div>
                        </li>

                    </ul>

                </div>
            </nav>




            <section class="colored-section">


                <div class="row">
                    <div class="col-lg-4">
                        <div class="card ml-5 detail">
                            <div class="card-body">
                                <h5 class="card-title">{localStorage.getItem('userID')}</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="card ml-5 detail">
                            <div class="card-body">
                                <h5 class="card-title">{localStorage.getItem('name')}</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card ml-5 detail">
                            <div class="card-body">
                                <h5 class="card-title">{localStorage.getItem('class')}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="container">


                <div class="submission">


                    <div class="card mt-5 w-50 card1 student-pdf">

                        <div class="card-body text-center">
                            <h3 class="heading">Student's Pdf</h3>

                        </div>

                        <div class="card-body mx-auto">

                            {Component}
                        </div>
                    </div>

                    <div class="card mt-5 w-50 card1" >

                        <div class="card-body text-center">
                            <h3 class="heading">Card title</h3>
                            <p class="card-text"></p>
                        </div>

                        <div class="card-body mx-auto">
                            <label class="marks">Marks: </label>
                            <input type="text" name="marks" /><br />
                            <label>Student id: </label>
                            <input type="text" name="stu_id" /><br />
                            <input class="submit-button" type="submit" name="submit" />

                        </div>
                    </div>
                </div>

            </section>

            <section class="upload">
                <div class="upload-card">
                    <input type="file" name="" value="" />
                </div>
                <div class="upload-card2">
                    <input type="file" name="" value="" />
                </div>
            </section>
            <div class="container">



                <h3 class="heading head">Summary</h3>
                <div class=" w-100 border border-dark  summary">


                </div>



                <br />
                <br />
                <br />
            </div>
        </div>
    )
}
export default TeacherDashboard;