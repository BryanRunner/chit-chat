class CreateChats < ActiveRecord::Migration[5.0]
  def change
    create_table :chats do |t|
      t.references :user, index: true
      t.string :name
      t.boolean :public
      t.timestamps
    end
  end
end
