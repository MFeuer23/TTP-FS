class AddColumnsToStocks < ActiveRecord::Migration[5.2]
  def change
    add_column :stocks, :ticker_symbol, :string
    add_column :stocks, :current_price, :integer
    add_column :stocks, :open_price, :integer
  end
end
