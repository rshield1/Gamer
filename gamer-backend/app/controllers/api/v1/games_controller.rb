class Api::V1::GamesController < ApplicationController


    def index
        @games = Game.all
        render json: @games
    end


    def create

    end

    def show

    end

    def destroy 

    end

    private

    def game_params
        params.require(:game).permit(:name, :price)
    end
end
