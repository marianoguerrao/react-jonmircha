import React, { Component } from "react";
import Data from "./helpers/data.json";

function DataList(props) {
  return (
    <li>
      <a href={props.element.web} target="_blank">
        {props.element.name}
      </a>
    </li>
  );
}

class Elemento extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seasons: ["Primavera", "Verano", "Otoño", "Invierno"],
    };
  }

  render() {
    const { seasons } = this.state;
    //console.log(Data);
    return (
      <>
        <h1>Elemento a renderizar</h1>
        <h2>Estaciones del año:</h2>
        <ul>
          {seasons.map((id, item) => (
            <h4 key={id}>{item}</h4>
          ))}
        </ul>
        <h2>Frameworks Frontend: </h2>
        <ul>
          {Data.frameworks.map((item) => (
            <DataList key={item.id} element={item} />
          ))}
        </ul>
      </>
    );
  }
}

export default Elemento;
