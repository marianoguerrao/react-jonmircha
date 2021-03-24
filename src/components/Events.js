import React, { Component } from "react";

class Evento extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
    };

    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
  }

  multiply() {
    let { counter } = this.state;
    this.setState({ counter: counter * 2 });
    console.log(counter);
  }

  divide() {
    let { counter } = this.state;
    this.setState({ counter: counter / 2 });
  }

  render() {
    const { counter } = this.state;
    return (
      <>
        <h1>Multiplicar y dividir por dos(2)</h1>
        <nav>
          <button onClick={this.multiply}>*</button>
          <button onClick={this.divide}>/</button>
        </nav>

        <h4>{counter}</h4>
      </>
    );
  }
}

export default Evento;
