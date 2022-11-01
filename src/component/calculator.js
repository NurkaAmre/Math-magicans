import React, { Component } from 'react';
/* eslint-disable */

class Calculator extends Component {
  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <div className="display">0</div>
          <div className="btn grey">AC</div>
          <div className="btn grey">+/-</div>
          <div className="btn grey">%</div>
          <div className="btn orange">/</div>
          <div className="btn grey">7</div>
          <div className="btn grey">8</div>
          <div className="btn grey">9</div>
          <div className="btn orange">x</div>
          <div className="btn grey">4</div>
          <div className="btn grey">5</div>
          <div className="btn grey">6</div>
          <div className="btn orange">-</div>
          <div className="btn grey">1</div>
          <div className="btn grey">2</div>
          <div className="btn grey">3</div>
          <div className="btn orange">+</div>
          <div className="btn grey span">0</div>
          <div className="btn grey">.</div>
          <div className="btn orange">=</div>
        </div>
      </div>
    );
  }
}

export default Calculator;
