Rails.application.routes.draw do
  
  resources :recipes
  resources :foods
  resources :users

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/foods", to: "foods#index"
  # get "/recipes", to: "recipes#index"

  get '/randomrecipe', to: "recipes#get_random_recipe"

  get '/recipesbyingredient', to: "recipes#get_recipes_by_ingredient"

  get '/mealplanner', to: "recipes#index"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
