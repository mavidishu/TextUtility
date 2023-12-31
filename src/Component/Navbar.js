// Imports
import React, { useState } from "react";
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

// Function
export default function Navbar(props) {
  return (
    <div>
      <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <strong>{props.title}</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li>
            </ul>
            {/* Colour Pallete */}
            
            {/* Dark Mode toggle */}
            <div className={`form-check form-switch text-${props.mode ==='light'?'dark':'light'}`}> {/* template literals used*/}
             <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
             <label className="form-check-label mx-3" htmlFor="flexSwitchCheckChecked">Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}


// Property Types 
Navbar.propTypes = {
    title:PropTypes.string.isRequired,
    aboutText:PropTypes.string
};