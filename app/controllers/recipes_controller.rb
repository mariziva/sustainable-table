require 'rest-client'

class RecipesController < ApplicationController

##custom method to find recipes

##can probably pull out the params to make things cleaner--one based on what is in fridge overall, what uses things expiring soonest, etc.

def index
    recipes = @current_user.recipes.all
    render json: recipes
end

def create
    recipe = @current_user.recipes.create!(recipe_params)
    render json: recipe, status: :created
end

def show
    recipe = @current_user.recipes.find(recipe_params)
    if recipe
        render json: recipe, status: :ok
    else
        render json: {error:"Recipe not found"}, status: :not_found
end
end

def get_random_recipe
    url = "https://api.spoonacular.com/recipes/random?apiKey=#{ENV["api_key"]}"
    response = RestClient.get(url)
    render json: response
end

def ingredientList
    foodnames = @current_user.foods.map { |food| food.name }
    ingredientList = foodnames.join(",+")
end

def get_recipes_by_ingredient
    url = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=#{ingredientList}&number=5&apiKey=#{ENV["api_key"]}"
    response = RestClient.get(url)
    render json: response
end

private

def recipe_params
    params.permit(:id, :name, :description, :ingredients)
end


end