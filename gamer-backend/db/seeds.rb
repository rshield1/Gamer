
require 'faker'


Game.destroy_all
Rating.destroy_all


game = Game.create(name: Faker::Game.title, price: Faker::Number.decimal(l_digits: 2, r_digits: 2))

rating = Rating.new(game_id: 1, number: 4, description: "Its a good classic")