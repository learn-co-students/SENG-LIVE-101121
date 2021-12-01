class Clinic < ActiveRecord::Base
    has_many :patients
end 