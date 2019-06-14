import React from "react";
const Pokemon = ({
  pokemon,
  onRemovePokemon = f => f,
  editingPokemon = f => f
}) => {
  let imageSrc =
    pokemon.image !== null
      ? pokemon.image.url
      : "https://bulma.io/images/placeholders/600x480.png";

  return (
    <div className="card" key={pokemon.id}>
      <div className="card-image">
        <figure className="image is-5by4">
          <img src={imageSrc} alt="Pokemon" />
        </figure>
      </div>
      <div className="card-content">
        <p className="title is-4">{pokemon.name}</p>
        <div className="content">
          <p>Specie: {pokemon.specie}</p>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
          <div className="field is-grouped">
            <p className="control">
              <button
                className="button is-primary"
                onClick={() => editingPokemon(pokemon.id)}
              >
                Edit
              </button>
            </p>
            <p className="control">
              <button
                className="button is-danger"
                onClick={() => onRemovePokemon(pokemon.id)}
              >
                Delete
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pokemon;
