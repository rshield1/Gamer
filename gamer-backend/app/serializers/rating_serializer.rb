class RatingSerializer < ActiveModel::Serializer
  attributes :id, :number, :description, :game_id
end
