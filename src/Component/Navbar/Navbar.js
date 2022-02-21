import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <>
            <div className='container-fluid nav-bg'>
                <div className='row'>
                    <div className='col-12 '>

                        <nav className="navbar navbar-expand-lg bg-light " >
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/">Gulan</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav  ms-auto">
                                        <li className="nav-item">
                                            <NavLink  className="nav-link" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName='ActiveMenu' className="nav-link" to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName='ActiveMenu' className="nav-link" to="/services">Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName='ActiveMenu' className="nav-link" to="/contact">Contact</NavLink>
                                        </li>


                                    </ul>
                                </div>

                            </div>
                        </nav>

                    </div>
                </div>
            </div>

        </>
    );
};
export default Navbar;