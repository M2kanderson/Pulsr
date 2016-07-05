class ChangePhotoPublicDefault < ActiveRecord::Migration
  def change
    change_column :photos, :public, :boolean, :default => false
  end
end
