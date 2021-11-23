# Object Orientation in Ruby pt. 1
### SWBAT
- [] Understand the fundamentals of ruby Classes 
- [] Create instances of a Class in 
- [] Use the initialize method to add attributes
- [] Use setters and getters with attribute macros
- [] Understand instance methods
- [] Understand class variables and self

## Run the App
1. In the terminal, directory 02-oo-ruby-pt1, run  `ruby ./bin/run.rb` to start the CLI
2. If the following error message is returned: zsh: permission denied: ./bin/run.rb, run the following command: `chmod +x ruby ./bin/run.rb`
## Object-Orientation
- Abstraction, polymorphism, inheritance and encapsulation form four of the main pillars of OOP
- What is an object? An object is a combo of data and behaviors
- In Ruby, (almost) everything is an object. Every bit of information and code can be given their own properties and actions(aka methods).

## Class
- A object making factory 
- Allows us to make consistent attributes and methods
- Capitalized and singular
- initialize
    - a special method belonging to classes that allow us to add attributes
    - @variable_name are instance variables, special variables that belong to the instance of the class
    - @@variable_name are class variables that belong to the class themselves
- .new creates an instance 
- self represents the instance being created

```
class Doctor
    @@all = []
    def initialize(name)
        @name = name
        @@all << self
    end
end 

d1 = Doctor.new('ix')

```

## getters and setters 
- we need attr macros to access and change instance variables 
- attr_reader -> reads the instance variable  (getter)
- attr_writer -> changes an instance variable (setter)
- attr_accessor -> does both (getter and setter)
```
    attr_accessor :name, :age, :owner, :phone
    # attr_reader :name
    # attr_writer :name

    d1.name 
    d1.name = 'tod'

```

## getting a class variable with a class method
- to get a class variable you must write a getter method and use self

```
def self.all
    @@all
end

Patient.all

```

