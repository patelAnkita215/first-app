import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../assets/header.css";


class HeaderComponent extends Component {
    render() {
        return (
            <>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <div className="d-flex align-items-center justify-content-between w-100">
              <Link to="/" className="navbar-brand">
                Logo
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/usecontextexample" className="nav-link">
                  UseContext
                </Link>
                <Link to="/usememoexample" className="nav-link">
                  useMemo
                </Link>
                <Link to="/component" className="nav-link">
                  Component
                </Link>
                {/* <Link to="/props-exm" className="nav-link">
                  Props
                </Link> */}
                <Link to="/usecallback-ex" className="nav-link">
                  useCallback
                </Link>
              </div>
            </div>
          </div>
      </nav>  
            </>
        );
    }
}

export default HeaderComponent;