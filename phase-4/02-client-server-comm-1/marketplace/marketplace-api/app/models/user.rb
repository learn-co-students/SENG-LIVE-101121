class User < ApplicationRecord
    has_many :purchased_items, class_name: 'Item', foreign_key: 'buyer_id'
    has_many :sold_items, class_name: 'Item', foreign_key: 'seller_id'
end
