class ChangeTradesTransactionPriceToDecimal < ActiveRecord::Migration[5.2]
  def change
    change_column :trades, :transaction_price, :decimal, :precision => 8, :scale => 2
  end
end
