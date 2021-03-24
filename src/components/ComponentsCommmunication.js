import React, { Component } from "react";

class Padre extends Component {
  state = {
    count: 0,
  };

  incrementar = () => {
    let { count } = this.state;
    this.setState({ count: count + 1 });
  };

  render() {
    const { count } = this.state;
    return (
      <>
        <h1>Este es el padre</h1>
        <Hijo
          msg="Este es un componente hijo 1 para incrementar el contador"
          incrementar={() => this.incrementar()}
        />
        <h3>{count}</h3>
      </>
    );
  }
}

function Hijo({ msg, incrementar }) {
  return <button onClick={incrementar}>{msg}</button>;
}

export default Padre;
