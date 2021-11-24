def initialize_app 
    seed
    menu
end 

#runs main menu
def menu 
    puts "Welcome to Flatiron Clinic for cute snoots"
    puts "Please choose an option:"
    puts "1. List all Patients"
    puts "2. Enter new Patient"
    puts "0. To exit"

    user_input = gets.strip

    case user_input
    when "1"
        list_patient_info   
    when "2"
        add_patient 
    when "0"
        puts "goodbye"
    else
        puts try_again
    end
end 

#Lists all Patient info
def list_patient_info 
    Patient.all.each{|p|  p.print_info}
    return_to_menu
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
            species:species,
            name: name,
            age: age,
            owner:owner,
            number:number
        }

        puts "#{patient_hash} is this correct? Y or N"
        correct = gets.strip
        if correct == 'Y' ||  correct == 'y'
            Patient.new(species, name, age, owner, number)
            return_to_menu
        else
            add_patient 
        end 
end 

#Default message for incorrect input
def try_again
    'sorry that option does not exsist, please chose again'
    return_to_menu
end 


#Return to menu buton
def return_to_menu
    puts 'press any key to return to menu'
    gets.strip
    menu
end 


#Creates fake data to test our app
def seed
    patients = [
        {species:"cat", age:1, name:"rose", owner:"ix", phone: 9999999999},
        {species:"dog", age:1, name:"Jack", owner:"Diesel Reyes", phone: 9999999999},
        {species:"bird", age:1, name:"Mia", owner:"Diesel Reyes", phone: 9999999999},
        {species:"cat", age:1, name:"Milo", owner:"Oliver Olson", phone: 9999999999},
        {species:"dog", age:1, name:"Mia", owner:"Luna Turner", phone: 9999999999},
        {species:"bird", age:1, name:"Lucy", owner:"Zoey Byrd", phone: 9999999999},
        {species:"cat", age:1, name:"Hank", owner:"Scout Knight", phone: 9999999999},
        {species:"bird", age:1, name:"Piper", owner:"Lilly Daniel", phone: 9999999999},
        {species:"bird", age:1, name:"Jax", owner:"Abby Erickson", phone: 9999999999},
        {species:"cat", age:1, name:"Rosie", owner:"Bella Ramos", phone: 9999999999},
        {species:"cat", age:1, name:"Koda", owner:"Jax Ingram", phone: 9999999999},
        {species:"bird", age:1, name:"Murphy", owner:"Gracie Smith", phone: 9999999999},
        {species:"bird", age:1, name:"Lily", owner:"Max Patel", phone: 9999999999},
        {species:"cat", age:1, name:"Moose", owner:"Jack Bolton", phone: 9999999999},
        {species:"dog", age:1, name:"Oliver", owner:"Mia Ward", phone: 9999999999},
        {species:"cat", age:1, name:"Rocky", owner:"Daisy Ryan", phone: 9999999999},
        {species:"cat", age:1, name:"Gunner", owner:"Abby Williams", phone: 9999999999},
        {species:"bird", age:1, name:"Oliver", owner:"Gunner Guerrero", phone: 9999999999},
        {species:"cat", age:1, name:"Lola", owner:"Toby Guerrero", phone: 9999999999},
        {species:"bird", age:1, name:"Duke", owner:"Stella Vaughan", phone: 9999999999},
        {species:"bird", age:1, name:"Lola", owner:"Finn Harris", phone: 9999999999},
        {species:"dog", age:1, name:"Charlie", owner:"Ollie Marsh", phone: 9999999999},
        {species:"bird", age:1, name:"Gracie", owner:"Charlie", phone: 9999999999},
        {species:"dog", age:1, name:"Mia", owner:"Louie Reyes", phone: 9999999999},
        {species:"dog", age:1, name:"Zeus", owner:"Gus Olson", phone: 9999999999},
        {species:"cat", age:1, name:"Marley", owner:"Zoe Byrd", phone: 9999999999},
        {species:"bird", age:1, name:"Abby", owner:"Ruby Knight", phone: 9999999999},
        {species:"cat", age:1, name:"Rocky", owner:"Tucker Daniel", phone: 9999999999},
        {species:"dog", age:1, name:"Teddy", owner:"Harley Erickson", phone: 9999999999},
        {species:"bird", age:1, name:"Leo", owner:"Ruby Ramos", phone: 9999999999},
        {species:"dog", age:1, name:"Teddy", owner:"Ruby Ingram", phone: 9999999999},
    ]
    patients.each{|p| Patient.new(p[:species], p[:name], p[:owner], p[:number])}

end 
