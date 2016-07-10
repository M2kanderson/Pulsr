class CreateAlbumMemberships < ActiveRecord::Migration
  def change
    create_table :album_memberships do |t|
      t.integer :album_id
      t.integer :photo_id
      t.timestamps null: false
    end
    add_index(:album_memberships, [:photo_id, :album_id], :unique => true)
    add_index(:album_memberships, :album_id)
  end

end
