class Message < ApplicationRecord
  belongs_to :chat
  belongs_to :user

  validates :content, presence: true

  def split_content
    self.content.split("\n")
  end

end
