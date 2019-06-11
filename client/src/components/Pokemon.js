import React from "react";
const Pokemon = ({
  pokemon,
  onRemovePokemon = f => f,
  editingPokemon = f => f
}) => (
  <div className="single-pokemon" key={pokemon.id}>
    <h4>{pokemon.name}</h4>
    <p>{pokemon.specie}</p>
    <p>{pokemon.height}</p>
    <p>{pokemon.weight}</p>
    <p>----------------</p>
    <button onClick={() => onRemovePokemon(pokemon.id)}>Delete</button>
    <button onClick={() => editingPokemon(pokemon.id)}>Edit</button>
    <hr />
  </div>
);
export default Pokemon;
