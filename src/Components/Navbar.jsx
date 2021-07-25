import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "../images/gallery.png";
import Dashboard from "./Dashboard";
const Navbar = () => {
  return (
    <div>
      <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to ="/" className="navbar-brand" >
            Electron Gallery{" "}
            <span>
              <img src={logo} alt="logo" />
            </span>
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
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          > <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link to="/"  className="nav-link active" aria-current="page" >Home</Link >
          </li></ul></div>
        </div>
      </nav>
      
        <div>
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
        
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Navbar;
