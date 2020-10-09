class Rating < ApplicationRecord
    belongs_to :game

    #validations
    validates :number, :description, presence: true 
end
