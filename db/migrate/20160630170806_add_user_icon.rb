class AddUserIcon < ActiveRecord::Migration
  def change
    add_column :users, :icon, :string, default: "http://res.cloudinary.com/pulsr/image/upload/v1467306727/camera-icon-2_dc0oce.png"
  end
end
