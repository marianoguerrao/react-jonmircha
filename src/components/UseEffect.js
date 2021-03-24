import React, { useEffect, useState } from "react";

function Effect() {
  const [scrollY, setscrollY] = useState(0);

  useEffect(() => {
    console.log("Use Effect: Component did Update");

    const detectarScroll = () => {
      setscrollY(window.pageYOffset);
    };

    window.addEventListener("scroll", detectarScroll);
  }, [scrollY]);

  useEffect(() => {
    console.log("Use Effect: Component did Mount");
  }, []);

  useEffect(() => {
    return () => {
      console.log("Use Effect: Component will Unmount");
    };
  }, []);

  return (
    <>
      <h2>useEffect: </h2>
      <p>Scroll Y del navegador: {scrollY} px</p>
    </>
  );
}

export default Effect;
