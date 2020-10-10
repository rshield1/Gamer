class Api::V1::RatingsController < ApplicationController
    before_action :set_game

    def index
        @ratings = @game.ratings
        render json: @ratings
    end

    def show
        @rating = @game.ratings.find_by(id: params[:id])
        render json: @rating
    end

    def create
        binding.pry
        @rating = @game.ratings.create(number: params[:rating], description: params[:description])
        @rating.save
        render json: @game
        #create method to update rating

    end

    # def destroy 

    # end

    private

    def set_game
        @game = Game.find(params[:game_id])
    end

    def rating_params
        params.require(:rating).permit(:game_id, :number, :description)
    end
end
