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

def get_recipes_by_ingredients
    url = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=#{ENV["api_key"]}"
    response = RestClient.get(url)
    render json: response
end


end