class Photo < ActiveRecord::Base
  validates :url, :title, presence: true;
  belongs_to :user
  has_many :comments
  has_many :taggings, dependent: :destroy
  has_many :tags, :through => :taggings
  has_many :album_memberships, dependent: :destroy
  has_many :albums, :through => :album_memberships
end
