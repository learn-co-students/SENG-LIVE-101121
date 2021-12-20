class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email 

  has_many :sold_items
  has_many :purchased_items

  has_many :sold_categories 
  has_many :purchased_categories
end
