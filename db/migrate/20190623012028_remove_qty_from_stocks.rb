class RemoveQtyFromStocks < ActiveRecord::Migration[5.2]
  def change
    remove_column :stocks, :qty
  end
end
