class Album < ActiveRecord::Base
  validates :title, presence: true
  belongs_to :user
  has_many :album_memberships, dependent: :destroy 
  has_many :photos, :through => :album_memberships
end
