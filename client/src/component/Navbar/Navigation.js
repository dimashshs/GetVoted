import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 

import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="container-fluid sticky-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark p-0">
            <NavLink to="/" className="navbar-brand">
              <h1 className="text-white">GetVoted</h1>
            </NavLink>
            <button
              type="button"
              className="navbar-toggler ms-auto me-0"
              onClick={() => setOpen(!open)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${open ? "show" : ""}`}
              id="navbarCollapse"
            >
              <div className="navbar-nav ms-auto">
                <NavLink
                  to="/"
                  className="nav-item nav-link"
                  activeClassName="active"
                  onClick={() => setOpen(false)}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/Registration"
                  className="nav-item nav-link"
                  activeClassName="active"
                  onClick={() => setOpen(false)}
                >
                  Registration
                </NavLink>
                <NavLink
                  to="/Voting"
                  className="nav-item nav-link"
                  activeClassName="active"
                  onClick={() => setOpen(false)}
                >
                  Voting
                </NavLink>
                <NavLink
                  to="/Results"
                  className="nav-item nav-link"
                  activeClassName="active"
                  onClick={() => setOpen(false)}
                >
                  Results
                </NavLink>

                
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="container-fluid pt-5 bg-primary hero-header mb-5">
        <div className="container pt-5">
          <div className="row g-5 pt-5">{/* Добавьте внутренности вашего hero блока */}</div>
        </div>
      </div>
    </div>
  );
}