import React, { Component } from "react";
import axios from "axios";
import Pokemon from "./Pokemon";
import NewPokemonForm from "./NewPokemonForm";
import EditPokemonForm from "./EditPokemonForm";

class ListPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      editingPokemonId: null
    };
    this.addNewPokemon = this.addNewPokemon.bind(this);
    this.removePokemon = this.removePokemon.bind(this);
    this.editingPokemon = this.editingPokemon.bind(this);
    this.editPokemon = this.editPokemon.bind(this);
  }
  componentDidMount() {
    axios
      .get("/api/v1/pokemons.json")
      .then(response => {
        console.log(response);
        this.setState({
          pokemons: response.data
        });
      })
      .catch(error => console.log(error));
  }
  addNewPokemon(name, specie, weight, height) {
    axios
      .post("/api/v1/pokemons", { pokemon: { name, specie, weight, height } })
      .then(response => {
        console.log(response);
        const pokemons = [...this.state.pokemons, response.data];
        this.setState({ pokemons });
      })
      .catch(error => {
        console.log(error);
      });
  }
  editingPokemon(id) {
    this.setState({
      editingPokemonId: id
    });
  }
  editPokemon(id, name, specie, weight, height) {
    axios
      .put("/api/v1/pokemons/" + id, {
        pokemon: {
          name,
          specie,
          weight,
          height
        }
      })
      .then(response => {
        console.log(response);
        const pokemons = this.state.pokemons;
        const index = pokemons.findIndex(pokemon => pokemon.id === id);
        pokemons[index] = { id, name, specie, weight, height };
        this.setState(() => ({
          pokemons,
          editingPokemonId: null
        }));
      })
      .catch(error => console.log(error));
  }
  removePokemon(id) {
    axios
      .delete("/api/v1/pokemons/" + id)
      .then(response => {
        const pokemons = this.state.pokemons.filter(
          pokemon => pokemon.id !== id
        );
        this.setState({ pokemons });
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="Pokemons-container">
        {this.state.pokemons.map(pokemon => {
          if (this.state.editingPokemonId === pokemon.id) {
            return (
              <EditPokemonForm
                pokemon={pokemon}
                key={pokemon.id}
                editPokemon={this.editPokemon}
              />
            );
          } else {
            return (
              <Pokemon
                pokemon={pokemon}
                key={pokemon.id}
                onRemovePokemon={this.removePokemon}
                editingPokemon={this.editingPokemon}
              />
            );
          }
        })}
        <NewPokemonForm onNewPokemon={this.addNewPokemon} />
      </div>
    );
  }
}
export default ListPokemon;
