class ChangeUserCashToDecimal < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :cash, :decimal, :precision => 8, :scale => 2
  end
end
