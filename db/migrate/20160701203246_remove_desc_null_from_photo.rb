class RemoveDescNullFromPhoto < ActiveRecord::Migration
  def change
    change_column_null(:photos, :description, true)
  end
end
