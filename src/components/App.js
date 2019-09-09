import React, { Component } from "react";
import "../styles/App.css";
import Display from "./Display";
import Buttons from "./Buttons";

class CounterRedux extends Component {
  render() {
    return (
      <div className="container">
        <Display />
        <Buttons />
      </div>
    );
  }
}

export default CounterRedux;
