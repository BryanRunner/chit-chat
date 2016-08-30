class Chat < ApplicationRecord
  has_many :users, through: :participants
  has_many :messages, dependent: :destroy
  has_many :participants
  validates :name, presence: true, uniqueness: true, case_sensitive: false
end
