import React, { Component } from "react";

function EstadoB(props) {
  const { childCount } = props;
  return (
    <>
      <h3>{childCount}</h3>
    </>
  );
}

class Estado extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     count: 0,
  //   };
  // }

  state = {
    count: 0,
  };

  sumNumber = () => {
    let { count } = this.state;
    this.setState({ count: count + 1 });
  };

  subsNumber = () => {
    let { count } = this.state;
    this.setState({ count: count - 1 });
  };

  render() {
    const { count } = this.state;
    const { suma, resta } = this.props;
    return (
      <>
        <h1>Componente del estado: </h1>
        <br />
        <h5>{resta}</h5>
        <button onClick={this.subsNumber}>-</button>
        <h3>{count}</h3>
        <h5>{suma}</h5>
        <button onClick={this.sumNumber}>+</button>
        <h1>Componente Hijo: </h1>
        <EstadoB childCount={count} />
      </>
    );
  }
}

export default Estado;
