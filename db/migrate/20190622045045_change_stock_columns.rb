class ChangeStockColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :stocks, :current_price
    remove_column :stocks, :open_price
    add_column :stocks, :qty, :integer

  end
end
