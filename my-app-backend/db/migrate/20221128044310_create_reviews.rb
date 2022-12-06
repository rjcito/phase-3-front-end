class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :rating
      t.string :comment
      t.integer :daycare_id #this is our foreign key 
      t.timestamps
    end
  end
end
