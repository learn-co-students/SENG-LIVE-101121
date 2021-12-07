class Appointment < ActiveRecord::Base
    belongs_to :patient
    belongs_to :vet
end 