class FoodsController < ApplicationController

    before_action :authorize

def index
    foods = @current_user.foods.all
    render json: foods
end




end
