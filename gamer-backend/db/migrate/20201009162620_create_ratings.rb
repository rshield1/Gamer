class CreateRatings < ActiveRecord::Migration[6.0]
  def change
    create_table :ratings do |t|
      t.integer :game_id
      t.string :number
      t.string :description
      t.timestamps
    end
  end
end
