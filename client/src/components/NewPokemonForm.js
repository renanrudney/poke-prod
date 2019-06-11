import React from "react";

const NewPokemonForm = ({ onNewPokemon = f => f }) => {
  let name, weight, height, specie;
  const submit = e => {
    e.preventDefault();
    onNewPokemon(name.value, specie.value, weight.value, height.value);
    name.value = "";
    specie.value = "";
    weight.value = "";
    height.value = "";
    name.focus();
  };

  return (
    <form onSubmit={submit}>
      <input
        ref={input => (name = input)}
        type="text"
        placeholder="Name..."
        required
      />
      <input
        ref={input => (specie = input)}
        type="text"
        placeholder="Specie..."
        required
      />
      <input
        ref={input => (weight = input)}
        type="text"
        placeholder="Weight..."
      />
      <input
        ref={input => (height = input)}
        type="text"
        placeholder="Height..."
      />
      <button>Add Pokemon</button>
    </form>
  );
};

export default NewPokemonForm;
