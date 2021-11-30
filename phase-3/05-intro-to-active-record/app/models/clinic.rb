class Clinic < ActiveRecord::Base
    has_many :patients
    #Create
        #Clinic.new
        #Clinic.create save and new
    #Read
        #Clinic.all pull all the items from your db table
        #Clinic.first pulls the first item from db table
        #Clinic.last pulls last items from you db table
        #Clinic.find finds by the id
        #Clinic.find_by finds by an attribute 
    #Update
        #c.save 
        #c.update
        #Clinic.update
    #Delete
        #c.delete
        #Clinic.destroy_all
end 