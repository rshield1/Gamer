class Game < ApplicationRecord
    has_many :ratings

    #validations
    validates :name, presence: true

    #instance method

    def update_rating(rating)
    end
end
