class Clinic < ActiveRecord::Base
    has_many :patients, dependent: :destroy
    

    def welcome 
        puts "Welcome to #{self.clinic_name}"
    end 
end 
