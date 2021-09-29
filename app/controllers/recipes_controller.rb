require 'rest-client'

class RecipesController < ApplicationController

##custom method to find recipes

##can probably pull out the params to make things cleaner--one based on what is in fridge overall, what uses things expiring soonest, etc.

# def index
#     recipe = Recipe.all
#     render json: recipe
# end

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


end