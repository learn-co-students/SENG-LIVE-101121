class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.references :vet
      t.references :patient
    end
  end
end
