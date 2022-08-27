

import React from 'react';
import { NavLink } from "react-router-dom";

import { useNavigate } from 'react-router-dom'
import { FaShoppingBag } from "react-icons/fa";
import "../navBar/NavBar.css"
import Logo from "../assets/logo.png"

function NavBar() {
    const navLinkStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : "normal",

        }
    }

    const navigate = useNavigate()

    const auth = localStorage.getItem("user");




    const LogOut = () => {
        alert("LOGOUT SUCCESSFUL")
        localStorage.clear();
        navigate("/login")

    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-sm  styleNav">
                <div className="container-fluid  tex-danger  ">
                    <NavLink className="navbar-brand" to="#">
                        <img src={Logo} style={{ paddingLeft: "30px" }} className="col-sm-center" alt="logo" height={50} width={90} />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav ms-auto">
                            {

                                !(auth) ?
                                    <>
                                        <li className="nav-item px-3">
                                            <NavLink style={navLinkStyle} className="nav-link active hove" aria-current="page" to="/login">Login</NavLink>
                                        </li>
                                        <li className="nav-item ">
                                            <NavLink style={navLinkStyle} className="nav-link active hove " aria-current="page" to="/signUp">Register</NavLink>
                                        </li>
                                    </>

                                    :
                                    <>

                                        <li className="nav-item px-3 " >
                                            <NavLink style={navLinkStyle} className="nav-link active hove  fw-bold  styleText" aria-current="page" to="/">Home</NavLink>
                                        </li>

                                        <li className="nav-item px-3" >
                                            <NavLink style={navLinkStyle} className="nav-link active hove fw-bold  styleText" aria-current="page" to="/Shop">Shop</NavLink>
                                        </li>

                                        <li className="nav-item px-3" >
                                            <NavLink style={navLinkStyle} className="nav-link active hove fw-bold styleText" aria-current="page" to="/Blog">Blog</NavLink>
                                        </li>

                                        <li className="nav-item px-3" >
                                            <NavLink style={navLinkStyle} className="nav-link active hove fw-bold styleText" aria-current="page" to="/About">About</NavLink>
                                        </li>
                                        <li className="nav-item px-3" >
                                            <NavLink style={navLinkStyle} className="nav-link active hove fw-bold styleText" aria-current="page" to="/Contact">Contact</NavLink>
                                        </li>


                                        <li className="nav-item px-3">
                                            <NavLink style={navLinkStyle} className="nav-link active hove   fw-bold   styleText" onClick={() => LogOut()} aria-current="page" to="/login">LogOut</NavLink>
                                        </li>
                                    </>







                            }





                        </ul>
                        <div className="d-flex me-1 px-5" >
                            <FaShoppingBag />

                        </div>

                    </div>
                </div>
            </nav >










        </div >













    );
}

export default NavBar;