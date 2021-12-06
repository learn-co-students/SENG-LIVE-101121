class Patient < ActiveRecord::Base
    belongs_to :clinic

    has_many :appointments
    has_many :vets, through: :appointments
end 
