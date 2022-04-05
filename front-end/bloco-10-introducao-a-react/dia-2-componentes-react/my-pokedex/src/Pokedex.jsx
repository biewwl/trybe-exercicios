import React, { Component } from "react";
import Pokemon from './Pokemon';
import pokemons from './data';

class Pokedex extends Component {
  render () {
    return pokemons.map((e) => (<Pokemon key={e.name} objeto={e}/>))
  }
}

export default Pokedex;
