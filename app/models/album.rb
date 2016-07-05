class Album < ActiveRecord::Base
  validates :title, presence: true
  belongs_to :user
  has_many :photos
end
