class UpdatePokemonService
  def initialize(pokemon, params)
    @pokemon = pokemon
    @params = params
  end

  def call
    if @params[:image] && !file?(@params[:image])
      delete_image if @pokemon.image.attached?
      @params.delete(:image)
    end

    @pokemon.update(@params)
  end

  private

  def file?(param)
    param.is_a?(ActionDispatch::Http::UploadedFile)
  end

  def delete_image
    @pokemon.image.purge
  end
end