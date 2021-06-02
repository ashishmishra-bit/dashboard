// import logo from './logo.svg';

import React from "react";
import ReactDOM from "react-dom";
import { HiHome } from "react-icons/hi";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/product" component={Product} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
