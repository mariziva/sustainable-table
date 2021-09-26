class FoodSerializer < ActiveModel::Serializer
  attributes :id, :name, :date_of_purchase, :days_until_expiration, :quantity, :category, :user_id, :unit
end
