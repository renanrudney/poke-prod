# frozen_string_literal: true

# Attach one image per Pokemon
class Pokemon < ApplicationRecord
  has_one_attached :image
end
