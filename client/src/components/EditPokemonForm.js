import React, { Component } from "react";
class EditPokemonForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.pokemon.id,
      name: this.props.pokemon.name,
      specie: this.props.pokemon.specie,
      weight: this.props.pokemon.weight,
      height: this.props.pokemon.height
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit(e) {
    e.preventDefault();
    const { id, name, specie, weight, height } = this.state;
    this.props.editPokemon(id, name, specie, weight, height);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Name..."
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          name="specie"
          type="text"
          placeholder="Specie..."
          value={this.state.specie}
          onChange={this.handleChange}
        />
        <input
          name="weight"
          type="text"
          placeholder="Weight..."
          value={this.state.weight}
          onChange={this.handleChange}
        />
        <input
          name="height"
          type="text"
          placeholder="Height..."
          value={this.state.height}
          onChange={this.handleChange}
        />
        <button>Update Pokemon</button>
      </form>
    );
  }
}
export default EditPokemonForm;
