class CreateRatings < ActiveRecord::Migration[6.0]
  def change
    create_table :ratings do |t|
      t.integer :game_id
      t.string :rating
      t.string :description
      t.timestamps
    end
  end
end
