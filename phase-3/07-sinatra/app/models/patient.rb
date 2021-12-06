class Patient < ActiveRecord::Base
    belongs_to :clinic

    has_many :appointments
    has_many :vets, through: :appointments

    def self.find_active
        Patient.where("active=true")
    end

    def self.find_old
        Patient.where("age > 5")
    end 

    def print
        puts "Name: #{self.name}"
    end 

 

end 
