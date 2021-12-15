class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.text :desc
      t.float :price
      t.boolean :sold, default: false
      t.references :seller, foreign_keys: { to_table: "users"}
      t.references :buyer, foreign_keys: { to_table: "users"}

      t.timestamps
    end
  end
end
