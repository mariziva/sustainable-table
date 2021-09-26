class CreateFoods < ActiveRecord::Migration[6.1]
  def change
    create_table :foods do |t|
      t.datetime :date_of_purchase
      t.integer :days_until_expiration
      t.float :quantity
      t.string :category
      t.belongs_to :user
      t.string :unit
      t.string :name

      t.timestamps
    end
  end
end
