class CreateExperiences < ActiveRecord::Migration[6.0]
  def change
    create_table :experiences do |t|
      t.string :name
      t.text :description
      t.string :region
      t.string :image_url
      t.references :location, null: false, foreign_key: true

      t.timestamps
    end
  end
end

