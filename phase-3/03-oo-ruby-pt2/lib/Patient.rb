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
    
#Lets us call instance.print_info a instance method
    def print_info
        puts "Name: #{@name}"
        puts "Species: #{@species}"
        puts "Age: #{@age}"
        puts "Owner: #{@owner}"
        puts "Phone number: #{@number}"
        puts "--------------------------------"
    end 


end 
