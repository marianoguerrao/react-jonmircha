import React, { Component } from "react";

function Login(props) {
  const { text } = props;
  return (
    <>
      <h3>{text}</h3>
    </>
  );
}

function Logout(props) {
  const { text } = props;
  return (
    <>
      <h3>{text}</h3>
    </>
  );
}

class Condicional extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logged: false,
    };
  }

  logUser = () => {
    this.setState({ logged: true });
  };

  exitUser = () => {
    this.setState({ logged: false });
  };

  render() {
    const { logged } = this.state;
    return (
      <>
        <h1>Renderizado Condicional</h1>
        {logged ? (
          <Login text="El usuario inició sesión" />
        ) : (
          <Logout text="El usuario no ha iniciado sesión" />
        )}
        <button onClick={this.logUser}>Iniciar sesión</button>
        <button onClick={this.exitUser}>Cerrar sesión</button>
      </>
    );
  }
}

export default Condicional;
