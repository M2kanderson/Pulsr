class CreateTaggings < ActiveRecord::Migration
  def change
    create_table :taggings do |t|
      t.integer :photo_id
      t.integer :tag_id
      t.timestamps null: false
    end
    add_index(:taggings, [:photo_id, :tag_id], :unique => true)
    add_index(:taggings, :tag_id)
  end
end
