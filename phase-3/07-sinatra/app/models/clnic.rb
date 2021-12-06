class Clinic < ActiveRecord::Base
    has_many :patients, dependent: :destroy

    def find_old
        self.patients.where("age > 5")
    end 

end 

