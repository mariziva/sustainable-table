class CreateJoinTableFoodsRecipes < ActiveRecord::Migration[6.1]
  def change
    create_join_table :foods, :recipes do |t|
      # t.index [:food_id, :recipe_id]
      # t.index [:recipe_id, :food_id]
    end
  end
end
