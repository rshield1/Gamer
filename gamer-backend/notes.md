Games
- has many :ratings

:name -string
:price -float



Ratings
- belongs_to :games

:game_id - integer
:number - float
:description - string