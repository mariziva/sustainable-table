class RecipesController < ApplicationController

    require 'rest-client'

##custom method to find recipes

##can probably pull out the params to make things cleaner--one based on what is in fridge overall, what uses things expiring soonest, etc.

def get_recipes
    url = "stuff"
    response = RestClient.get(url)
    render json: response
end