class GameSerializer < ActiveModel::Serializer
  #What do I want to access with game
  attributes :id, :name, :price

  #have access to ratings
  has_many :ratings
end
