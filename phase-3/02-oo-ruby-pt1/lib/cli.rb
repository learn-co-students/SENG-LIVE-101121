def initialize_app 
    menu
end 

#runs main menu
def menu 
    puts "Welcome to Flatiron Clinic for cute snoots"
    puts "Please choose an option:"
    puts "1. List all Patients"
    puts "2. Enter new Patient"
    puts "3. Find Pet"
    puts "0. To exit"

    user_input = gets.strip

    case user_input
    when "1"
        list_patient_info 
        menu  
    when "2"
        add_patient
        menu 
    when "0"
        puts "goodbye"
    else
        puts try_again
        initialize_app 
    end
end 

#Lists all Patient info
def list_patient_info 
    #TODO use class vairable and instance method to print all patients
    puts 'press any key to return to menu'
    user_input = gets.strip
end 

#Creates an instance of a patient 
def add_patient 
        puts 'What is your pets species?'
        species = gets.strip
        puts 'What is your pets name?'
        name = gets.strip
        puts 'What is your pets age?'
        age = gets.strip
        puts 'What is your name?'
        owner = gets.strip
        puts 'What is your number?'
        number = gets.strip

        patient_hash = {
            #TODO: Add unique ID 
            species:species,
            name: name,
            age: age,
            owner:owner,
            number:number
        }

        puts "#{patient_hash} is this correct? Y or N"
        correct = gets.strip
        if correct == 'Y' ||  correct == 'y'
            #TODO create an instance of a Patient
        else
            add_patient 
        end 
end 

#Default message for incorrect input
def try_again
    'sorry that option does not exsist, please chose again'
end 
    
    