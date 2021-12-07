class Clinic < ActiveRecord::Base
    has_many :patients, dependent: :destroy
    

    def welcome 
        puts "Welcome to #{self.clinic_name}"
    end 
end 

# The difference is with the callback.

# The :delete_all is made directly in your application and deletes by SQL :

# DELETE * FROM users where compagny_id = XXXX
# With the :destroy, there is an instantiation of all of your children. 
#So, if you can't destroy it or if each has their own :dependent, its callbacks can be called.