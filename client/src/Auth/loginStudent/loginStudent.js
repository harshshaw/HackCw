import React, { Component, useEffect } from "react";
// import React, { Component} from "react";
import { Route, Redirect, Link } from "react-router-dom";
// import { Redirect, Link } from "react-router-dom";
import img from "./undraw_secure_login_pdn4.svg";
import "./login.css";
import Axios from "axios";
class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            email: "",
            password: "",
            errMessage: " ",
            valid: false,
            userId: "",
            token: "",
        };
    }

    errMessage = " ";
    login = async (e) => {
        e.preventDefault();
        /*  fire
          .auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password)
          .then((u) => {
            console.log(u);
          })
          .catch((err) => {
            this.setState({ errMessage: err.message });
          }); */

        await Axios.post("http://localhost:5000/student/login", {
            email: this.state.email,
            password: this.state.password,
        })
            .then(
                (res) => {
                    return (
                        localStorage.setItem("userID", res.data.userID),
                        localStorage.setItem("useremail", res.data.useremail),
                        localStorage.setItem("token", res.data.token),
                        localStorage.setItem('type', "Student"),
                        localStorage.setItem('class', res.data.class),
                        localStorage.setItem('rollNumber', res.data.rollnumber),
                        localStorage.setItem('name', res.data.name),
                        this.setState({ valid: true })
                    )

                }
                // this.setState({ valid: res.data.token, userId: res.data.userId })
                // console.log(res)
            )
            .catch((err) => console.log(err));

        console.log(localStorage.getItem("token"));

        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (this.state.valid) {
            <Redirect to='/'></Redirect>
        }
    };
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    /*   change() {
      this.setState({ valid: true });
    } */
    render() {
        if (this.state.valid) {
            localStorage.setItem("token", this.state.valid);
            localStorage.setItem("userId", this.state.userId);
        }
        if (this.state.valid) return <Redirect to="/"></Redirect>;
        return (
            <div className="logInPt">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">
                        Navbar
          </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/#">
                                    Home <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Sign-Up
                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="/signupTeacher">
                                        Teacher
                  </a>
                                    <a className="dropdown-item" href="/signupStudent">
                                        Student
                  </a>
                                </div>
                            </li>
                            {this.state.token ?
                                <li className="nav-item">
                                    <a className="nav-link" href="/dashboard">
                                        Dashboard<span className="sr-only"></span>
                                    </a>
                                </li> : <li className="nav-item">
                                    <a className="nav-link" href="/#">
                                        Contact us<span className="sr-only"></span>
                                    </a>
                                </li>
                            }
                        </ul>
                    </div>
                </nav>
                <div className="row text-center">
                    <div className="col-lg-8">
                        <img alt="..." src={img} className="logImg" />
                    </div>
                    <div className="col-lg-4">
                        <div className="shadow-lg p-3  rounded">
                            <h2>Log In</h2>
                            <div className="p-3">
                                <form>
                                    <div className="row">
                                        <div className="col-sm-2">
                                            <h6 className="head">
                                                <i className="fas fa-envelope fa-lg"></i>
                                            </h6>
                                        </div>
                                        <div className="col-sm-10">
                                            <input
                                                type="email"
                                                className="form-control"
                                                aria-describedby="emailHelp"
                                                id="email"
                                                name="email"
                                                placeholder="Email"
                                                onChange={this.handleChange}
                                                value={this.state.email}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-2">
                                            <h6 className="head">
                                                <i className="fas fa-key fa-lg"></i>
                                            </h6>
                                        </div>
                                        <div className="col-sm-10">
                                            <input
                                                name="password"
                                                type="password"
                                                className="form-control"
                                                aria-describedby="emailHelp"
                                                onChange={this.handleChange}
                                                id="password"
                                                placeholder="Password"
                                                value={this.state.password}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            onClick={this.login}
                                            className="btn btn-primary logInPtBtn"
                                        >
                                            Log In
                    </button>
                                    </div>
                  New User? Sign Up as <Link to="/signupTeacher">Teacher</Link> or{" "}
                                    <Link to="/signupStudent">Student</Link>
                                </form>
                                <p className="para">{this.state.errMessage}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;
