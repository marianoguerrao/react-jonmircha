import React, { Component } from "react";

function Pokemon(props) {
  return (
    <>
      <figure>
        <img src={props.avatar} alt={props.name} />
        <figcaption>{props.name}</figcaption>
      </figure>
    </>
  );
}

class Asincrona extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    let url = "https://pokeapi.co/api/v2/pokemon";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        //console.log(json);
        json.results.forEach((element) => {
          fetch(element.url)
            .then((img) => img.json())
            .then((el) => {
              //console.log("IMGS: ", el);
              let individualPoke = {
                id: el.id,
                name: el.name,
                img: el.sprites.front_default,
              };

              let totalPokemons = [...this.state.pokemons, individualPoke];

              this.setState({ pokemons: totalPokemons });
            });
        });
      });
  }

  render() {
    const { pokemons } = this.state;
    return (
      <>
        <h1>Llamadas asíncronas con AJAX</h1>
        <ul>
          {pokemons.map((item) => (
            <Pokemon key={item.id} name={item.name} avatar={item.img} />
          ))}
        </ul>
      </>
    );
  }
}

export default Asincrona;
