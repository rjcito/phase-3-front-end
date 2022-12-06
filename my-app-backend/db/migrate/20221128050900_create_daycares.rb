class CreateDaycares < ActiveRecord::Migration[6.1]
  def change
    create_table :daycares do |t|
      t.string :name
      t.string :city
      t.integer :cost
    end
  end
end
