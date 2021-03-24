import React, { createRef, useRef } from "react";

function Referencia() {
  let refMenuBtn = useRef();
  let refMenu = useRef();

  console.log(refMenuBtn);

  const toggleMenu = () => {
    if (refMenuBtn.current.textContent === "Menu") {
      refMenuBtn.current.textContent = "Cerrar";
      refMenu.current.style.display = "block";
    } else {
      refMenuBtn.current.textContent = "Menu";
      refMenu.current.style.display = "none";
    }
  };

  //     const toggleMenu = (e) => {
  //     const menu = document.getElementById("menu");

  //     if (e.target.textContent === "Menu") {
  //       e.target.textContent = "Cerrar";
  //       menu.style.display = "block";
  //     } else {
  //       e.target.textContent = "Menu";
  //       menu.style.display = "none";
  //     }
  //   };

  return (
    <>
      <h1>Referencias</h1>
      <button id="menu-btn" ref={refMenuBtn} onClick={toggleMenu}>
        Menu
      </button>
      <nav id="menu" ref={refMenu} style={{ display: "none" }}>
        <a href="#" style={{ color: "white" }}>
          Link
        </a>
        <br />
        <a href="#" style={{ color: "white" }}>
          Link
        </a>
        <br />
        <a href="#" style={{ color: "white" }}>
          Link
        </a>
        <br />
        <a href="#" style={{ color: "white" }}>
          Link
        </a>
      </nav>
    </>
  );
}

export default Referencia;
