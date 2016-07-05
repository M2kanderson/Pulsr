class RemoveAlbumNullFromPhoto < ActiveRecord::Migration
  def change
    change_column_null(:photos, :album_id, true)
  end
end
