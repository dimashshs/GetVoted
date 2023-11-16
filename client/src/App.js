import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./component/Home";

import Voting from "./component/Voting/Voting";
import Results from "./component/Results/Results";
import Registration from "./component/Registration/Registration";

import AddCandidate from "./component/Admin/AddCandidate/AddCandidate";
import Verification from "./component/Admin/Verification/Verification";
import test from "./component/test";
import Navbar from "./component/Navbar/Navigation";
// import StartEnd from "./component/Admin/StartEnd/StartEnd";

import 'font-awesome/css/font-awesome.min.css'; 

import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/AddCandidate" component={AddCandidate} />
            <Route exact path="/Voting" component={Voting} />
            <Route exact path="/Results" component={Results} />
            <Route exact path="/Registration" component={Registration} />
            <Route exact path="/Verification" component={Verification} />
            <Route exact path="/test" component={test} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}
class NotFound extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container-fluid py-5 wow fadeIn" data-wow-delay="0.1s">
          <div className="container text-center py-5">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
                <h1 className="display-1">ERROR</h1>
                <p className="mb-4">
                  We’re sorry, the page you have looked for does not exist in
                  our website!
                </p>
                <Link
                  to="/"
                  className="btn btn-primary rounded-pill py-3 px-5"
                >
                  Go Back To Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}