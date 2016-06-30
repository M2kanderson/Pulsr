class Photo < ActiveRecord::Base
  validates :url, :title, :description, :public, presence: true;
  belongs_to :user
  has_many :comments
end
