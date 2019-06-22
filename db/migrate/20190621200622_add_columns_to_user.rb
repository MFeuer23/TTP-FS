class AddColumnsToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :name, :string
    add_column :users, :cash, :integer, default: 5000
  end
end
