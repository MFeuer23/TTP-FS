class StocksController < ApplicationController

  def index

  end

  def create

    @user = User.find(params[:current_user][:id])
    @stock = Stock.create(ticker_symbol: params[:ticker])
    @trade = Trade.create(user_id: @user.id, stock_id: @stock.id, transaction_price: params[:stockData][:current_price], qty: params[:qty])
  end
end
