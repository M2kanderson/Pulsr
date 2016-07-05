class RemoveAlbumNullValFromPhoto < ActiveRecord::Migration
  def change
    change_column(:photos, :album_id, :integer)
  end
end
