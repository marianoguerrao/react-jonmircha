import React, { useState, useEffect } from "react";

function PokeCard(props) {
  return (
    <>
      <figure>
        <img src={props.avatar} alt={props.name} />
        <figcaption>{props.name}</figcaption>
      </figure>
    </>
  );
}

function Ajax() {
  const [pokemons, setPokemons] = useState([]);

  //   useEffect(() => {
  //     let url = "https://pokeapi.co/api/v2/pokemon";
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((json) => {
  //         json.results.forEach((element) => {
  //           fetch(element.url)
  //             .then((res) => res.json())
  //             .then((item) => {
  //               let pokedata = {
  //                 id: item.id,
  //                 name: item.name,
  //                 img: item.sprites.front_default,
  //               };
  //               setPokemons((pokemons) => [...pokemons, pokedata]);
  //               console.log("POKEMONS: ", pokemons);
  //             });
  //         });
  //       });
  //   }, []);

  useEffect(() => {
    const getPokemons = async () => {
      let url = "https://pokeapi.co/api/v2/pokemon";
      let res = await fetch(url);
      let json = await res.json();

      json.results.forEach(async (element) => {
        let response = await fetch(element.url);
        let data = await response.json();

        let pokedata = {
          id: data.id,
          name: data.name,
          img: data.sprites.front_default,
        };

        setPokemons((pokemons) => [...pokemons, pokedata]);
      });
    };

    getPokemons();
  }, []);

  return (
    <>
      <h1>Llamada asíncrona con Hooks</h1>
      <ul>
        {pokemons.map((item) => (
          <PokeCard key={item.id} name={item.name} avatar={item.img} />
        ))}
      </ul>
    </>
  );
}

export default Ajax;
