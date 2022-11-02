import React, { Component } from 'react';
import calculate from '../logic/calculate';
/* eslint-disable */

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {total: 0, next: null, operation: null}
  }

  handleClick = (event) => {
    const buttonName = event.target.innerText;
    const result = calculate(this.state, buttonName);
    this.setState(result)
  }
  
  render() {
    const {total, next, operation } = this.state;
    return (
      <div className="container">
        <div className="wrapper">
          <button className="display">{total}{operation}{next}</button>
          <button className="btn grey" onClick={this.handleClick}>AC</button>
          <button className="btn grey" onClick={this.handleClick}>+/-</button>
          <button className="btn grey" onClick={this.handleClick}>%</button>
          <button className="btn orange" onClick={this.handleClick}>/</button>
          <button className="btn grey" onClick={this.handleClick}>7</button>
          <button className="btn grey" onClick={this.handleClick}>8</button>
          <button className="btn grey" onClick={this.handleClick}>9</button>
          <button className="btn orange" onClick={this.handleClick}>x</button>
          <button className="btn grey" onClick={this.handleClick}>4</button>
          <button className="btn grey" onClick={this.handleClick}>5</button>
          <button className="btn grey" onClick={this.handleClick}>6</button>
          <button className="btn orange" onClick={this.handleClick}>-</button>
          <button className="btn grey" onClick={this.handleClick}>1</button>
          <button className="btn grey" onClick={this.handleClick}>2</button>
          <button className="btn grey" onClick={this.handleClick}>3</button>
          <button className="btn orange" onClick={this.handleClick}>+</button>
          <button className="btn grey span" onClick={this.handleClick}>0</button>
          <button className="btn grey" onClick={this.handleClick}>.</button>
          <button className="btn orange" onClick={this.handleClick}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
