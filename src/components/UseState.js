import React, { useState } from "react";

function Hooks(props) {
  const [count, setCount] = useState(0);

  const sumar = () => {
    setCount(count + 1);
  };

  const restar = () => {
    setCount(count - 1);
  };

  //console.log("Use State: ", useState());

  return (
    <>
      <h1>Hooks en React</h1>
      <h2>useState: </h2>
      <nav>
        <button onClick={restar}>-</button>
        <button onClick={sumar}>+</button>
      </nav>
      <h3>Counter: {count}</h3>
    </>
  );
}

export default Hooks;
