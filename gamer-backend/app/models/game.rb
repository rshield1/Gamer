class Game < ApplicationRecord
    has_many :ratings

    #validations
    validates :name, presence: true


end
