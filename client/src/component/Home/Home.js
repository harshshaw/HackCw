import React, { useEffect, useState } from 'react'
import img1 from './photo1.png'
import img2 from './photo2.png'
import img3 from './photo3.png'
import './Home.css'
const Home = () => {
    const [type, updateType] = useState('');
    useEffect(() => {
        updateType(localStorage.getItem('type'));
    }, [])


    return (
        /*  <div>
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
         </div> */
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light hi">
                <a class="navbar-brand medico" href="#">LTech</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            {
                                type == 'Student' ?
                                    <li className="nav-item">
                                        <a className="nav-link" href="/StudentDashboard">Student</a>
                                    </li> :
                                    <li className="nav-item">
                                        <a className="nav-link" href="/TeacherDashboard">Teacher</a>
                                    </li>
                            }
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

            <header>
                <div class="pho-bg bg-light">


                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner container" role="listbox">
                            {/* <!-- Slide One - Set the background image for this slide in the line below --> */}
                            <div class="carousel-item active" style={{ backgroundImage: `url(${img1})` }}>

                                <div class="carousel-caption d-none d-md-block first ">
                                    <h3>Are you Ready to learn?</h3>
                                </div>
                            </div>
                            {/*   <!-- Slide Two - Set the background image for this slide in the line below --> */}
                            <div class="carousel-item image" style={{ backgroundImage: `url(${img2})` }}>
                                <div class="carousel-caption d-none d-md-block second">
                                    {/*  <!-- <h2 class="display-4">Second Slide</h2>
            <p class="lead">This is a description for the second slide.</p> --> */}
                                    <h3>Predictive Analysis</h3>
                                </div>
                            </div>
                            {/*   <!-- Slide Three - Set the background image for this slide in the line below --> */}
                            <div class="carousel-item" style={{ backgroundImage: `url(${img3})` }}>
                                <div class="carousel-caption d-none d-md-block third">
                                    {/*   <!-- <h2 class="display-4">Third Slide</h2>
            <p class="lead">This is a description for the third slide.</p> --> */}
                                    <h3>Counselling</h3>
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev arrow" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next arrow" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon " aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </header>
        </div>
    )
}
export default Home;