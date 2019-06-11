# frozen_string_literal: true

module Api
  module V1
    # Api versioning and namespace
    class PokemonsController < ApplicationController
      before_action :set_pokemon, only: [:show, :update, :destroy]

      # GET /pokemons
      def index
        @pokemons = Pokemon.all

        render json: @pokemons
      end

      # GET /pokemons/1
      def show
        render json: @pokemon
      end

      # POST /pokemons
      def create
        @pokemon = Pokemon.new(pokemon_params)

        if @pokemon.save
          render json: @pokemon, status: :created
        else
          render json: @pokemon.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /pokemons/1
      def update
        if @pokemon.update(pokemon_params)
          render json: @pokemon
        else
          render json: @pokemon.errors, status: :unprocessable_entity
        end
      end

      # DELETE /pokemons/1
      def destroy
        @pokemon.destroy
        if @pokemon.destroy
          head :no_content, status: :ok
        else
          render json: @pokemon.errors, status: :unprocessable_entity
        end
      end

      private

      # Use callbacks to share common setup or constraints between actions.
      def set_pokemon
        @pokemon = Pokemon.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def pokemon_params
        params.require(:pokemon).permit(:name, :height, :weight, :specie)
      end
    end
  end
end
