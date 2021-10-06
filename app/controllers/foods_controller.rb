class FoodsController < ApplicationController

def index
    foods = @current_user.foods.all
    render json: foods
end

def create
    food = @current_user.foods.create!(food_params)
    render json: food, status: :created
end

def show
    food = @current_user.foods.find(food_params)
    if food
    render json: food, status: :ok
    else
    render json: {error:"Food not found"}, status: :not_found
    end
end

def update
    food = Food.find(params[:id])
    if food
        food.update(food_params)
        render json: food, status: :accepted
    else
        render json: {error:"Food not found"}, status: :not_found
    end
end

def destroy
    food = Food.find(params[:id])
    if food
        food.destroy
        head :no_content
    else
        render json: {error:"Food not found"}, status: :not_found
    end
end

private

def food_params
    params.permit(:name, :category, :unit, :quantity, :days_until_expiration, :date_of_purchase)
end


end