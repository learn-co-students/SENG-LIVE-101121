class CreatePatients < ActiveRecord::Migration[6.1]
  def change
    create_table :patients do |t|
      t.string :species
      t.string :name
      t.integer :age
      t.string :owner
      t.string :phone
      t.boolean :active
      t.integer :clinic_id
    end
  end
end
