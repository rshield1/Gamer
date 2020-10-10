# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Game.destroy_all
Rating.destroy_all
game = Game.create(name: 'Zelda', price: 30.15)

rating = Rating.new(game_id: 1, rating: 4, description: "Its a good classic")