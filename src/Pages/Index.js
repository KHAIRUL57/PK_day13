import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Home from "./Home/Home";
import Student from "./Student/Student";
import API from "../Pages/API/API";

const Index = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/Student" component={Student} />
            <Route path="/" exact component={Home} />
            <Route path="/API" component={API} />
            <Home />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Index;
