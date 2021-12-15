class CreateBusinesses < ActiveRecord::Migration[6.1]
  def change
    create_table :businesses do |t|
      t.string :name
      t.string :category
      t.string :city
      t.string :state
      t.integer :zip_code

      t.timestamps
    end
  end
end
