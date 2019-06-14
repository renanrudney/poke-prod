import React, { Component } from "react";
import ImageUploader from "./ImageUploader";

class EditPokemonForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.pokemon.id,
      name: this.props.pokemon.name,
      specie: this.props.pokemon.specie,
      weight: this.props.pokemon.weight,
      height: this.props.pokemon.height
      // selectedImage: this.props.pokemon.image
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit(e) {
    e.preventDefault();
    const { id, name, specie, weight, height, selectedImage } = this.state;
    const formPokemonData = new FormData(e.target);

    if (selectedImage !== null) {
      formPokemonData.append("image", selectedImage);
    }
    this.props.editPokemon(formPokemonData, id, name, specie, weight, height);
  }

  selectImage = image => this.setState({ selectedImage: image });

  unselectImage = () => this.setState({ selectedImage: "" });

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="card">
          <div className="card-image card-padding">
            <ImageUploader
              image={this.state.image}
              selectImage={this.selectImage}
              unselectImage={this.unselectImage}
            />
          </div>
          <div className="card-content">
            <label htmlFor="name" className="label">
              Name
            </label>
            <div className="control">
              <input
                id="name"
                name="name"
                className="input"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <label htmlFor="specie" className="label">
              Specie
            </label>
            <div className="control">
              <input
                id="specie"
                name="specie"
                className="input"
                type="text"
                value={this.state.specie}
                onChange={this.handleChange}
              />
            </div>
            <label htmlFor="weight">Weight</label>
            <div className="control">
              <input
                id="weight"
                name="weight"
                className="input"
                type="text"
                value={this.state.weight}
                onChange={this.handleChange}
              />
            </div>
            <label htmlFor="height">Height</label>
            <div className="control">
              <input
                id="height"
                name="height"
                className="input"
                type="text"
                value={this.state.height}
                onChange={this.handleChange}
              />
            </div>
            <button className="button is-link">Update Pokemon</button>
          </div>
        </div>
      </form>
    );
  }
}
export default EditPokemonForm;
