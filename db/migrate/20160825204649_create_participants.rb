class CreateParticipants < ActiveRecord::Migration[5.0]
  def change
    create_table :participants do |t|
      t.references :user, index: true
      t.references :chat, index: true
      t.timestamps
    end
  end
end
