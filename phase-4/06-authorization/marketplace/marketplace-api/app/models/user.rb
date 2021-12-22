class User < ApplicationRecord
    has_secure_password 
    has_many :purchased_items, class_name: 'Item', foreign_key: 'buyer_id', dependent: :nullify
    has_many :sold_items, class_name: 'Item', foreign_key: 'seller_id', dependent: :nullify

    has_many :sold_categories, through: :sold_items, source: :categories
    has_many :purchased_categories, through: :purchased_items, source: :categories


    validates :username, presence: true, uniqueness: true
    validates :email, format: /\w+@\w+\.{1}[a-zA-Z]{2,}/, presence: true, uniqueness: true
end
