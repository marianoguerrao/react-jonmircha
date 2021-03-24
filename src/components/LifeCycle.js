import React, { Component } from "react";

class Ciclo extends Component {
  constructor(props) {
    super(props);
    console.log(1, "Mount: Aun no está en el DOM");

    this.state = {
      hora: new Date().toLocaleTimeString(),
    };

    this.timer = null;
  }

  componentDidMount() {
    console.log(2, "El componente ya está en el DOM");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(3, "El estado o las props del componente cambiaron");
    console.log("Estado anterior: ", prevState);
    console.log("Props anteriores: ", prevProps);
  }

  ticTac = () => {
    this.timer = setInterval(() => {
      this.setState({ hora: new Date().toLocaleTimeString() });
    }, 1000);
  };

  iniciarReloj = () => {
    this.ticTac();
  };

  detenerReloj = () => {
    clearInterval(this.timer);
  };

  render() {
    console.log(5, "Render");
    const { hora } = this.state;
    return (
      <>
        <h1>Ciclo de vida</h1>
        <h3>Hora:</h3>
        <h3>{hora}</h3>
        <nav>
          <button onClick={this.iniciarReloj}>Iniciar reloj</button>
          <button onClick={this.detenerReloj}>Parar reloj</button>
        </nav>
      </>
    );
  }
}

export default Ciclo;
