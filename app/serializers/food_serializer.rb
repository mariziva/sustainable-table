class FoodSerializer < ActiveModel::Serializer
  attributes :id, :date_purchased, :expiration_date, :quantity, :category
end
