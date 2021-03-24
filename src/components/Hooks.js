import React, { useEffect, useState } from "react";

function Reloj(props) {
  return <h3>{props.hora}</h3>;
}

function RelojHooks() {
  const [hour, setHour] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer;

    if (visible) {
      timer = setInterval(() => setHour(new Date().toLocaleTimeString()), 1000);
    } else {
      clearInterval(timer);
    }
    return () => {
      console.log("reloj detenido");
      clearInterval(timer);
    };
  }, [visible]);

  return (
    <>
      <h2>Reloj con hooks:</h2>
      {visible && <Reloj hora={hour} />}
      <nav>
        <button onClick={() => setVisible(false)}>Parar reloj</button>
        <button onClick={() => setVisible(true)}>Iniciar reloj</button>
      </nav>
    </>
  );
}

export default RelojHooks;
