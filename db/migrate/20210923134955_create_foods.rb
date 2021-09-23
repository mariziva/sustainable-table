class CreateFoods < ActiveRecord::Migration[6.1]
  def change
    create_table :foods do |t|
      t.datetime :date_purchased
      t.datetime :expiration_date
      t.float :quantity
      t.string :category
      t.belongs_to :user

      t.timestamps
    end
  end
end
