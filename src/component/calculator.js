import React, { useState } from 'react';
import calculate from '../logic/calculate';
/* eslint-disable */


  function handleClick(event, state, setter) {
    const buttonName = event.target.innerText;
    const result = calculate(state, buttonName);
    setter(result);
  }

  
 const Calculator = () => {
  const [state, setter] = useState ({total: 0, operation: null, next: null});
  const {total, next, operation } = state;

    return (
      <div className="container">
        <div className="wrapper">
          <button className="display">{total}{operation}{next}</button>
          <button className="btn grey" onClick={(event) => handleClick(event, state, setter)}>AC</button>
          <button className="btn grey" onClick={(event) => handleClick(event, state, setter)}>+/-</button>
          <button className="btn grey" onClick={(event) => handleClick(event, state, setter)}>%</button>
          <button className="btn orange" onClick={(event) => handleClick(event, state, setter)}>/</button>
          <button className="btn grey" onClick={(event) => handleClick(event, state, setter)}>7</button>
          <button className="btn grey" onClick={(event) => handleClick(event, state, setter)}>8</button>
          <button className="btn grey" onClick={(event) => handleClick(event, state, setter)}>9</button>
          <button className="btn orange" onClick={(event) => handleClick(event, state, setter)}>x</button>
          <button className="btn grey" onClick={(event) => handleClick(event, state, setter)}>4</button>
          <button className="btn grey" onClick={(event) => handleClick(event, state, setter)}>5</button>
          <button className="btn grey" onClick={(event) => handleClick(event, state, setter)}>6</button>
          <button className="btn orange" onClick={(event) => handleClick(event, state, setter)}>-</button>
          <button className="btn grey" onClick={(event) => handleClick(event, state, setter)}>1</button>
          <button className="btn grey" onClick={(event) => handleClick(event, state, setter)}>2</button>
          <button className="btn grey" onClick={(event) => handleClick(event, state, setter)}>3</button>
          <button className="btn orange" onClick={(event) => handleClick(event, state, setter)}>+</button>
          <button className="btn grey span" onClick={(event) => handleClick(event, state, setter)}>0</button>
          <button className="btn grey" onClick={(event) => handleClick(event, state, setter)}>.</button>
          <button className="btn orange" onClick={(event) => handleClick(event, state, setter)}>=</button>
        </div>
      </div>
    );
}

export default Calculator;
