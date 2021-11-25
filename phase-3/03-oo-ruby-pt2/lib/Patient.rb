class Patient
    attr_accessor :name, :age, :owner, :number
    attr_reader :species
    @@all = []

    def initialize(species="cat", name, age, owner,number)
        @species = species
        @name = name
        @age = age
        @owner = owner
        @number = number
 
        @@all << self
    end 
#Lets us call Patient.all, a class method
    def self.all
        @@all
    end 

    def self.find_patient(name,owner)
        @@all.find{|p| p.name == name && p.owner == owner}
    end 

    # def self.remove_patient(name, owner)
    #    @@all = @@all.filter do |p|
    #         p.name != name && p.owner != owner
    #     end
    # end

    # def remove_patient
    #    @@all = @@all.filter do |p|
    #         p.name != @name && p.owner != @owner
    #     end
    # end
    
    
#Lets us call instance.print_info a instance method
    def print_info
        puts "Name: #{@name}"
        puts "Species: #{@species}"
        puts "Age: #{@age}"
        puts "Owner: #{@owner}"
        puts "Phone number: #{@number}"
        puts "--------------------------------"
    end 

#updates Patient info
    def update_phone_number(new_number)
        @number = new_number
        binding.pry
        self.print_info
    end 


end 
