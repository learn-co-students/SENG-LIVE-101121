class Review < ApplicationRecord
  belongs_to :user
  belongs_to :business


  validates :content, presence: true 
end
