class Api::V1::RatingsController < ApplicationController


    def index

    end


    def create

    end

    def show

    end

    def destroy 

    end

    private

    def rating_params
        params.require(:rating).permit(:game_id, :number, :description)
    end
end
