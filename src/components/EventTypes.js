import React, { Component } from "react";

function CustomBtn(props) {
  return <button onClick={props.handleClick}>Boton como componente</button>;
}

class EventTypes extends Component {
  /*Property Initializers: Ya no es necesario declarar el constructor ni el metodo super
  Sólo con colocar el state y las funciones se declaran con arrow function para que 
  automaticamente el this de la función esté bindeado al this de la clase padre y 
  por lo tanto al estado */
  state = {};

  saludo = (e, msg) => {
    console.log("Hola perros");
    console.log("Evento sintetico: ", e);
    console.log("Target event: ", e.target);
    console.log("Evento nativo: ", e.nativeEvent);
    console.log(msg);
  };

  render() {
    return (
      <>
        <h1>Tipos de eventos en React </h1>
        <button
          onClick={(e) =>
            this.saludo(
              e,
              "Este mensaje fue pasado como parametro en un evento"
            )
          }
        >
          Saludar
        </button>
        <br />
        {/*Evento personalizado*/}
        <CustomBtn
          handleClick={(e) =>
            this.saludo(e, "Mensaje desde un evento personalizado")
          }
        />
      </>
    );
  }
}

export default EventTypes;
