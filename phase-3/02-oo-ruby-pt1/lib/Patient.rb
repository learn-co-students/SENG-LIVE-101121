class Patient
    attr_accessor :name, :age, :owner, :number
    attr_reader :species
    # attr_reader :name, :species, :age, :owner, :number
    # attr_writer :name, :age, :owner, :number
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
    end 

    # def name 
    #     @name
    # end 

    # def name=(value)
    #     @name = value
    # end 
end 

p1 = Patient.new('cat', 'rose', 10, 'ix', 99999999999)
p2 = Patient.new('cat', 'bubbles', 3, 'ix', 99999999999)
