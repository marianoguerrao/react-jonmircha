import React from "react";
import PropTypes from "prop-types";

function Propiedades(props) {
  return (
    <>
      <h1>{props.porDefecto}</h1>
      <ul>
        <li>{props.string}</li>
        <li>{props.num}</li>
        <li>{props.bool ? "boolean: true" : "boolean: falso "}</li>
        <li>
          {props.arr.map((id, item) => (
            <ul>
              <li key={id}>{item}</li>
            </ul>
          ))}
        </li>
        <li>{`Autor: ${props.obj.nombre} ${props.obj.apellido}`} </li>
        <li>{props.reactElement}</li>
        <li>{props.arr.map((item) => props.func(item)).join(", ")}</li>
        <li>{props.reactComponent}</li>
      </ul>
    </>
  );
}

Propiedades.defaultProps = {
  porDefecto: "Algunas props",
};

Propiedades.propTypes = {
  num: PropTypes.number,
};

export default Propiedades;
