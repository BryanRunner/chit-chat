class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.references :user, index: true
      t.references :chat, index: true
      t.text :content
      t.timestamps
    end
  end
end
