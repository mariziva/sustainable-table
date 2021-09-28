class FoodsController < ApplicationController

    before_action :authorize

def index
    foods = @current_user.foods.all
    render json: foods
end

def create
    food = @current_user.foods.create!(food_params)
    render json: food, status: :created
end

private

def food_params
    params.permit(:name, :category, :unit, :quantity, :days_until_expiration, :date_of_purchase)
end


end
