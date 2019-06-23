class AddTickerToTrades < ActiveRecord::Migration[5.2]
  def change
    add_column :trades, :ticker, :string
  end
end
