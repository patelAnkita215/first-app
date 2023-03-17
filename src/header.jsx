import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const HeaderComp = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <div className="d-flex align-items-center justify-content-between w-100">
              <Link to="/" className="navbar-brand">
                Logo
              </Link>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/about" className="nav-link">
                  About Us
                </Link>
                <Link to="/contact" className="nav-link">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
      </nav>
    </div>
  );
};

export default HeaderComp;
