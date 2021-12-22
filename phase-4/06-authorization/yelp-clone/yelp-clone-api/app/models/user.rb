class User < ApplicationRecord
    has_many :reviews 
    has_many :businesses, through: :reviews 

    validates :username, :email, presence: true, uniqueness: true 
end
