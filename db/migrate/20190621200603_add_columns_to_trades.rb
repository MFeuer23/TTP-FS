class AddColumnsToTrades < ActiveRecord::Migration[5.2]
  def change
    add_column :trades, :user_id, :integer
    add_column :trades, :stock_id, :integer
    add_column :trades, :qty, :integer
    add_column :trades, :transaction_price, :integer
  end
end
