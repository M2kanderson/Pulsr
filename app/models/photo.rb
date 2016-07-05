class Photo < ActiveRecord::Base
  validates :url, :title, presence: true;
  belongs_to :user
  belongs_to :album
  has_many :comments
  has_many :taggings, dependent: :destroy 
  has_many :tags, :through => :taggings
end
