class PatientORM
    attr_accessor :name, :age, :owner, :number
    attr_reader :species, :id

    def initialize(attributes) 
        attributes.each do |key, value| 
            if self.respond_to?("#{key.to_s}=") 
                self.send("#{key.to_s}=", value) 
            end 
        end

    end

    def save
         sql = <<-SQL
         INSERT INTO patient (species, name, age, owner, number) VALUES (?,?,?,?,?);        
         SQL

        DB.execute(sql, self.species, self.name, self.age, self.owner, self.number)
        @id = DB.last_insert_row_id
        self 
    end


    def self.all 
        resources = DB.execute("SELECT * FROM patients")
        resources.map do |hash|
          self.new(hash)
        end
    end

    def self.create_table 
        sql = <<-SQL
        CREATE TABLE IF NOT EXISTS patients (
            id INTEGER,
            clinic_id INTEGER,
            species VARCHAR(30),
            name VARCHAR(50),
            age INTEGER,
            owner VARCHAR(50),
            number VARCHAR(15),
            PRIMARY KEY(id)
        );
        SQL
        DB.execute(sql)
    end 


end 