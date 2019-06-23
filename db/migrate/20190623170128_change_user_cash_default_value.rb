class ChangeUserCashDefaultValue < ActiveRecord::Migration[5.2]
  def change
    change_column_default(:users, :cash, 5000.00)
  end
end
