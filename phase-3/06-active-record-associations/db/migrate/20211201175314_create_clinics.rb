class CreateClinics < ActiveRecord::Migration[6.1]
  def change
    create_table :clinics do |t|
      t.string :clinic_name
      t.string :address
      t.string :phone
    end
  end
end
