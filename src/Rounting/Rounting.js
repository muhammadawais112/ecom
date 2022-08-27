import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Home from "../pages/home/Home"
import Shop from '../pages/shop/Shop';
import About from '../pages/about/About';
import Blog from '../pages/blog/Blog';
import Contact from '../pages/contact/Contact';
import PrivateRounting from './PrivateRounting';
import LogOut from '../auth/logOut/LogOut';
import SignUp from '../auth/signUp/SignUp';
import Login from '../auth/login/Login';
import NavBar from '../navBar/NavBar';


function Rounting() {

    return (
        <BrowserRouter>
            <NavBar />


            <Routes>

                <Route element={
                    <PrivateRounting />}>

                    <Route
                        path="/"
                        element={

                            <Home />
                        }
                    />

                    <Route
                        path="/Shop"
                        element={
                            <Shop />

                        }
                    />
                    <Route
                        path="/About"
                        element={
                            <About />

                        }
                    />
                    <Route
                        path="/Contact"
                        element={
                            <Contact />

                        }
                    />
                    <Route
                        path="/Blog"
                        element={
                            <Blog />

                        }
                    />
                    <Route
                        path="/Contact"
                        element={
                            <LogOut />

                        }
                    />






                </Route>


                <Route path="/login" element={<Login />} />
                <Route path="/signUp" element={< SignUp />} />





            </Routes>


        </BrowserRouter>
    )
}
export default Rounting